"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function login() {
  const supabase = await createSupabaseServer();
  console.log("supabase",supabase)
  const { data,error } = await supabase.auth.signInWithOAuth({ provider: "google" });
  console.log("auth data",data)
  if (error) {

    console.log("auth error",error);
  }
  return data
}
