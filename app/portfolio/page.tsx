import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const images = [
    {
        href: '/portfolio/1.png'
    },
    {
        href: '/portfolio/2.png'
    },
    {
        href: '/portfolio/3.png'
    },
    {
        href: '/portfolio/4.png'
    },
    {
        href: '/portfolio/5.png'
    },
    {
        href: '/portfolio/6.png'
    },
    

]

export default function PortfolioPage(){
    return (
        <section className="section">
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    <div className="flex flex-col lg:items-start">
                        <h1 className="h1">Portfolio</h1>
                            <p className="mb-12 max-w-sm xl:max-w-xl">Each image tells a unique story, capturing moments that transcend the ordinary. Each photo is an expression of creativity, revealing the intersection between light, emotion and visual storytelling.
                            <br />
                            <br />
                            Each project reflects my dedication to the art of photography, seeking aesthetic excellence and the power of a well-captured image. From picturesque landscapes to intimate portraits, each photograph is a celebration of the diverse beauty the world offers.</p>
                            <Button size='lg' className="py-6 mb-8">
                                <Link href='/contact'>Hire me</Link>
                            </Button>
                    </div>
                    <div className="overflow-hidden grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {images.map(({href}, index) => (
                            <Image key={index} src={href} alt="image" width={320} height={220} className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}