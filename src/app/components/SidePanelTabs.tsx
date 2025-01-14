import React from 'react';
import Icon, { IconArgs } from './Icon';


interface SidePanelTabs {
    value: string,
    iconProps: IconArgs
}

export default function SidePanelTabs({value, iconProps}: SidePanelTabs) {

    const {iconSrc, height, width, alt} = iconProps;

    return (
        <div className="flex flex-row gap-4 items-center border-transparent p-2 group cursor-pointer hover:bg-gray-200 rounded-lg">
            <Icon iconSrc={iconSrc} width={width} height={height} alt={alt} iconClass="group-hover:fill-blue-500"/>
            <p className="group-hover:text-green-600">{value}</p>
        </div>
    )
}


