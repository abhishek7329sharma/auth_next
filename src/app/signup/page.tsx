"use client";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    const onSignUp = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("Sign Up Success", response.data);
            router.push('/login')
        } catch (error: any) {
            console.log("Error: SignUp Failed!", error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    {loading ? "Processing..." : "Sign Up"}
                </h1>
                <hr className="border-gray-300 mb-8" />
                <div className="flex flex-col gap-4">
                    <label htmlFor="username" className="font-semibold">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={(event) => setUser({ ...user, username: event.target.value })}
                        placeholder="Username"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    />
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(event) => setUser({ ...user, password: event.target.value })}
                        placeholder="Password"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    />
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(event) => setUser({ ...user, email: event.target.value })}
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    />
                    <button
                        disabled={buttonDisabled}
                        onClick={onSignUp}
                        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        Sign Up
                    </button>
                    <p className="text-gray-600 text-center">
                        Already have an account?
                        <Link href="/login" className="text-blue-500 ml-1">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

}