"use client"

import {useRouter} from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter()

    async function handleLogout() {
        try {
            const res = await fetch('/api/admin2/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            // await fetch('/api/admin2/logout', {method: 'POST'})
            console.log(res, "res")
            if (!res.ok) throw new Error('Network response was not ok')

            router.push('/api/admin2/login')
            router.refresh()

            // router.replace('/api/admin2/login')
        } catch (error) {
            console.error('Logout error', error)
        }
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-red-600 bg-red-50 border
        border-red-200 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all shadow-sm disabled:opacity-50"
        >Log out
        </button>
    )
}