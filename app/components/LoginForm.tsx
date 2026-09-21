"use client"

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await fetch("/api/admin2/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: login, password: password})
        })
        const data = await response.json()
        // console.log(data, " data")
        if (!data.ok) {
            setErrorMessage("Login error")
            return
        }
        router.refresh()
    }

    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Login</h1>
                <p className="text-lg text-gray-700 leading-relaxed">Access your account</p>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Login<input type="text" value={login}
                                    onChange={(e) => {
                                        setLogin(e.target.value)
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                                           disabled:cursor-not-allowed"
                                    required/>
                    </label>
                    <label className="block text-sm font-medium text-gray-700">
                        Password<input type="password" value={password}
                                       onChange={(e) => {
                                           setPassword(e.target.value)
                                       }}
                                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                                           disabled:cursor-not-allowed"
                                       required/>
                    </label>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700
                                    hover:bg-gray-50 hover:border-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                    >Login
                    </button>
                </form>
                {errorMessage && (<p>Message: {errorMessage}</p>)}
                {/*<p className="mt-4 text-center text-sm text-gray-600">*/}
                {/*    <Link href="/api/admin2/register" className="text-blue-600 hover:underline">*/}
                {/*        Register*/}
                {/*    </Link>*/}
                {/*</p>*/}
            </section>
        </main>
    )
}