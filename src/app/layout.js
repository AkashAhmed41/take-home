import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Take Home - Threat Detection Dashboard",
  description:
    "Real-time monitoring and identification of potential security threats.",
  openGraph: {
    title: "Take Home - Threat Detection Dashboard",
    description:
      "Real-time monitoring and identification of potential security threats.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
