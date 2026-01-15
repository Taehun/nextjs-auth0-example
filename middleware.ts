import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);

  // /auth 경로는 Auth0가 처리
  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  // /dashboard 경로는 로그인이 필요
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const session = await auth0.getSession(request);
    if (!session) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("returnTo", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return authRes;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
