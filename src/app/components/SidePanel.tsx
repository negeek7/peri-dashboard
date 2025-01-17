import React from 'react';
import Icon from './Icon';
import { HomeIcon, ChatBubbleBottomCenterIcon, UserIcon, UserGroupIcon, DocumentTextIcon, BellAlertIcon, DocumentIcon, Cog6ToothIcon } from '@heroicons/react/16/solid';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';


const tabsOptions = [
    {
        value: 'Dashboard',
        iconSrc: 'home.svg',
        icon: HomeIcon,
        iconAlt: "Dashboard Icon",
    },
    {
        value: 'Chats',
        iconSrc: 'chats.svg',
        icon: ChatBubbleBottomCenterIcon,
        iconAlt: "Icon"
    },
    {
        value: 'Groups',
        iconSrc: 'users.svg',
        icon: UserGroupIcon,
        iconAlt: "Icon"
    },
    {
        value: 'Contacts',
        iconSrc: 'contacts.svg',
        icon: DocumentTextIcon,
        iconAlt: "Icon"
    },
    {
        value: 'Logs',
        iconSrc: 'bell.svg',
        icon: BellAlertIcon,
        iconAlt: "Icon"
    },
    {
        value: 'Files',
        iconSrc: 'file.svg',
        icon: DocumentIcon,
        iconAlt: "Icon"
    },
    {
        value: 'Settings',
        iconSrc: 'settings.svg',
        icon: Cog6ToothIcon,
        iconAlt: "Icon"
    }
]


export default function SidePanel() {

    return (
        <div className="flex flex-col gap-4 py-2 px-4 pb-6 h-full border-r border-gray-200">
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
                        <div key={index} className="flex flex-row gap-4 items-center border-transparent p-2 group cursor-pointer hover:bg-gray-200 rounded-lg text-gray-600">
                            {
                                tab.icon && <tab.icon style={{ width: 18, height: 18 }} className="group-hover:text-green-600" />
                            }
                            <p className="group-hover:text-green-600">{tab.value}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mt-auto font-semibold flex gap-2 items-center">
                <ChatBubbleOvalLeftEllipsisIcon style={{width: 18, height: 18, color: "green"}}/>
                <span className="text-gray-600 text-sm">Help & Support</span>
            </div>
        </div>
    )
}