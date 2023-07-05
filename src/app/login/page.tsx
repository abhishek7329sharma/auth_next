"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log("Login successful", response.data)
            router.push("/profile")
        } catch (error:any) {
            console.log("Error: Login Failed!", error.message);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{loading ? "Processing..." : "Login"}</h1>
                <hr className="border-gray-300 mb-8" />
                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(event) => setUser({ ...user, email: event.target.value })}
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    />
                    <input
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(event) => setUser({ ...user, password: event.target.value })}
                        placeholder="Password"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    />
                    <button 
                    disabled={buttonDisabled}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={onLogin}
                    >
                        Login
                    </button>
                    <p className="mt-4 text-gray-600 text-center">
                        Don't have an account?
                        <Link href="/signup" className="text-blue-500 ml-1">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}