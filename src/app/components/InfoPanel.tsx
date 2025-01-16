import React from 'react';

export default function InfoPanel({ group }: any) {


    return (
        <div className=" bg-white py-4 border-r h-full">
            <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    </div>
                    <h2 className="text-md font-medium w-44 truncate overflow-hidden">{group.group_name}</h2>
                </div>
                <button className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">
                        Refresh
                </button>
            </div>

            <div className="flex space-x-6 border-b mb-4">
                <div className="px-4 flex flex-row gap-6">
                    <button className="pb-2 text-green-700 border-b-2 border-green-700 font-medium">
                        Overview
                    </button>
                    <button className="pb-2 text-gray-500 hover:text-gray-700">
                        Members
                    </button>
                    <button className="pb-2 text-gray-500 hover:text-gray-700">
                        Logs
                    </button>
                </div>
            </div>

            <div className="space-y-4 border-b px-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Last Active</span>
                    <span className="text-gray-900">03:17</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Disappearing Messages</span>
                    <button className="flex items-center text-gray-900">
                        OFF
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Send Message Permission</span>
                    <button className="flex items-center text-gray-900">
                        All
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Project</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        # Demo
                    </span>
                </div>

                <div className="space-y-2 flex flex-row justify-between items-center">
                    <span className="text-gray-500 block">Labels</span>
                    <div>
                        <span>High Priority</span>
                        <span>Priority</span>
                        <span>Warm</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 space-y-3 px-4">
                <button className="w-full text-left text-gray-600 hover:text-gray-800">
                    Export Chat
                </button>
                <button className="w-full text-left text-red-500 hover:text-red-600">
                    Exit Group
                </button>
            </div>

            <div className="mx-4 mt-6 p-4 border rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="font-medium">PER-011 | Evoke ⟷ Skope</span>
                    </div>
                    <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">H</span>
                </div>
                <p className="text-red-500 font-medium mb-2">
                    Issues with mentions on groups
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">Dec 22</span>
                    <span className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
                        client
                    </span>
                    <span className="ml-auto">3 days</span>
                </div>
            </div>
        </div>
    );
};
