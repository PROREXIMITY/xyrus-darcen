import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  open: boolean;
  startIndex?: number;
  onClose: () => void;
}

export default function CarouselModal({ images, open, startIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, images.length, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
    >
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="flex-1 bg-black/80 rounded-lg overflow-hidden">
            <div className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center">
              <Image
                src={images[index] || "/assets/placeholder.png"}
                alt={`screenshot-${index + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="px-4 py-3 flex items-center justify-between text-sm text-gray-300">
              <div>{index + 1} / {images.length}</div>
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            className="text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
