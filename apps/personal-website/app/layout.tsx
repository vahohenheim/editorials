import "./global.css";
import { AnalyticsWrapper, ScrollTopComponent } from "@editorials/ui";
import { cn } from "@editorials/ui/server";
import { RootLayoutProps } from "@editorials/next/server";
import { GeistSans } from "geist/font";
import { BackgroundComponent } from "./_components/background/background.component";
import { HeaderComponent } from "./_components/header/header.component";

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
