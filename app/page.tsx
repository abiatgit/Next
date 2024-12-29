'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  
  const onClickHandle=()=>{

  }
  return (
   <div className="flex items-center justify-center h-screen">
    <Button variant="outline" onClick={onClickHandle}><Link href={"/signin"}>Sign-in</Link></Button>
   </div>
  );
}
