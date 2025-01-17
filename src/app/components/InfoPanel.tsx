import { ChartBarIcon } from '@heroicons/react/16/solid';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon, ArrowUpOnSquareIcon, CalendarDateRangeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { GroupData } from '../page';
import { clientLabel, demoLabel } from './GroupsTable';

interface GroupInfo {
    group: GroupData;
}

export default function InfoPanel({ group }: GroupInfo) {


    return (
        <div className=" bg-white py-4 border-r h-full">
            <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    </div>
                    <h2 className="text-md font-semibold w-44 text-gray-600 truncate overflow-hidden">{group.group_name}</h2>
                </div>
                <button className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer flex gap-2   items-center">
                    <ArrowPathIcon style={{width: 14, height: 14}}/>
                    <span>Refresh</span>
                </button>
            </div>

            <div className="flex space-x-6 border-b mb-4">
                <div className="px-4 flex flex-row gap-6 text-sm">
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
                <div className="w-5/6 flex flex-col gap-4 text-sm mb-8">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Last Active</span>
                        <span className="text-gray-700">{group.last_active}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Disappearing Messages</span>
                        <button className="flex items-center text-gray-700">
                            OFF
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Send Message Permission</span>
                        <button className="flex items-center text-gray-700">
                            All
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Project</span>
                            <span className={`${group.project_type.toLowerCase() == "clients" ? clientLabel : demoLabel} rounded-lg py-1 px-2 text-xs font-medium`}>
                                # {group.project_type}
                            </span>
                    </div>

                    <div className="space-y-2 flex flex-row justify-between items-start">
                        <span className="text-gray-500 block">Labels</span>
                        <div className="flex flex-col justify-start ite gap-1 text-xs items-baseline">
                            {
                                group.labels && group.labels.slice(0, 2).map((group, index) => (
                                    <div key={index} className="flex space-x-1">
                                        <span className="border rounded-xl py-1 px-2 w-14 truncate text-xs text-gray-500 capitalize">
                                            {group}
                                        </span>
                                    </div>
                                ))
                            }
                            {
                                group.labels && group.labels.length > 2 && (
                                    <span className="border rounded-xl py-1 px-2 text-center truncate text-xs text-gray-500">
                                        +{group.labels.length - 2}
                                    </span>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-8 space-y-3 px-4">
                <button className="w-full flex flex-row gap-1 items-center text-sm text-left text-gray-600 hover:text-gray-800">
                    <ArrowUpOnSquareIcon style={{ width: 16, height: 16 }} />
                    <span>Export Chat</span>
                </button>
                <button className="w-full flex flex-row gap-1 items-center text-sm text-left text-red-500 hover:text-red-600">
                    <ArrowLeftStartOnRectangleIcon style={{ width: 16, height: 16 }} />
                    <span>Exit Group</span>
                </button>
            </div>

            <div className="mx-4 mt-6 p-4 border rounded-lg shadow-xl">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-xs">
                        <span className="font-medium tracking-wide">PER-011 | Evoke ⟷ Skope</span>
                    </div>
                    <span className="bg-blue-700 text-xs text-white px-2 py-1 rounded-full">H</span>
                </div>
                <div className="flex flex-row gap-1 items-center font-medium mb-2 text-black text-sm">
                    <ExclamationCircleIcon style={{ height: 16, width: 16, color: "red" }} />
                    <span>Issues with mentions on groups</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="p-1 border rounded-md"><ChartBarIcon style={{ height: 12, width: 12 }} /></span>
                        <div className="p-1 border flex flex-row gap-1 items-center rounded-md text-xs px-2 text-gray-500">
                            <CalendarDateRangeIcon style={{ width: 14, height: 14, color: "orange" }} />
                            <span>Dec 22</span>
                        </div>
                        <div className="p-1 border flex flex-row gap-1 items-center rounded-md text-xs px-2 text-gray-500">
                            <span className="w-2 h-2 bg-black rounded-full mr-1"></span>
                            <span>client</span>
                        </div>
                    </div>
                    <span className="ml-auto text-gray-400 text-xs">3 days</span>
                </div>
            </div>
        </div>
    );
};
