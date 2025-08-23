"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnection";

export const loginUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  //   validation
  const { email, password } = payload;
  const user = await userCollection.findOne({ email });
  //   if ( !email || !password) return { success: false };
  if (!user) return null;

  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) return null;
  return user;
};
