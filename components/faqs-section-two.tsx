'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function FAQs() {
    const t = useTranslations('FAQs');

    const faqItems = [
        {
            id: 'item-1',
            question: t('items.item1.question'),
            answer: t('items.item1.answer'),
        },
        {
            id: 'item-2',
            question: t('items.item2.question'),
            answer: t('items.item2.answer'),
        },
        {
            id: 'item-3',
            question: t('items.item3.question'),
            answer: t('items.item3.answer'),
        },
        {
            id: 'item-4',
            question: t('items.item4.question'),
            answer: t('items.item4.answer'),
        },
        {
            id: 'item-5',
            question: t('items.item5.question'),
            answer: t('items.item5.answer'),
        },
        {
            id: 'item-6',
            question: t('items.item6.question'),
            answer: t('items.item6.answer'),
        },
    ]

    return (
        <section className='w-full'>
            <div className="md:col-span-3">
                <Accordion
                    type="single"
                    collapsible>
                    {faqItems.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}>
                            <AccordionTrigger className="cursor-pointer text-base hover:no-underline md:text-lg text-base">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-base md:text-lg text-gray-700">{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* <p className="text-muted-foreground mt-6 md:hidden">
                Can't find what you're looking for? Contact our{' '}
                <Link
                    href="#"
                    className="text-primary font-medium hover:underline">
                    customer support team
                </Link>
            </p> */}
        </section>
    )
}