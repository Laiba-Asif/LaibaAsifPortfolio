import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Anton } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({
  subsets: ['latin'], // Add other subsets if needed
  weight: ['400'],      // Anton typically supports only this weight
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Laiba Asif",
  description: "Software Developer | MERN STACK DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${anton.variable}`}> <ThemeProvider
        attribute="class"
        defaultTheme="dark" // system
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
