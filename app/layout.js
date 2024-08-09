import { Inter, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/common/Sidebar";

const openSans = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} w-screen h-screen flex justify-between p-6 space-x-6`}
      >
        <Sidebar />
        <div className="bg-gray-100 w-4/5">{children}</div>
      </body>
    </html>
  );
}
