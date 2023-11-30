import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage(){
    return (
        <section className="section">
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                    <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                       <Image src='/about/woman.png' alt="Woman" width={690} height={851} /> 
                    </div>
                    <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="h1">About me</h1>
                        <p className="mb-12 max-w-sm xl:max-w-xl">Exploring beauty through the lens, I seize authentic moments that unfold narratives. Passionate about translating visions into captivating images, I extend my unique perspective to the world.
                        <br />
                        <br />
                        Rooted in my fervor for photography, I unearth beauty in fleeting moments, crafting them into timeless memories. Every click narrates a unique story, beckoning exploration of enchantment within each frame.</p>
                        <Button size='lg' className="py-6">
                            <Link href='/portfolio'>View my work</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}