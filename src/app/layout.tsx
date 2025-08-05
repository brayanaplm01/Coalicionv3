import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coalición",
  description: "Somos una Coalición Nacional formada por organizaciones de la sociedad civil, medios de comunicación, instituciones académicas y organismos internacionales, unidos en la lucha contra la desinformación electoral en Bolivia.",
  icons: {
    icon: [
      { url: '/logo-3.webp', sizes: '18x16', type: 'image/webp' },
      { url: '/logo-3.webp', sizes: '36x32', type: 'image/webp' },
      { url: '/logo-3.webp', sizes: '50x48', type: 'image/webp' },
    ],
    shortcut: '/logo-3.webp',
    apple: [
      { url: '/logo-3.webp', sizes: '200x180', type: 'image/webp' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
