import Image from 'next/image';
import React from 'react';

export interface IconArgs {
    iconSrc: string,
    width: number,
    height: number,
    alt?: string,
    iconClass?: string,
}

export default function Icon({ iconSrc, width = 14, height = 14, alt = "Icon",}: IconArgs) {

    if (!iconSrc) {
        throw new Error("iconSrc is required for Icon components");
    }

    return (
        <Image
            priority
            alt={alt}
            src={iconSrc}
            width={width}
            height={height}
            className="hover:text-red-500"
        />
    )

}