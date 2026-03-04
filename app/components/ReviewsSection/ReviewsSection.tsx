'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './styles.module.css'
import { useTranslations, useLocale } from 'next-intl'

const CARD_WIDTH_DESKTOP = 420
const CARD_WIDTH_MOBILE = 260
const CARD_GAP = 24
const MOBILE_BREAKPOINT = 640

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg width="13" height="13" viewBox="0 0 24 24"
        fill={filled ? '#EA580C' : 'none'}
        stroke={filled ? '#EA580C' : '#D1D5DB'}
        strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const GoogleIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
)

const FacebookIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
)

const AvatarPlaceholder = ({ name }: { name: string }) => {
    const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?'
    return <div className={styles.avatarPlaceholder}>{initials}</div>
}

function ReviewCard({ review, t, locale }: { review: any; t: (key: string) => string; locale: string }) {
    const [imgError, setImgError] = useState(false)

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                {review.authorPhoto && !imgError
                    ? <img
                        src={review.authorPhoto}
                        alt={review.authorName}
                        className={styles.avatar}
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                      />
                    : <AvatarPlaceholder name={review.authorName} />
                }
                <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{review.authorName || t('anonymous')}</p>
                    <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} filled={i < (review.rating || 5)} />
                        ))}
                    </div>
                </div>
                <div className={styles.badge}>
                    {review.source === 'google' ? <GoogleIcon /> : <FacebookIcon />}
                    <span className={styles.badgeLabel}>
                        {review.source === 'google' ? t('sourceGoogle') : t('sourceFacebook')}
                    </span>
                </div>
            </div>

            <div className={styles.quote}>"</div>

            <p className={styles.text}>
                {review.text || t('noText')}
            </p>

            <div className={styles.cardFooter}>
                <span className={styles.date}>
                    {review.date
                        ? new Date(review.date).toLocaleDateString(locale, { month: 'long', year: 'numeric' })
                        : ''}
                </span>
                {review.reviewUrl && (
                    <a href={review.reviewUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {t('seeReview')}
                    </a>
                )}
            </div>
        </div>
    )
}

export default function ReviewsSection() {
    const t = useTranslations('Reviews')
    const locale = useLocale()
    const [reviews, setReviews] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [shouldScroll, setShouldScroll] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const posRef = useRef(0)
    const rafRef = useRef<number>(0)
    const isPausedRef = useRef(false)

    useEffect(() => {
        fetch('/api/reviews')
            .then(r => r.json())
            .then(data => { setReviews(data); setLoading(false) })
    }, [])

    useEffect(() => {
        if (!reviews.length) return

        const check = () => {
            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
            const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP
            const totalWidth = reviews.length * (cardWidth + CARD_GAP) - CARD_GAP
            setShouldScroll(totalWidth > window.innerWidth)
        }

        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [reviews])

    useEffect(() => {
        if (!shouldScroll) return
        const track = trackRef.current
        if (!track) return

        posRef.current = 0
        const speed = 0.4

        const animate = () => {
            if (!isPausedRef.current) {
                posRef.current -= speed
                const half = track.scrollWidth / 2
                if (Math.abs(posRef.current) >= half) posRef.current = 0
                track.style.transform = `translateX(${posRef.current}px)`
            }
            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)
        return () => {
            cancelAnimationFrame(rafRef.current)
            if (track) track.style.transform = ''
        }
    }, [shouldScroll])

    const isTouch = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

    const touchLastX = useRef(0)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchLastX.current = e.touches[0].clientX
        isPausedRef.current = true
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const dx = e.touches[0].clientX - touchLastX.current
        touchLastX.current = e.touches[0].clientX
        posRef.current += dx
        const track = trackRef.current
        if (track) {
            const half = track.scrollWidth / 2
            if (posRef.current > 0) posRef.current = -half + posRef.current
            if (Math.abs(posRef.current) >= half) posRef.current = 0
            track.style.transform = `translateX(${posRef.current}px)`
        }
    }

    const handleTouchEnd = () => {
        isPausedRef.current = false
    }

    const displayReviews = shouldScroll ? [...reviews, ...reviews] : reviews

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>&mdash; &nbsp; {t('sectionLabel')}</h2>
                <h3>{t('sectionTitle')}</h3>
            </div>

            <div
                ref={wrapperRef}
                className={`${styles.sliderWrapper} ${!shouldScroll ? styles.sliderStatic : ''}`}
                onMouseEnter={() => { if (!isTouch()) isPausedRef.current = true }}
                onMouseLeave={() => { if (!isTouch()) isPausedRef.current = false }}
                onTouchStart={shouldScroll ? handleTouchStart : undefined}
                onTouchMove={shouldScroll ? handleTouchMove : undefined}
                onTouchEnd={shouldScroll ? handleTouchEnd : undefined}
            >
                {shouldScroll && <div className={styles.fadeLeft} />}
                {shouldScroll && <div className={styles.fadeRight} />}

                <div
                    ref={trackRef}
                    className={`${styles.track} ${!shouldScroll ? styles.trackStatic : ''}`}
                >
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className={styles.skeleton} />
                        ))
                        : displayReviews.map((r, i) => (
                            <ReviewCard key={i} review={r} t={t} locale={locale} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}