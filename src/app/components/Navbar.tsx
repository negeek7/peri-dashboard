import { UserGroupIcon } from '@heroicons/react/20/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import React from 'react';


export default function NavBar(){

    return (
        <div className="border flex flex-row justify-between py-1 px-4 items-center h-12 border-b border-gray-200">
            <div className="text-sm border-none flex flex-row gap-1 items-center text-gray-600">
                <UserGroupIcon style={{height: 14, width: 14, color: "gray"}} />
                <span>groups</span>
            </div>
                <div className="flex flex-row gap-2 items-center text-xs text-gray-600">
                    <div className="shadow-md py-1 px-2 border rounded cursor-pointer flex flex-row gap-1 items-center ">
                        <QuestionMarkCircleIcon style={{height: 18, width: 18}}/>
                        <span>Docs</span>
                    </div>
                    <p className="shadow-md py-1 px-2 border rounded cursor-pointer">+91 9004389372</p>
                    <p className="shadow-md py-1 px-2 border rounded cursor-pointer"><BellAlertIcon style={{height: 16, width: 16}}/></p>
            </div>
        </div>
    )

}