import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About page",
};


export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
            <p className="text-lg text-gray-700 leading-relaxed">Ah! is a Ural skincare brand founded in 2020.
                The creator of the brand, Elena Vayn, is a millionaire blogger and also a successful businesswoman.
                Ah! – this is not just cosmetics, it is a philosophy of taking care of yourself and your body.
                Our goal is to help you become more confident, emphasize your individuality and enjoy a feeling of
                freshness and beauty.</p>
        </div>
    );
}
