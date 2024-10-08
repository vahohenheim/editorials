import { ReactNode } from "react";
import { SocialNetwork } from "../../_models/social-network";

export type CoverComponentProps = {
    ontitle?: string;
    title: string;
    description?: ReactNode;
    avatar: string;
    alignment?: CoverAlignment;
    action: CoverButton
    socialNetworks?: Array<SocialNetwork>;
}

export type CoverButton = {
    label: string;
    link: string;
    variant?: 'default' | 'outline';
}

export enum CoverAlignment {
    CENTER = 'center',
    LEFT = 'left'
}
