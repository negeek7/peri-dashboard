import React from 'react';


export default function NavBar(){



    return (
        <div  className="border flex flex-row justify-between py-2 px-4 items-center">
                <p className="text-sm font-bold text-gray-500">groups</p>
                <div className="flex flex-row gap-4 items-center text-sm font-semibold text-slate-600">
                    <p className="shadow-lg py-1 px-2 border rounded cursor-pointer">Docs</p>
                    <p className="shadow-lg py-1 px-2 border rounded cursor-pointer">+91 9004389372</p>
                    <p className="shadow-lg py-1 px-2 border rounded cursor-pointer">U</p>
            </div>
        </div>
    )

}