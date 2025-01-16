import { GroupData } from "../page";

interface GroupsTableProps {
    groupData: GroupData[];
}

export default function GroupsTable({ groupData }: GroupsTableProps) {

    console.log(groupData, "groupDatagroupData")

    return (
        <div className="h-full border flex flex-col">

            <div className="px-4 py-2">
                <div className="flex flex-row justify-between text-gray-600">
                    <div className="flex flex-row gap-2 border-transparent">
                        <input placeholder="Search" className="rounded px-3 border bg-gray-100 text-sm shadow-sm" />
                        <div className="rounded px-3 py-1 border text-sm shadow-sm">Filter</div>
                    </div>

                    <div className="flex flex-row gap-4 border-transparent">
                        <button className="text-white bg-green-700 rounded px-4 text-sm shadow-sm">Bulk Message</button>
                        <button className="text-gray-600 rounded px-2 py-1 shadow-sm text-sm">Group Actions</button>
                    </div>


                </div>
            </div>

            <div className="flex-1 border table-container relative overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  [&::-webkit-scrollbar-thumb]:rounded-full">
                <table className="w-full relative">
                    {/* Table Header */}
                    <thead className="bg-white border-b sticky top-0 z-10">
                        <tr className="text-left text-gray-500 text-sm">
                            <th className="top-0 p-4 bg-gray-50">
                                <input type="checkbox" className="rounded" />
                            </th>
                            <th className="top-0 p-4 bg-gray-50 font-semibold">Group Name</th>
                            <th className="top-0 p-4 bg-gray-50 font-semibold">Project</th>
                            <th className="top-0 p-4 bg-gray-50 font-semibold">Labels</th>
                            <th className="top-0 p-4 bg-gray-50 font-semibold">Members</th>
                            <th className="top-0 p-4 bg-gray-50 font-semibold">Last Active</th>
                        </tr>
                    </thead>


                    <tbody className="bg-white">
                        {groupData.length && groupData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-100 text-gray-600 text-sm font-medium cursor-pointer">
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded" />
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-2">
                                        {/* <div className="w-8 h-8 bg-gray-200 rounded-full"></div> */}
                                        <span>{row.group_name}</span>
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {row.project_type}
                                    </span>
                                </td>
                                <td className="px-4 py-3 flex flex-row gap-2">
                                    {
                                        row.labels !== null && row.labels.map(label => (
                                            <div className="flex space-x-1">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                                    {label}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </td>
                                <td className="px-4 py-3">{row.members}</td>
                                <td className="px-4 py-3 text-gray-500">{row.last_active}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="py-1 px-4 border-t mt-auto bg-white">
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
}