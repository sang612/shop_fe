import "../admin.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import DefaultLayout from "../../components/Admin/Layouts/DefaultLayout";

config.autoAddCss = false;

export const metadata = {
  title: "The Time vintage Watch",
  description: "Admin",
};

export default function AdminLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <DefaultLayout>{children}</DefaultLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
