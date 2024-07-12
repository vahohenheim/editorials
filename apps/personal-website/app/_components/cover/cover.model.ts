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
    type: CoverSocialNetworkType;
    alt: string;
    link: string;
}

export enum CoverSocialNetworkType {
    GITHUB = 'github',
    DRIBBBLE = 'dribbble',
    BEHANCE = 'behance'
}

export enum CoverAlignment {
    CENTER = 'center',
    LEFT = 'left'
}
