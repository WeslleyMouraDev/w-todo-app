import Modal from "@/components/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "W.Task",
  description: "Generated by Weslley Moura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
