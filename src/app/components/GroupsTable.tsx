import React from 'react';
import { GroupData } from '../page';

interface GroupsTableProps {
    groupData: GroupData[];
}

export default function GroupsTable({ groupData }: GroupsTableProps) {

    console.log(groupData, "groupDatagroupData")

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 bg-white border-b">
                <div className="flex items-center space-x-2 flex-1">
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button className="flex items-center space-x-1 px-3 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
                        <span>Filter</span>
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Bulk message
                    </button>
                    <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
                        Group Actions
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        {/* Table Header */}
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-500">
                                <th className="sticky top-0 p-4 bg-gray-50">
                                    <input type="checkbox" className="rounded" />
                                </th>
                                <th className="sticky top-0 p-4 bg-gray-50 font-medium">Group Name</th>
                                <th className="sticky top-0 p-4 bg-gray-50 font-medium">Project</th>
                                <th className="sticky top-0 p-4 bg-gray-50 font-medium">Labels</th>
                                <th className="sticky top-0 p-4 bg-gray-50 font-medium">Members</th>
                                <th className="sticky top-0 p-4 bg-gray-50 font-medium">Last Active</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="bg-white divide-y">
                            {groupData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded" />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                            <span>{row.group_name}</span>
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                            {row.project_type}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        {/* <div className="flex space-x-1">
                        {
                            row.labels.length && row.labels.map(label => (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                Pilot
                            {row.project_type}
                            </span>
                                
                            ))
                        }
                        </div> */}
                                    </td>
                                    <td className="p-4">{row.members}</td>
                                    <td className="p-4 text-gray-500">{row.last_active}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t bg-white">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">1 of 6</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">&larr;</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">&rarr;</button>
                    </div>
                    <span className="text-sm text-gray-500">256 rows</span>
                </div>
            </div>
        </div>
    );
};