"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Create an array to hold all the image objects
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const frameCount = 240;

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale progress so it completes before the section ends, giving a "hold" at the end
  const scaledProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  // Load images on mount
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameIndex = String(i).padStart(4, "0");
        img.src = `/frames/${frameIndex}.jpg`;
        
        // We push the image object immediately to keep the index correct
        loadedImages.push(img);

        img.onload = () => {
          loadedCount++;
          // Draw the very first frame as soon as it's ready if it's index 0
          if (i === 1) {
            renderFrame(0, loadedImages);
          }
          if (loadedCount === frameCount) {
            setImagesLoaded(true);
          }
        };
      }
      imagesRef.current = loadedImages;
    };

    loadImages();
  }, []);

  // Prevent scrolling while images are loading
  useEffect(() => {
    if (!imagesLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [imagesLoaded]);

  // Set initial canvas size and handle resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      // For high DPI displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      // Redraw current frame on resize
      const currentFrame = Math.min(
        frameCount - 1,
        Math.floor(scaledProgress.get() * frameCount)
      );
      if (imagesRef.current[currentFrame] && imagesRef.current[currentFrame].complete) {
        renderFrame(currentFrame);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    // Initial size
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [scaledProgress]);

  // The function to draw an image on the canvas using object-cover logic
  const renderFrame = (index: number, imagesArray = imagesRef.current) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const image = imagesArray[index];

    if (!canvas || !ctx || !image || !image.complete) return;

    const rect = canvas.getBoundingClientRect();
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;

    // Calculate aspect ratios
    const imageAspect = image.width / image.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imageAspect > canvasAspect) {
      // Image is wider than canvas
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imageAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Canvas is wider than image
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imageAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw the image mimicking object-cover
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync canvas redraw with scroll
  useMotionValueEvent(scaledProgress, "change", (latest) => {
    const index = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    // Use requestAnimationFrame to ensure smooth 60fps rendering
    requestAnimationFrame(() => renderFrame(index));
  });

  // Text Opacity Transforms
  const text1Opacity = useTransform(scaledProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scaledProgress, [0, 0.25], ["0%", "-50%"]);
  
  const text2Opacity = useTransform(scaledProgress, [0.3, 0.45, 0.55], [0, 1, 0]);
  const text2Y = useTransform(scaledProgress, [0.3, 0.45, 0.55], ["50%", "0%", "-50%"]);
  
  const text3Opacity = useTransform(scaledProgress, [0.6, 0.75, 0.9], [0, 1, 0]);
  const text3Y = useTransform(scaledProgress, [0.6, 0.75, 0.9], ["50%", "0%", "-50%"]);

  const text4Opacity = useTransform(scaledProgress, [0.9, 1], [0, 1]);
  const text4Y = useTransform(scaledProgress, [0.9, 1], ["50%", "0%"]);

  return (
    <section ref={containerRef} className="relative h-[1200vh] bg-ink">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Loading State Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-ink/50 backdrop-blur-sm transition-opacity duration-500">
            <span className="text-white font-bebas text-3xl animate-pulse">Loading Sequence...</span>
          </div>
        )}
        
        {/* The canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
        
        {/* Dynamic Overlays */}
        <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none mix-blend-difference px-6">
          
          <motion.div 
            style={{ opacity: text1Opacity, y: text1Y }} 
            className="absolute flex flex-col items-center text-center"
          >
            <h2 className="text-7xl sm:text-9xl md:text-[12rem] font-bebas text-white leading-none">
              THE CREATIVE
            </h2>
            <p className="font-caveat text-3xl md:text-5xl text-white mt-4 -rotate-2">
              journey begins here
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y }} 
            className="absolute flex flex-col items-center text-center"
          >
            <h2 className="text-6xl sm:text-8xl md:text-[8rem] font-bebas text-white leading-none">
              MASTERING EVERY
            </h2>
            <h2 className="text-6xl sm:text-8xl md:text-[8rem] font-bebas text-deep-green text-stroke leading-none">
              MEDIUM
            </h2>
          </motion.div>

          <motion.div 
            style={{ opacity: text3Opacity, y: text3Y }} 
            className="absolute flex flex-col items-center text-center"
          >
            <h2 className="text-6xl sm:text-8xl md:text-[8rem] font-bebas text-white leading-none">
              BLENDING TRADITION
            </h2>
            <p className="font-space text-lg md:text-2xl text-white mt-4 font-bold max-w-2xl">
              From textile design to digital branding, finding the perfect balance between heritage and modern aesthetics.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: text4Opacity, y: text4Y }} 
            className="absolute flex flex-col items-center text-center"
          >
            <h2 className="text-7xl sm:text-9xl md:text-[12rem] font-bebas text-white leading-none">
              LET'S DIVE IN
            </h2>
            <p className="font-caveat text-4xl text-hot-pink mt-4 rotate-2">
              scroll down &darr;
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
