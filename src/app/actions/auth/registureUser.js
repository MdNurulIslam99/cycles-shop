"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnection";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);

  const { name, email, password } = payload;
  //   validation
  if (!name || !email || !password) return null;
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    payload.password = hashPassword;
    const result = await userCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }

  return null;
};
