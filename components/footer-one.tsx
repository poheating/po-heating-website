import { Logo } from '@/components/logo'
import Image from 'next/image'
import Link from 'next/link'
// import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';
import { useTranslations } from 'next-intl';

const FooterSection = () => {
    const t = useTranslations('Footer');

    const serviceLinks = [
        {
            title: t('links.boilerServices'),
            href: '/boiler-services',
        },
        {
            title: t('links.radiatorInstallations'),
            href: '/radiators-installations-n-repairs',
        },
        {
            title: t('links.gasApplianceInstallation'),
            href: '/gas-appliances-installations',
        },
        {
            title: t('links.heatingUpgrades'),
            href: '/heating-upgrades-n-smart-controls',
        },
    ]

    const companyLinks = [
        {
            title: t('links.about'),
            href: '/about',
        },
        {
            title: t('links.contact'),
            href: '/#contact',
        },
    ]

    const legalLinks = [
        {
            title: t('links.privacyPolicy'),
            href: '/privacy-policy',
        },
        {
            title: t('links.cookiesPolicy'),
            href: '/cookies-policy',
        },
    ]

    return (
        <footer style={{ backgroundColor: 'rgb(255, 102, 42)' }} className="text-white py-16 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link
                            href="/"
                            aria-label={t('logoAriaLabel')}
                            className="block w-fit">
                            <Image 
                                src={'/images/logo.svg'} 
                                width={80} 
                                height={80} 
                                alt={t('logoAlt')} 
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                            Professional heating services you can trust.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t('social.facebookAriaLabel')}
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t('social.instagramAriaLabel')}
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg">Services</h3>
                        <ul className="flex flex-col gap-3">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-white/90 hover:text-white hover:underline underline-offset-4 transition-all">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg">Company</h3>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-white/90 hover:text-white hover:underline underline-offset-4 transition-all">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg">Legal</h3>
                        <ul className="flex flex-col gap-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-sm text-white/90 hover:text-white hover:underline underline-offset-4 transition-all">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-white/90 text-sm text-center md:text-left">
                        {t('copyright', { year: new Date().getFullYear() })}
                    </span>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;
