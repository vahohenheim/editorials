import './global.css';
import { Button, cn } from "@editorials/ui/server";
import Link from "next/link";
import React from "react";
import { SearchX } from "lucide-react";
import { GeistSans } from "geist/font";

const NotFound = () => {
  return (
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        GeistSans.className,
        GeistSans.variable
      )}
    >
    <main className="container">
      <div
        className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <SearchX size={48} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Oops, page not found!</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="mt-6">
            <Link href={'/'} scroll={true}>
              <Button variant="default">
                go to homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
    </body>

  );
};

export default NotFound;

export const metadata = {
  title: '404 - Page not found',
  description: 'Page not found'
}
