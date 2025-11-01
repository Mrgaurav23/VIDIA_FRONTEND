import React from 'react'

function SettingView() {
  return (
    <div>
      <div className="text-gray-300 p-4">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <p>Update your personal information and preferences.</p>
        <div className="mt-4 max-w-md space-y-4">
            <div>
                <label className="text-sm font-medium text-gray-400">Username</label>
                <input type="text" defaultValue="@techinnovator" className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none" />
            </div>
            <div>
                <label className="text-sm font-medium text-gray-400">Email</label>
                <input type="email" defaultValue="user@example.com" className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default SettingView