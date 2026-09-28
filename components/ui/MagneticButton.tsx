"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return true;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return isTouch || prefersReduced;
}

function getServerSnapshot() {
  return true;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const isTouch = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouch) return;
    const elem = href ? anchorRef.current : buttonRef.current;
    if (!elem) return;

    const rect = elem.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const factor = 0.25;
    const maxOffset = 8;
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * factor));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * factor));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle = isTouch
    ? {}
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      };

  const commonClasses = `magnetic-elem inline-flex items-center justify-center transition-colors duration-300 will-change-transform ${className}`;

  if (href) {
    return (
      <a
        ref={anchorRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
        aria-label={ariaLabel}
        className={commonClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      aria-label={ariaLabel}
      className={commonClasses}
    >
      {children}
    </button>
  );
}
