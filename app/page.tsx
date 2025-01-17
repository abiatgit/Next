"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import carebee from "./carebee.png";
import google from "./social.png"

export default function Home() {
  const router = useRouter();
  const onClickHandle = async () => {
    try {
      const respone = await axios.post("/api/user/signin/google");

      console.log("client Url", respone.data.data);
      const url = respone.data.data;
      if (url) {
        router.push(url);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[350px] h-auto border border-gray-200 shadow-lg rounded-lg bg-white p-5 flex flex-col gap-4">
        <img
          className="w-[150px] mx-auto mb-4"
          src="https://t4.ftcdn.net/jpg/01/04/68/75/360_F_104687503_P30SeVRxRXYxyItYj9Vm5kOztwosjb0z.jpg"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign in
        </h1>
        <div
  onClick={onClickHandle}
  className="w-[250px] mx-auto mb-4 cursor-pointer border border-black rounded-lg p-2 flex items-center justify-center"
>
  <p className="text-gray-800 flex items-center justify-center">
    <svg
      className="mr-2"  
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"   
      height="16"  
    >
      <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        fill="currentColor"
      />
    </svg>
    Login with Google
  </p>
</div>

        <hr className="my-4 border-gray-300" />
        <form className="flex flex-col gap-3 items-center justify-center">
          <input
            className=" w-[250px] mx-auto mb-4 cursor-pointer border border-black p-2 flex items-center justify-center rounded-lg  text-gray-700 focus:outline-none focus:ring-2"
            type="email"
            placeholder="Email"
          />
          <input
           className=" w-[250px] mx-auto mb-4 cursor-pointer border border-black p-2 flex items-center justify-center rounded-lg  text-gray-700 focus:outline-none focus:ring-2"
            type="password"
            placeholder="Password"
          />
        </form>

        <Button className="bg-black
        -500 text-white mt-4 m-auto " >Sign in</Button>
      </div>
    </div>
  );
}
