"use client"

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

const emptyForm = {
    login: "",
    password: "",
    role: "manager"
}

export default function RegisterForm() {
    const [form, setForm] = useState(emptyForm)
    const [message, setMessage] = useState("")
    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await fetch("/api/admin2/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        // console.log(data, " data")
        alert("added user")
        setForm(emptyForm)

        if (!data.ok) {
            setMessage("Register error")
        } else {
            setMessage("Register success")
            setForm(emptyForm)
        }
        router.push('/admin2')
        router.refresh()
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Add user</h1>
            {/*<p className="text-lg text-gray-700 leading-relaxed">Add new user</p>*/}
            <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Login
                    <input
                        type="text"
                        value={form.login}
                        onChange={(e) => {
                            setForm({...form, login: e.target.value})
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                                           disabled:cursor-not-allowed"
                        required/>
                </label>
                <label className="block text-sm font-medium text-gray-700">Password
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => {
                            setForm({...form, password: e.target.value})
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                                           disabled:cursor-not-allowed"
                        required/>
                </label>
                <select
                    onChange={(e) => {
                        setForm({...form, role: e.target.value})
                    }}
                    value={form.role}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                                           disabled:cursor-not-allowed"
                    required>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                </select>
                <button
                    type="submit"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700
                                    hover:bg-gray-50 hover:border-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                >Register
                </button>
            </form>
            <div>
                <span>{message}</span>
            </div>
        </div>
    )
}