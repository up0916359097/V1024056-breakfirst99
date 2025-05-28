<<<<<<< HEAD
"use client"

import { Button } from "@/components/ui/button";
=======
"use client";
import { Button } from "@/components/ui/button";

>>>>>>> ce541ea (123)
import { useState } from "react";



<<<<<<< HEAD
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
=======
export default function TestLayout({ children }) {
    const [count, setCount] = useState(0);
    
  return (
      <div className="border-2 border-dashed border-blue-800 p-4">
      
      <div className="flex mb-4">
        Test Template <span className="px-4 font-bold text-red-600">{count}</span>
        
      </div>
      <Button 
       onClick={() => setCount(count + 1)} 
       className="bg-red-500 text-white mb-4 rounded-full"
       >
        +1
      </Button>
      {children}
    </div> 
  );
>>>>>>> ce541ea (123)
}