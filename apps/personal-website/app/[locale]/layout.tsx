import { RootLayoutProps } from "@editorials/next/server";
import { HeaderComponent } from "../_components/header/header.component";
import FooterComponent from "../_components/footer/footer";
import { SOCIAL_NETWORKS } from "../_constants/social-network.constants";

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'fr' }]
}

export default function LocaleLayout({ children, params }: RootLayoutProps) {
  return (
    <>
      <HeaderComponent lang={params.locale} />
      {children}
      <FooterComponent copyright="Copyright © 2024 valentinbourreau, all right reserved." socialNetworks={SOCIAL_NETWORKS} />
    </>
  );
}
