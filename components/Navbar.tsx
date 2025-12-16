"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="logo-group">
          <Image
            src="/logo.svg"
            alt="Innocent Resources Logo"
            width={36}
            height={36}
            priority
          />
          <span className="logo-text">Innocent Resources</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/company">Company</a>
          <a className="nav-link" href="/sustainability">Sustainability</a>
          <a className="nav-link" href="/opportunities">Opportunities</a>
          <a className="nav-link" href="/insights">Insights</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="mobile-nav">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/company" onClick={() => setOpen(false)}>Company</a>
          <a href="/sustainability" onClick={() => setOpen(false)}>Sustainability</a>
          <a href="/opportunities" onClick={() => setOpen(false)}>Opportunities</a>
          <a href="/insights" onClick={() => setOpen(false)}>Insights</a>
        </nav>
      )}
    </header>
  );
}
