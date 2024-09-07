import { Inter } from "next/font/google";
import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ClerkProvider } from "@clerk/nextjs";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Time",
  description: "Admin Auth",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // </ClerkProvider>
  );
}
