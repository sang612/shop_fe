import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";
import localFont from "next/font/local";

config.autoAddCss = false;
// const myFont = localFont({ src: "./public/fonts/SFUFuturaBook.TTF" });

export const metadata = {
  title: "The Time",
  description: "Admin",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
