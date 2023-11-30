import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";

export default function ContactPage(){
    return (
        <section className="section">
            <div className="container mx-auto h-full">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
                    <div className="hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10">bg</div>
                    <div className="lg:flex-1 px-4">
                        <h1 className="h1">Contact me</h1>
                        <p className="mb-12">I would love to get suggestions</p>
                        <ContactForm />
                    </div>
                    <div className="lg:flex-1">
                        <Image src='/contact/woman.png' alt="woman" width={650} height={960} />
                    </div>
                </div>
            </div>
        </section>
    )
}