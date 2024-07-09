import { Inter } from "next/font/google";
import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  ClerkProvider,
  SignInButton, 
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Time",
  description: "Admin",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>   
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
