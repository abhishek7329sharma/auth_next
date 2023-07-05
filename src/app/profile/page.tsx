"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProfilePage() {
    const router = useRouter()
    const [data , setData] = useState<any>(null)
    const logout = async() => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error:any) {
            console.log("Logout failed", error.message);
            
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async() => {
        const user = await axios.get('/api/users/user')
        console.log(user.data);
        setData(user.data.data)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-end">
                    <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
                </div>
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Profile</h1>
                <hr className="border-gray-300 mb-8" />
                <div className="flex flex-col gap-4">
                    {/* <div className="flex items-center">
                        <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                className="w-16 h-16 rounded-full"
              />
                        <h2 className="ml-4 text-xl font-bold text-gray-800">John Doe</h2>
                    </div> */}
                    {/* <p className="text-gray-600">Age: 30</p> */}
                    <h2 className="text-gray-600">WELCOME {data ? `${data.username}`:"No Email"}</h2>
                    {/* <p className="text-gray-600">Location: New York</p> */}
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4">Edit Profile</button>
                </div>
            </div>
        </div>
    );
}
