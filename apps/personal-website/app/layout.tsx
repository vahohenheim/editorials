import "./global.css";
import { AnalyticsWrapper, ScrollTopComponent } from "@editorials/ui";
import { cn } from "@editorials/ui/server";
import { RootLayoutProps } from "@editorials/next/server";
import { GeistSans } from "geist/font";
import { BackgroundComponent } from "./components/background/background.component";
import { HeaderComponent } from "./components/header/header.component";

export const metadata = {
	title: "valentin bourreau",
	description: "Valentin Bourreau personal website",
	icons: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>`
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
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
				<BackgroundComponent>
					<ScrollTopComponent />
					<HeaderComponent />
					{children}
					<AnalyticsWrapper />
				</BackgroundComponent>
			</body>
		</html>
	);
}
