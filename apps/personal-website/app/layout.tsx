import "./global.css";
import { AnalyticsWrapper } from "@editorials/ui";
import { cn } from "@editorials/ui/server";
import { RootLayoutProps } from "@editorials/next/server";
import { GeistSans } from "geist/font";
import ThemeProvider from "./_components/theme-provider/theme-provider.component";

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'fr' }]
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  console.log('RootLayout', params);
  return (
    <html lang={params.locale} suppressHydrationWarning>
    <head>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
    </head>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
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
      {children}
      <AnalyticsWrapper />
    </ThemeProvider>
    </body>
    </html>
  );
}
