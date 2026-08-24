import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contacts",
    description: "Contacts page",
};


export default function ContactsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contacts</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-2"> Daily from 10 a.m. to 7 p.m.
                Drop by our retail store: it’s always warm and cozy here, and we’re ready to greet you with a smile! </p>
            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Telephone</h3>
                    <p className="text-gray-600 text-lg">
                        <a href="tel:+79990000000" className="text-blue-600 hover:underline">+7 (999) 000-00-00</a>
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">
                        <a href="mailto:ah!@mail.ru"
                           className="text-blue-600 hover:underline">ah!@mail.ru</a>
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600">
                        Moscow, Cosma Street, house 1, office 311<br/>
                    </p>
                </div>
            </div>
        </div>
    );
}
