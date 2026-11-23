"use client";

import Image from "next/image";
import { ArrowUpRight, Eye, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ventures } from "../data/content";

type Preview = { index: number; left: number; top: number; width: number };
type PointerPosition = { x: number; y: number };

function pointerPlacement(pointer: PointerPosition, width: number) {
  const gap = 18;
  const height = width * 0.625 + 44;
  const left = pointer.x + width + gap <= window.innerWidth - 16
    ? pointer.x + gap
    : pointer.x - width - gap;
  const top = pointer.y + height + gap <= window.innerHeight - 16
    ? pointer.y + gap
    : pointer.y - height - gap;
  return {
    left: Math.max(16, Math.min(left, window.innerWidth - width - 16)),
    top: Math.max(16, Math.min(top, window.innerHeight - height - 16)),
  };
}

export default function VentureCards() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panel = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const motionFrame = useRef(0);
  const pointer = useRef<PointerPosition | null>(null);
  const previewIndex = preview?.index;

  function cancelClose() {
    if (timer.current) clearTimeout(timer.current);
  }

  function close() {
    cancelClose();
    cancelAnimationFrame(motionFrame.current);
    motionFrame.current = 0;
    pointer.current = null;
    setPreview(null);
  }

  function show(index: number, element: HTMLElement, position?: PointerPosition) {
    cancelClose();
    if (!ventures[index].preview) {
      close();
      return;
    }
    trigger.current = element;
    pointer.current = position ?? null;
    const rect = element.closest(".site-venture-wrap")!.getBoundingClientRect();
    const width = Math.min(360, window.innerWidth - 32);
    const height = width * 0.625 + 44;
    const above = rect.top - height - 12;
    const below = rect.bottom + 12;
    setPreview({
      index,
      width,
      left: Math.max(16, Math.min(rect.right - width - 24, window.innerWidth - width - 16)),
      top: Math.max(16, Math.min(above >= 16 ? above : below, window.innerHeight - height - 16)),
      ...(position ? pointerPlacement(position, width) : {}),
    });
  }

  function followPointer(index: number, position: PointerPosition) {
    if (previewIndex !== index || !pointer.current) return;
    pointer.current = position;
    if (motionFrame.current) return;
    motionFrame.current = requestAnimationFrame(() => {
      motionFrame.current = 0;
      const latest = pointer.current;
      if (!latest) return;
      setPreview((current) => current?.index === index
        ? { ...current, ...pointerPlacement(latest, current.width) }
        : current);
    });
  }

  function scheduleClose() {
    cancelClose();
    timer.current = setTimeout(() => {
      if (panel.current?.contains(document.activeElement)) return;
      if (trigger.current === document.activeElement) return;
      setPreview(null);
    }, 180);
  }

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
    cancelAnimationFrame(motionFrame.current);
  }, []);

  useEffect(() => {
    if (previewIndex === undefined) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (panel.current?.contains(document.activeElement)) trigger.current?.focus();
      setPreview(null);
    }
    function onMove() { setPreview(null); }
    function onOutside(event: PointerEvent) {
      const target = event.target as Node;
      if (!panel.current?.contains(target) && !trigger.current?.closest(".site-venture-wrap")?.contains(target)) {
        setPreview(null);
      }
    }
    window.addEventListener("keydown", dismiss);
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [previewIndex]);

  const venture = preview ? ventures[preview.index] : null;

  return (
    <div className="site-ventures">
      {ventures.map((item, index) => (
        <div
          className="site-venture-wrap"
          key={item.title}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") {
              show(index, event.currentTarget.querySelector("a")!, { x: event.clientX, y: event.clientY });
            }
          }}
          onPointerMove={(event) => {
            if (event.pointerType === "mouse") followPointer(index, { x: event.clientX, y: event.clientY });
          }}
          onPointerLeave={scheduleClose}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget) && !panel.current?.contains(event.relatedTarget)) close();
          }}
        >
          <a
            className="site-glass site-venture"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            onFocus={(event) => show(index, event.currentTarget)}
          >
            <span className="site-index">0{index + 1}</span>
            <h3>{item.title}</h3>
            <div>
              <span className="site-caption">{item.category}</span>
              <p>{item.description}</p>
            </div>
            <ArrowUpRight className="site-arrow" size={20} aria-hidden="true" />
          </a>
          {item.preview && (
            <button
              className="site-venture-preview-toggle"
              type="button"
              aria-label={`Preview ${item.title} website`}
              aria-expanded={preview?.index === index}
              aria-controls={preview?.index === index ? "venture-website-preview" : undefined}
              onClick={(event) => preview?.index === index ? close() : show(index, event.currentTarget)}
            >
              <Eye size={15} aria-hidden="true" /> Preview website
            </button>
          )}
        </div>
      ))}
      {preview && venture?.preview && createPortal(
        <aside
          ref={panel}
          id="venture-website-preview"
          className="site-venture-preview"
          aria-label={`${venture.title} website preview`}
          style={{ left: preview.left, top: preview.top, width: preview.width }}
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== trigger.current) close();
          }}
        >
          <div className="site-venture-preview-bar">
            <span>{new URL(venture.href).hostname}</span>
            <button type="button" aria-label="Close website preview" onClick={() => {
              trigger.current?.focus();
              close();
            }}><X size={16} aria-hidden="true" /></button>
          </div>
          <a href={venture.href} target="_blank" rel="noreferrer" aria-label={`Visit ${venture.title} (opens in a new tab)`}>
            <Image src={venture.preview} alt={`${venture.title} homepage preview`} width={960} height={600} sizes="360px" />
          </a>
        </aside>,
        document.body,
      )}
    </div>
  );
}
