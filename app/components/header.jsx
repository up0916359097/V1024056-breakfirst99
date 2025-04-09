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
        <div className="flex flex-wrap
        justify-between items-center mx-auto
        my-0">
            <div>
                <Button asChild
                    className="bg-blue-700">
                        <div>
                        <Utensils color="yellow" />
                    <Link href="/home2"><span className="text-2xl font-bold">首頁</span>
                    </Link>
                    </div>
                </Button>

        </div>
        <div>
            {linkSet.map((link) => (
                <div>
                    
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
                    </div>

                ))}
        </div>
    </div>
                    );
                    }