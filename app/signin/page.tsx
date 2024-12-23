"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function SignIn() {
  const [saved,setSaved]=useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onClickHandler = async() => {
try{
  const respone=await axios.post("/api/user/signin",user)
  console.log(respone.data.message)
if(respone.data.message==="user saved successfuly"){
  setSaved(true)
}
}
catch(err){
  console.log(err)

}

  };
  return (
    <div className="m-5">
      <h1>Sign In</h1>

      <Input
        placeholder="Email"
        className="w-1/6  my-2"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        className="w-1/6 my-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button onClick={onClickHandler}>Sign In</Button>
      <p className="my-3">
        {" "}
        <Link href={"/signup"}>Sign up</Link>
      </p>
    </div>
  );
}
