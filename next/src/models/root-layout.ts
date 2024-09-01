import { ReactNode } from "react"

export type RootLayoutProps = {
    children: ReactNode;
    params: { locale?: 'en' | 'fr' };
}
