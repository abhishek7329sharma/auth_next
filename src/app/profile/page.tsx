export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Profile</h1>
                <hr className="border-gray-300 mb-8" />
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        {/* <img
          src="profile-picture.jpg"
          alt="Profile Picture"
          className="w-16 h-16 rounded-full"
        /> */}
                        <h2 className="ml-4 text-xl font-bold text-gray-800">John Doe</h2>
                    </div>
                    <p className="text-gray-600">
                        Age: 30
                    </p>
                    <p className="text-gray-600">
                        Email: john.doe@example.com
                    </p>
                    <p className="text-gray-600">
                        Location: New York
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}