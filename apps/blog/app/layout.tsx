import "./global.css";
import { AnalyticsWrapper, ScrollTopComponent } from "@editorials/ui";
import { HeaderComponent, cn } from "@editorials/ui/server";
import { RootLayoutProps } from "@editorials/next/server";
import { GeistSans } from "geist/font";

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
				<ScrollTopComponent />
				<HeaderComponent />
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
