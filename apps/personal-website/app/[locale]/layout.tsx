import "../global.css";
import { RootLayoutProps } from "@editorials/next/server";
import HeaderComponent from "../_components/header/header";
import FooterComponent from "../_components/footer/footer";
import { MAIL_LINK, SOCIAL_NETWORKS } from "../_constants/social-network";
import { AnalyticsWrapper } from "@editorials/ui/server";
import { GeistSans } from "geist/font";
import ThemeProvider from "../_components/theme-provider/theme-provider";
import classNames from "classnames";

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'fr' }]
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
    <head>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
    </head>
    <body
      className={classNames(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
        GeistSans.className,
        GeistSans.variable
      )}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeaderComponent lang={params.locale} />
      {children}
      <FooterComponent socialNetworks={[ MAIL_LINK, ...SOCIAL_NETWORKS ]} />
      <AnalyticsWrapper />
    </ThemeProvider>
    </body>
    </html>

  )
    ;
}
