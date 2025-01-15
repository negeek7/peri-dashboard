import React from 'react';
import { MockData } from '../page';

interface GroupsTableProps {
    mockData: MockData[];
}

export default function GroupsTable({ mockData }: GroupsTableProps) {

    return (
        <div className="container mx-auto h-full">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg h-full">
                    <thead className="bg-white">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium">Group Name</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Project</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Labels</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Members</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Last Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((row, index) => (
                            <tr
                                key={index}
                                className="bg-white hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="px-4 py-2 text-sm">{row.groupName}</td>
                                <td className="px-4 py-2 text-xs"><span className="border-transparent bg-blue-100 rounded-xl p-1 px-2 text-blue-700 font-bold"># {row.project}</span></td>
                                <td className="px-4 py-2 text-sm">
                                    {row.labels.map((label, i) => (
                                        <span
                                            key={i}
                                            className={`inline-block px-2 py-1 text-xs font-medium rounded ${label === "High Priority"
                                                    ? "bg-red-100 text-red-700"
                                                    : label === "Pilot"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : label === "Priority"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-200"
                                                }`}
                                            style={{ marginRight: "4px" }}
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </td>
                                <td className="px-4 py-2 text-sm">{row.members}</td>
                                <td className="px-4 py-2 text-sm">{row.lastActive}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}