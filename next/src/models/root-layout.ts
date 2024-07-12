import { ReactNode } from "react"

export type RootLayoutProps = {
    children: ReactNode;
    params: { lang?: 'en' | 'fr' };
}
