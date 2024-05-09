import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
