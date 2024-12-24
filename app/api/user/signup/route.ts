import { NextRequest } from "next/server.js";
import { NextResponse } from "next/server";
import dbConnection from "@/app/dbConnection/connection";
import User from "@/app/models/userModel";
import bcrypt from "bcrypt";
dbConnection();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Username, email, and password are required" },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
 if(!savedUser){
  return NextResponse.json({message:"valid informationneeded"})
 }
    return NextResponse.json({
      data: savedUser,
      message: "user saved successfuly",
    });
  } catch (err:any) {
    console.log(err);
    return NextResponse.json({ message:err.message });
  }
}
