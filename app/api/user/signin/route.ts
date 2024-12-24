import { NextRequest } from "next/server.js";
import { NextResponse } from "next/server";
import dbConnection from "@/app/dbConnection/connection";
import User from "@/app/models/userModel";
import bcrypt from "bcrypt";
dbConnection();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ message: "Invalid Credential" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return NextResponse.json({
        message: "Invalid Credential",
      });
    } else {
      return NextResponse.json({
        data: existingUser,
        message: "Successfuly logged",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({data:err});
  }
}
