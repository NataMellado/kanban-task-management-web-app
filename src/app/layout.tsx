import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../css/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Kanban Task Manager Web App",
  description: "Kanban Task Manager web app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
