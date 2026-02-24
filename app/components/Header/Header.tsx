'use client'

import { useDevice } from '@/app/context/DeviceProvider';
import { useScroll } from '@/app/context/ScrollProvider';
import Image from 'next/image';
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../../public/assests/Logo 3  1.png";
import blackLogo from "../../../public/assests/Logoblack.png";
import "./Header.css";
import ReusableButton from '../Buttons/ReusableButton/ReusableButton';
import BorderButton from '../Buttons/BorderButton';

const menu = [
  {
    label: "Home",
    href: "#"
  },
  {
    label: "About Us",
    href: "#"
  },
  {
    label: "What We Do",
    submenu: [
      { label: "Service menu", href: "#" },
      { label: "Work with Vaults", href: "#" },
      { label: "Career vaultnews", href: "#" },
      { label: "Portfolio", href: "#" }
    ]
  },
  {
    label: "Vault People",
    submenu: [
      { label: "Vault Story", href: "#" },
      { label: "Team", href: "#" },
      { label: "Operating Partners", href: "#" }
    ]
  },
  {
    label: "Vault Perspectives",
    submenu: [
      { label: "News", href: "#" },
      { label: "Food For Thought", href: "#" }
    ]
  },
  {
    label: "Events",
    href: "#"
  },
  {
    label: "Career",
    href: "#"
  }
];

const Header = () => {
  const { layoutMode } = useDevice();
  const { scrolled, scrollY } = useScroll();
  const isCompact = layoutMode === "compact";
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarSubmenuOpen, setSidebarSubmenuOpen] = useState<number | null>(null);

  // Sidebar close handler for escape key and overlay clicks
  const handleSidebarClose = () => {
    setSidebarOpen(false);
    setSidebarSubmenuOpen(null);
  };

  // Prevent scrolling when sidebar is open
  if (typeof window !== 'undefined') {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <header
      className={`vault-header px-4 py-3 d-flex align-items-center justify-content-between${scrolled ? " vault-header-bg-white" : ""
        }`}
    >
      <div className="d-flex align-items-center justify-content-between w-100 gap-3">
        <Image src={scrolled ? blackLogo : logo} alt="Vault Logo" width={100} />
        {isCompact ? (
          <>
            <button
              className="btn bg-transparent border-0"
              style={{ padding: 0, minWidth: "max-content" }}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <RiMenu3Fill size={24} color={scrolled ? '#000' : '#fff'} />
            </button>
            <aside
              className={`vault-sidebar${sidebarOpen ? ' open' : ''}`}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#fff',
                zIndex: 2100,
                transform: sidebarOpen ? 'translateX(0%)' : 'translateX(-100%)',
                transition: 'transform 0.3s',
                boxShadow: '0 4px 32px rgba(0,0,0,0.15)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center p-4 mb-3">
                <Image src={blackLogo} alt="Vault Logo" width={100} />
                <button
                  className="btn bg-transparent border-0"
                  aria-label="Close menu"
                  onClick={handleSidebarClose}
                  style={{ padding: 0, minWidth: "max-content" }}
                >
                  <IoMdClose size={24} color='#000' />
                </button>
              </div>
              <nav>
                <ul className="list-unstyled px-4">
                  {menu.map((item, idx) => (
                    !item.submenu ? (
                      <li key={item.label} className="mb-3">
                        <a
                          className="fw-semibold text-dark menu-link fs-16 text-decoration-none"
                          href={item.href}
                          onClick={handleSidebarClose}
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={item.label} className="mb-3">
                        <button
                          className="fw-semibold text-dark bg-transparent border-0 d-flex align-items-center menu-link fs-16"
                          onClick={() => setSidebarSubmenuOpen(idx === sidebarSubmenuOpen ? null : idx)}
                          aria-expanded={sidebarSubmenuOpen === idx}
                        >
                          <span>{item.label}</span>
                          <span
                            style={{
                              marginLeft: 8,
                              transition: 'transform 0.2s',
                              transform: sidebarSubmenuOpen === idx ? 'rotate(90deg)' : 'rotate(0deg)'
                            }}
                          >
                            <MdKeyboardArrowRight size={20} />
                          </span>
                        </button>
                        <ul
                          className={`sidebar-submenu list-unstyled ps-3 mt-2`}
                          style={{
                            maxHeight: sidebarSubmenuOpen === idx ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.25s',
                          }}
                        >
                          {item.submenu.map(sub => (
                            <li key={sub.label} className="mb-2">
                              <a
                                className="text-dark menu-card-item"
                                href={sub.href}
                                style={{ textDecoration: 'none', fontSize: '16px' }}
                                onClick={handleSidebarClose}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  ))}
                </ul>
              </nav>
              <div className="px-4 mb-4">
                <a
                  href="#"
                  className="fw-semibold fs-14 align-items-center letter-spacing"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                  onClick={handleSidebarClose}
                >
                  Contact
                  <span className="ms-2"><GoArrowUpRight size={24} /></span>
                </a>
              </div>
            </aside>
          </>
        ) : (
          <>
            <nav>
              <ul className="nav align-items-center">
                {menu.map((item, idx) =>
                  !item.submenu ? (
                    <li className="nav-item" key={item.label}>
                      <a
                        className={`nav-link${scrolled ? ' text-dark' : ' text-white'}`}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li
                      className="nav-item menu-parent position-relative"
                      key={item.label}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <a
                        className={`nav-link${scrolled ? ' text-dark' : ' text-white'}`}
                        href="#"
                        onClick={e => e.preventDefault()}
                        style={{ cursor: "pointer" }}
                      >
                        {item.label}
                      </a>
                      <ul className={`menu-card${hoveredIdx === idx ? " show" : ""}`}>
                        {item.submenu.map(sub => (
                          <li key={sub.label}>
                            <a className="menu-card-item" href={sub.href}>
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div>
              <BorderButton
                text="Contact"
                style={scrolled ? { color: "#000" } : { color: "#fff" }}
                sufixIconChildren={<GoArrowUpRight size={26} />}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header