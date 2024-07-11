import { ReactNode } from "react";

export type CoverComponentProps = {
    title: string;
    description?: ReactNode;
    avatar: string;
    alignment?: CoverAlignment;
    buttons?: Array<CoverButton>;
    socialNetworks?: Array<CoverSocialNetwork>;
}

export type CoverButton = {
    label: string;
    link: string;
}

export type CoverSocialNetwork = {
    src: string;
    alt: string;
    link: string;
}

export enum CoverAlignment {
    CENTER = 'center',
    LEFT = 'left'
}
