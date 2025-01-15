import React from 'react';
import SidePanelTabs from './SidePanelTabs';
import Icon from './Icon';


const tabsOptions = [
    {
        value: 'Dashboard',
        iconSrc: 'home.svg',
        iconAlt: "Dashboard Icon"
    },
    {
        value: 'Chats',
        iconSrc: 'chats.svg',
        iconAlt: "Icon"
    },
    {
        value: 'Gropus',
        iconSrc: 'users.svg',
        iconAlt: "Icon"
    },
    {
        value: 'Contacts',
        iconSrc: 'contacts.svg',
        iconAlt: "Icon"
    },
    {
        value: 'Logs',
        iconSrc: 'bell.svg',
        iconAlt: "Icon"
    },
    {
        value: 'Files',
        iconSrc: 'file.svg',
        iconAlt: "Icon"
    },
    {
        value: 'Settings',
        iconSrc: 'settings.svg',
        iconAlt: "Icon"
    }
]

export default function SidePanel() {

    return (
        <div className="w-1/5 border flex flex-col gap-4 py-2 px-4 pb-6">
            <div className="flex gap-2 items-center">
                <div className="border-transparent bg-green-700 rounded-xl w-7 h-7"></div>
                <div className="flex flex-col justify-center text-sm">
                    <p className="font-semibold">Periskope</p>
                    <p className="text-gray-400 text-xs">negeek@hashlabs.dev</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-medium font-sans">
                {
                    tabsOptions.map((tab, index) => (
                        <div className="flex flex-row gap-4 items-center border-transparent p-2 group cursor-pointer hover:bg-gray-200 rounded-lg">
                            <Icon iconSrc={tab.iconSrc} width={14} height={14} alt={tab.iconAlt || "Icon"} iconClass="group-hover:fill-blue-500" />
                            <p className="group-hover:text-green-600">{tab.value}</p>
                        </div>
                    ))
                }
            </div>
            <p className="mt-auto font-semibold">Help & Support</p>
        </div>
    )
}