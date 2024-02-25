import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ["/dashboard"], // '/dashbaord` 경로는 로그인이 필요하도록 설정합니다.
};
