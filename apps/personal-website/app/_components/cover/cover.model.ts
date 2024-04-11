import { ReactNode } from "react";

export type CoverComponentProps = {
    title: ReactNode;
    description?: ReactNode;
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