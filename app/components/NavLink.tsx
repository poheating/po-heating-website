'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // nie z next-intl!

interface NavLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
    const isHash = href.includes('#')

    if (isHash) {
        return (
            <a
                href={href}
                className={className}
                onClick={(e) => {
                    e.preventDefault()
                    const id = href.split('#')[1]
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
            >
                {children}
            </a>
        )
    }

    return <Link href={href}>{children}</Link>
}