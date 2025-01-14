import React from 'react';
import Icon, { IconArgs } from './Icon';


interface SidePanelTabs {
    value: string,
    iconProps: IconArgs
}

export default function SidePanelTabs({value, iconProps}: SidePanelTabs) {

    const {iconSrc, height, width, alt} = iconProps;

    return (
        <div className="flex flex-row gap-4 items-center border p-2 group cursor-pointer">
            <Icon iconSrc={iconSrc} width={width} height={height} alt={alt} iconClass="group-hover:fill-blue-500"/>
            <p>{value}</p>
        </div>
    )
}


