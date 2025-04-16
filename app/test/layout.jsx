"use client"
import  Link  from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";

const linkSet = [
    {href: "/test/test1",text:"Test-Test-1"},
    {href: "/test/test2",text:"Test-Test-2"},

]
export default function TestLayout({ children }){
    const [count, setCount] = useState(0);
    const pathname =usePathname();
    return (
        
        
        <div className="border-2 border-dashed border-blue-800 p-4">
            <div className="flex gap-4 font-bold text-lg mb-4
             text-purple-600 ">
                {linkSet.map((link) => (
                    <Link 
                    key={link.href}
                    href={link.href}
                    className="text-white bg-slate-800 hover:bg-black"
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        
        <div className="flex">
            Test Layout <span className="px-4 font-bold">{count}</span>pathname:<span>{pathname}</span></div>
        <Button onClick= {() => setCount(count + 1)}
            className="bg-blue-500 text-white">
            +1
        </Button>
        {children}
        </div>
        
    )
}