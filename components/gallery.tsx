"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Game } from "@/lib/games";
import { Arrow } from "./icons";

export function Gallery({ images }: { images: Game["gallery"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const image = images[active];
  function open(index: number) {
    setActive(index);
    setIsOpen(true);
    dialog.current?.showModal();
  }
  function move(direction: number) {
    setActive(
      (current) => (current + direction + images.length) % images.length,
    );
  }
  if (!image) return null;
  return (
    <>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <figure key={item.src}>
            <button
              className="gallery-button"
              onClick={() => open(index)}
              aria-label={`Enlarge screenshot ${index + 1}: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1440}
                height={960}
                sizes="(max-width: 700px) 90vw, 32vw"
              />
              <span className="gallery-expand">
                <Arrow diagonal />
              </span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Game screenshot viewer"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
      >
        <div className="lightbox-content">
          <div className="lightbox-top">
            <span>
              SCREENSHOT {active + 1} / {images.length}
            </span>
            <button
              autoFocus
              className="lightbox-close"
              onClick={() => dialog.current?.close()}
            >
              Close ×
            </button>
          </div>
          {isOpen && (
            <Image
              src={image.src}
              alt={image.alt}
              width={1440}
              height={960}
              sizes="(max-width: 1200px) 90vw, 1060px"
            />
          )}
          <div className="lightbox-bottom">
            <button onClick={() => move(-1)} aria-label="Previous screenshot">
              ←
            </button>
            <p aria-live="polite">{image.caption}</p>
            <button onClick={() => move(1)} aria-label="Next screenshot">
              →
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
