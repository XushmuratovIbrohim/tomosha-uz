import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header/header";
import Container from "@/components/container/container";

import "../styles/globals.scss";
// import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Tomosha TV",
  description: "Tomosha TV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Analytics />
        <div>
          <Header />
          <Container>
            <main>{children}</main>
          </Container>
        </div>
      </body>
    </html>
  );
}
