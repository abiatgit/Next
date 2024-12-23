'use client'

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <Button variant="outline" onClick={()=>console.log('hello')}>Click here</Button>
  );
}
