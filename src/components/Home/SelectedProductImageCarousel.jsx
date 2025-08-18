import React, { useState, useRef, useEffect, useCallback } from "react";

const SelectedProductImageCarousel = ({
  images = [],
  initialIndex = 0,
  thumbnailsToShow = 4,
}) => {
  const [index, setIndex] = useState(
    Math.max(0, Math.min(initialIndex, images.length - 1))
  );
  const [thumbStart, setThumbStart] = useState(0);
  const touchStartX = useRef(null);
  const containerRef = useRef(null);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (index < thumbStart) setThumbStart(index);
    else if (index >= thumbStart + thumbnailsToShow)
      setThumbStart(index - thumbnailsToShow + 1);
  }, [index, thumbStart, thumbnailsToShow]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  function thumbPrev() {
    setThumbStart((s) => Math.max(0, s - thumbnailsToShow));
  }
  function thumbNext() {
    setThumbStart((s) =>
      Math.min(
        Math.max(0, images.length - thumbnailsToShow),
        s + thumbnailsToShow
      )
    );
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  }
  function onTouchEnd(e) {
    if (!touchStartX.current) return;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (endX == null) return;
    const dx = endX - touchStartX.current;
    const threshold = 40;
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX.current = null;
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4 text-center text-gray-500">
        No images to display.
      </div>
    );
  }

  const visibleThumbs = images.slice(
    thumbStart,
    Math.min(images.length, thumbStart + thumbnailsToShow)
  );

  return (
    <div className="w-full max-w-4xl mx-auto" ref={containerRef}>
      <div className="relative flex justify-center mt-4 overflow-hidden">
        <img
          src={images[index]}
          alt={`ERROR`}
          loading="lazy"
          className="w-full h-80 md:h-96 object-fill border-2 border-white"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <button
          onClick={thumbPrev}
          aria-label="Scroll thumbnails left"
          className="p-2 rounded-md text-white focus:outline-none cursor-pointer"
          disabled={thumbStart === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex-1 justify-center overflow-hidden">
          <div className="flex justify-center gap-5 transition-all duration-200">
            {visibleThumbs.map((src, i) => {
              const realIndex = thumbStart + i;
              const selected = realIndex === index;
              return (
                <button
                  key={realIndex}
                  onClick={() => setIndex(realIndex)}
                  className={`flex-none w-28 h-24 overflow-hidden p-0 border-2 ${
                    selected ? "border-secondary" : "border-transparent"
                  } focus:outline-none bg-white`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${realIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
            {visibleThumbs.length < thumbnailsToShow &&
              Array.from({
                length: thumbnailsToShow - visibleThumbs.length,
              }).map((_, k) => (
                <div key={`fill-${k}`} className="flex-none w-28 h-24" />
              ))}
          </div>
        </div>

        <button
          onClick={thumbNext}
          aria-label="Scroll thumbnails right"
          className="p-2 rounded-md text-white focus:outline-none cursor-pointer"
          disabled={thumbStart >= Math.max(0, images.length - thumbnailsToShow)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SelectedProductImageCarousel;
