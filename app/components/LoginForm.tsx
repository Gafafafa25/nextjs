"use client"

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

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
        if (!data.ok) {
            setErrorMessage("Login error")
            return
        }
        router.refresh()
    }

    return (
        <div>
            <p>
                text login form
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Login<input type="text" required value={login}
                                onChange={(e) => {
                                    setLogin(e.target.value)
                                }}/>
                </label>
                <label>
                    Password<input type="password" required value={password}
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                   }}/>
                </label>
                <button type="submit">Login</button>
            </form>
            {errorMessage && (<p>Message: {errorMessage}</p>)}
        </div>
    )
}