import type {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Main",
    description: "Main page",
};

export default function MainPage() {
    return (
        <div className="relative overflow-hidden min-h-[600px]">
            {/*<div className="absolute inset-0 z-0">*/}
            {/*    <Image src="/images/wheyBanner.jpg" alt="banner"*/}
            {/*           fill*/}
            {/*           className="object-cover"*/}
            {/*           priority/>*/}
            {/*</div>*/}
            <div className="absolute inset-0 bg-black/50 z-10"/>
        </div>
    );
}
