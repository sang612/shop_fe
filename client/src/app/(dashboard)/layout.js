import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../../components/partials/Header";
import { Footer } from "../../components/partials/Footer";
import { Carousel } from "../../components/Carousel";

config.autoAddCss = false;

export const metadata = {
  title: "The Time",
  description: "Admin",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className="">
        <Header />
        <Carousel />
        {children}
        <Footer />
      </body>
    </html>
    // </ClerkProvider>
  );
}
