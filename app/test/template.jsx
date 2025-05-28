"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";



export default function TestLayout({ children }){
    const [count, setCount] = useState(0);
    
    return (
        
        
        <div className="border-2 border-dashed border-blue-800 p-4">
          
          
        
        <div className="flex">
            Test Template <span className="px-4 font-bold">{count}</span></div>
        <Button onClick= {() => setCount(count + 1)}
            className="bg-red-500 text-white">
            +1
        </Button>
        {children}
        </div>
        
    )
}