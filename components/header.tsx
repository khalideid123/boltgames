"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bolt, Arrow } from "./icons";

const links = [
  ["Home", "/"],
  ["Games", "/#games"],
  ["About", "/#about"],
  ["For Publishers", "/#publishers"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="header-inner wrap">
        <Link
          href="/"
          className="brand"
          aria-label="Bolt Games home"
          onClick={() => setOpen(false)}
        >
          <Bolt />
          <span>
            BOLT <span className="brand-light">GAMES</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  );
}
