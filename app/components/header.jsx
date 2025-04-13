"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils } from "lucide-react";

const linkSet = [
    {href: "/home2/performance", text:"Performance" },
    {href: "/home2/reliability", text:"Reliability" },
    {href: "/home2/scale", text:"Scale"},
];


export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto my-0">
            <div>
                <Button asChild className="bg-blue-700">
                    <div className="flex items-center"> {/* 將圖示和文字水平對齊 */}
                        <Utensils color="yellow" className="mr-2" /> {/* 添加右邊距 */}
                        <Link href="/home2"><span className="text-2xl font-bold">首頁</span></Link>
                    </div>
                </Button>
            </div>
            <div className="flex space-x-4"> {/* 使用 flex 和 space-x-4 將按鈕水平排列並添加間距 */}
                {linkSet.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                            pathname === link.href
                                ? "bg-slate-700 text-white"
                                : "bg-slate-300 text-blue-700"
                        }
                        hover:bg-yellow-300 hover:text-blue-700 rounded-md p-2`}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}