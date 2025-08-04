import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Javier Muñoz Solano - System Administrator & Web Developer",
  description: "System admin and web developer from Murcia, Spain. I work with Linux, Docker, AWS, JavaScript, Python, and more. Currently at C3i Servicios Informáticos.",
  keywords: ["system administrator", "web developer", "devops", "linux", "docker", "javascript", "python", "murcia", "spain"],
  authors: [{ name: "Javier Muñoz Solano" }],
  creator: "Javier Muñoz Solano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jbibu.xyz",
    title: "Javier Muñoz Solano - System Administrator & Web Developer",
    description: "System admin and web developer from Murcia, Spain. I work with Linux, Docker, AWS, JavaScript, Python, and more.",
    siteName: "Javier Muñoz Solano Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Javier Muñoz Solano",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Javier Muñoz Solano - System Administrator & Web Developer",
    description: "System admin and web developer from Murcia, Spain.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://jbibu.xyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
