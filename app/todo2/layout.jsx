import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "By U1021142",
};

export default function TodoLayout({ children }) {
    return <div className={inter.className}>{children}</div>;
}