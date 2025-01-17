import { login } from "@/app/actions/googleLogin";

import { NextResponse } from "next/server";

export async function POST() {
  try {
    const data = await login();

    console.log("data ", data);
    if (!data.url) {
      return NextResponse.json({ message: "No data" });
    }
    return NextResponse.json({data:data.url})

  } catch (err) {
    console.log(err);
    return NextResponse.json({ data: err });
  }
}
