import { ReactNode } from "react";
import { SocialNetwork } from "../../_models/social-network";

export type CoverComponentProps = {
    ontitle?: string;
    title: string;
    description?: ReactNode;
    avatar: string;
    alignment?: CoverAlignment;
    buttons?: Array<CoverButton>;
    socialNetworks?: Array<SocialNetwork>;
}

export type CoverButton = {
    label: string;
    link: string;
}

export enum CoverAlignment {
    CENTER = 'center',
    LEFT = 'left'
}
