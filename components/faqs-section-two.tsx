'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How often should I service my boiler?',
            answer: 'Annual boiler servicing is recommended to maintain efficiency, prevent breakdowns, and ensure your warranty remains valid. We provide certified boiler servicing across Weston-super-Mare.',
        },
        {
            id: 'item-2',
            question: 'Can you repair leaking radiators?',
            answer: 'Yes! We repair all types of radiator leaks, replace faulty valves, and balance your system to ensure even heating throughout your home.',
        },
        {
            id: 'item-3',
            question: 'Do you install smart heating controls?',
            answer: 'Absolutely. We can install and configure Hive, Nest, or Tado smart thermostats, allowing you to control your heating remotely and save on energy bills.',
        },
        {
            id: 'item-4',
            question: 'Can you install a new gas cooker or hob?',
            answer: "Yes. As a Gas Safe registered engineer, we safely install, test, and certify all new gas cookers and hobs in Weston-super-Mare and surrounding areas.",
        },
        {
            id: 'item-5',
            question: 'Do you provide emergency boiler repairs?',
            answer: 'Yes. We respond promptly to boiler breakdowns, leaks, and fault codes to restore your heating system quickly and safely.',
        },
        {
            id: 'item-6',
            question: 'What areas do you cover?',
            answer: 'We serve Weston-super-Mare, North Somerset, and nearby towns, providing reliable boiler, radiator, and gas appliance services.',
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
