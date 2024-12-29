"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router =useRouter()
  const [saved, setSaved] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onClickHandler = async () => {
    try {
      const respone = await axios.post("/api/user/signin", user);
      console.log(respone.data.message);
      if (respone?.data?.message === "Successfuly logged") {
        setSaved("user saved successfuly");
        router.push('/home');
      } else {
        setSaved("invalid credential");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Sign In</h1>

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
        <Button onClick={onClickHandler}>Sign In</Button>
        {saved && (
          <p
            className={`my-2 ${
              saved.includes("successfuly") ? "text-green-500" : "text-red-500"
            }`}
          >
            {saved}
          </p>
        )}
        <p className="my-3">
          {" "}
          <Link href={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
