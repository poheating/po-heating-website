'use client'

import Link from 'next/link';
import styles from './styles.module.css'
import Image from 'next/image';
import { PhoneCallIcon, ChevronDown, Menu, X } from 'lucide-react'
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(scrollY.get() > 10)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)

    const pathname = usePathname()
    const isHomePage = pathname === "/"
    const t = useTranslations('Navbar');

    useEffect(() => {
        if (isHomePage) {
            const unsubscribe = scrollY.onChange((value: number) => {
                setScrolled(value > 10)
            })

            setScrolled(scrollY.get() > 10)

            return () => unsubscribe()
        } else {
            setScrolled(true)
        }
    }, [scrollY]);

    // Close dropdown when clicking outside (desktop only)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (window.innerWidth > 968 && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const services = [
        {
            name: t('services.boilerServices'),
            link: '/boiler-services'
        },
        {
            name: t('services.radiatorInstallations'),
            link: '/radiators-installations-n-repairs'
        },
        {
            name: t('services.gasAppliances'),
            link: '/gas-appliances-installations'
        },
        {
            name: t('services.heatingUpgrades'),
            link: '/heating-upgrades-n-smart-controls'
        }
    ]

    const links = [
        {
            name: t('links.contact'),
            link: '/#contact'
        },
        {
            name: t('links.about'),
            link: '/about'
        }
    ]

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
    }

    return (
        <nav
            className={styles.nav}
            style={{
                backgroundColor: scrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
                boxShadow: scrolled || isMobileMenuOpen ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <Link href={'/'}><Image src={'/images/logo.svg'} width={45} height={45} alt={t('logoAlt')} /></Link>
                </div>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {
                        links.map((link, i) => (
                            <a
                                style={{
                                    color: scrolled ? 'rgb(33, 33, 33)' : 'rgb(236, 236, 236)',
                                }}
                                className={styles.link} href={link.link} key={i}>{link.name}</a>
                        ))
                    }
                    
                    {/* Services Dropdown - Desktop */}
                    <div 
                        className={styles.dropdown} 
                        ref={dropdownRef}
                        onMouseEnter={() => window.innerWidth > 968 && setIsServicesOpen(true)}
                        onMouseLeave={() => window.innerWidth > 968 && setIsServicesOpen(false)}
                    >
                        <button
                            className={styles.dropdownToggle}
                            style={{
                                color: scrolled ? 'rgb(33, 33, 33)' : 'rgb(236, 236, 236)',
                            }}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            {t('services.title')}
                            <ChevronDown 
                                size={18} 
                                style={{
                                    transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: '0.2s ease-in-out'
                                }}
                            />
                        </button>
                        
                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    className={styles.dropdownMenu}
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    {services.map((service, i) => (
                                        <Link
                                            key={i}
                                            href={service.link}
                                            className={styles.dropdownItem}
                                            onClick={() => setIsServicesOpen(false)}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href={'/#contact'} className={styles.cta1}>
                        <div className={styles.btnTop}>
                            {t('callMe')} <span><PhoneCallIcon size={22} /></span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        color: scrolled || isMobileMenuOpen ? 'rgb(33, 33, 33)' : 'rgb(236, 236, 236)',
                    }}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div 
                            className={styles.mobileMenuContent}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                        >
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.link}
                                    className={styles.mobileLink}
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Services Dropdown - Mobile */}
                            <div className={styles.mobileDropdown}>
                                <button
                                    className={styles.mobileDropdownToggle}
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    {t('services.title')}
                                    <ChevronDown 
                                        size={18} 
                                        style={{
                                            transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: '0.2s ease-in-out'
                                        }}
                                    />
                                </button>
                                
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            className={styles.mobileDropdownMenu}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {services.map((service, i) => (
                                                <Link
                                                    key={i}
                                                    href={service.link}
                                                    className={styles.mobileDropdownItem}
                                                    onClick={handleLinkClick}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link 
                                href={'/#contact'} 
                                className={styles.mobileCta}
                                onClick={handleLinkClick}
                            >
                                <PhoneCallIcon size={22} />
                                {t('callMe')}
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;