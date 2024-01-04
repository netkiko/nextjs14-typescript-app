import NavBar from "@/components/nav-bar/nav-bar";

import "@/styles/globals.css";

export const metadata = {
    title: "TypeScript and Next.js Simple Web App",
    description:
        "Learn TypeScript and Next.js 14 by implementing a simple post, comment, album, photo, todo and user web application.",
};

interface IRootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = (context: IRootLayoutProps) => {
    const { children } = context;

    return (
        <html lang="en">
            <body>
                <main className="app">
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
