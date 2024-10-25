import { useState } from 'react';
import { Upload, Users, Video, Activity } from 'lucide-react';

export function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            <button
              onClick={() => setSelectedTab('dashboard')}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                selectedTab === 'dashboard' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <Activity className="h-5 w-5 mr-3" />
              Dashboard
            </button>
            <button
              onClick={() => setSelectedTab('videos')}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                selectedTab === 'videos' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <Video className="h-5 w-5 mr-3" />
              Videos
            </button>
            <button
              onClick={() => setSelectedTab('users')}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                selectedTab === 'users' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              Users
            </button>
            <button
              onClick={() => setSelectedTab('upload')}
              className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                selectedTab === 'upload' ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <Upload className="h-5 w-5 mr-3" />
              Upload
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {selectedTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
                <p className="text-3xl font-bold mt-2">2.4M</p>
                <div className="text-green-500 text-sm mt-2">↑ 12% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
                <p className="text-3xl font-bold mt-2">12.5K</p>
                <div className="text-green-500 text-sm mt-2">↑ 8% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Total Videos</h3>
                <p className="text-3xl font-bold mt-2">1.2K</p>
                <div className="text-green-500 text-sm mt-2">↑ 15% from last month</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Storage Used</h3>
                <p className="text-3xl font-bold mt-2">850GB</p>
                <div className="text-yellow-500 text-sm mt-2">85% of total storage</div>
              </div>
            </div>
          )}

          {selectedTab === 'videos' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Manage Videos</h2>
              {/* Video management interface would go here */}
            </div>
          )}

          {selectedTab === 'users' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              {/* User management interface would go here */}
            </div>
          )}

          {selectedTab === 'upload' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Upload New Content</h2>
              {/* Upload interface would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}