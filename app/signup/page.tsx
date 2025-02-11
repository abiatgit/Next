"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function SignUP() {
  const router = useRouter();

  const [saved,setSaved]=useState("")

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onClickHandler = async () => {
    try {
      const result = await axios.post("/api/user/signup", user);
    
  if(result?.data?.message==="user saved successfuly"){
    setSaved("Sign up successfuly")
    router.push('/home');
  }else{
    setSaved("valid inforamtion requird")
  }
      

    } catch (err) {
      console.log(err);
       setSaved("An error occurred. Please try again.")
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
     <div>
     <h1>Sign up</h1>
      <Input
        placeholder="User name"
        className=" w-full  my-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <Input
        placeholder="Email"
        className=" w-full  my-2"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        placeholder="Password"
       className=" w-full  my-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <Button onClick={onClickHandler}>Sign Up</Button>
      <p className="my-3">
        {" "}
        <Link href={"/signin"}>Sign in</Link>
      </p>
      {saved && (
  <p className={`my-2 ${saved.includes("success") ? "text-green-500" : "text-red-500"}`}>
    {saved}
  </p>
)}
     </div>
    </div>
  );
}
