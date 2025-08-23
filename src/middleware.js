import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token);
  const isAdminUSer = token?.role == "admin";
  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/addproduct");
  if (isAdminSpecificRoute && !isAdminUSer) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  return NextResponse.next();
};
