'use client'

import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/data";

export default function ContactPage(){
    return (
        <section className="section">
            <div className="container mx-auto h-full">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
                    <motion.div variants={fadeIn('right', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.7}} className="lg:flex-1 px-4">
                        <h1 className="h1">Contact me</h1>
                        <p className="mb-12">I would love to get suggestions</p>
                        <ContactForm />
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount:0.6}} className="lg:flex-1">
                        <Image src='/contact/woman.png' alt="woman" width={650} height={960} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}