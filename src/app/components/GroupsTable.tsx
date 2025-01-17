import { ArrowLongLeftIcon, ChevronUpDownIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { GroupData } from "../page";

interface GroupsTableProps {
    groupData: GroupData[];
}

export const clientLabel = "text-orange-500 bg-orange-100";
export const demoLabel = "text-blue-600 bg-blue-50";


export default function GroupsTable({ groupData }: GroupsTableProps) {

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
                        <button className="text-gray-600 rounded px-2 py-1 shadow-sm text-sm border bg-white flex flex-row items-center gap-1">
                            <span>Group Actions</span>
                            <ChevronUpDownIcon style={{ width: 14, height: 14 }} />
                        </button>
                    </div>


                </div>
            </div>

            <div className="flex-1 table-container relative overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  [&::-webkit-scrollbar-thumb]:rounded-full">
                <table className="w-full relative bg-white">
                    {/* Table Header */}
                    <thead className="bg-none border-b sticky top-0 z-10">
                        <tr className="text-left text-gray-500 text-sm bg-none">
                            <th className="top-0 p-2 bg-gray-50">
                                <input type="checkbox" className="rounded text-green-600 bg-gray-100 focus:ring-green-500 dark:focus:ring-green-600" />
                            </th>
                            <th className="top-0 p-2 bg-gray-50 font-semibold">Group Name</th>
                            <th className="top-0 p-2 bg-gray-50 font-semibold">Project</th>
                            <th className="top-0 p-2 bg-gray-50 font-semibold">Labels</th>
                            <th className="top-0 p-2 bg-gray-50 font-semibold">Members</th>
                            <th className="top-0 p-2 bg-gray-50 font-semibold">Last Active</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {groupData.length && groupData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-100 text-gray-600 text-sm font-medium cursor-pointer">
                                <td className="px-2 py-3">
                                    <input type="checkbox" className="rounded" />
                                </td>
                                <td className="px-2 py-3">
                                    <div className="flex items-center space-x-2">
                                        {/* <div className="w-8 h-8 bg-gray-200 rounded-full"></div> */}
                                        <span>{row.group_name}</span>
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="px-2 py-3">
                                    <span className={`${row.project_type.toLowerCase() == "clients" ? clientLabel : demoLabel} rounded-lg py-1 px-2 text-xs font-medium`}>
                                        # {row.project_type}
                                    </span>
                                </td>
                                <td className="px-2 py-3 flex flex-row gap-2">
                                    {
                                        row.labels && row.labels.slice(0, 2).map((label, index) => (
                                            <div key={index} className="flex space-x-1">
                                                <span className="border rounded-xl py-1 px-2 w-14 truncate text-xs text-gray-500 capitalize">
                                                    {label}
                                                </span>
                                            </div>
                                        ))
                                    }
                                    {
                                        row.labels && row.labels.length > 2 && (
                                            <span className="border rounded-xl py-1 px-2 text-center truncate text-xs text-gray-500">
                                                +{row.labels.length - 2}
                                            </span>
                                        )
                                    }
                                </td>
                                <td className="px-2 py-3 text-left">{row.members}</td>
                                <td className="px-2 py-3 text-gray-500">{row.last_active}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="py-1 px-4 border-t mt-auto bg-white">
                <div className="flex flex-row gap-2 items-center text-sm">
                    <div className="flex gap-2 space-x-2 items-center text-sm">
                        <button className="p-1 px-2 border rounded hover:bg-gray-50">
                            <ArrowLongLeftIcon style={{ width: 14, height: 14 }} />
                        </button>
                        <span className="text-sm text-gray-500">1 of 6</span>
                        <button className="py-1 px-2 border rounded hover:bg-gray-50">
                            <ArrowLongRightIcon style={{ width: 14, height: 14 }} />
                        </button>
                    </div>
                    <span className="text-sm text-gray-500">256 rows</span>
                </div>
            </div>
        </div>
    );
}