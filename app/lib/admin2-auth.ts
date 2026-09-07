import 'server-only'
import {createHash, randomBytes} from "node:crypto";
import {pool} from "@/app/lib/db";
import {cookies} from "next/headers";


const COOKIE_NAME = 'admin2_session'
const SESSION_SECONDS = 60 * 60 * 1000

type CurrentAdmin = {
    id: number,
    login: string,
    role: 'admin'
}

function hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex')
}

export async function authenticateAdmin(login: string, password: string): Promise<CurrentAdmin | null> {
    const result = await pool.query<CurrentAdmin>(
        'SELECT id, login, role ' +
        'FROM staff_users ' +
        'WHERE login=$1 AND password=crypt($2, password) ' +
        "AND is_active=true AND role='admin'", [login, password]
    )
    return result.rows[0] ?? null
}

export async function createAdminSession(userId: number): Promise<void> {
    const token = randomBytes(32).toString("hex");
    const tokenHash = hashToken(token);
    const expiresAt = new Date(Date.now() + SESSION_SECONDS * 1000);
    //todo: before insert - delete all expired sessions
    await pool.query('INSERT INTO staff_sessions(token_hash, user_id, expires_at) ' +
        'VALUES ($1, $2, $3) )', [tokenHash, userId, expiresAt]);
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: SESSION_SECONDS,
        expires: expiresAt
    })
}

export async function getCurrentAdmin(): Promise<CurrentAdmin | null> {
    return null //todo:
}
