import { auth0 } from "@/lib/auth0";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  return (
    <div>
      {!!session?.user && (
        <div>
          <p>안녕하세요. {session.user.name} 님!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/auth/logout">Logout</a>
          </button>
        </div>
      )}
      로그인이 필요한 대쉬보드 페이지 입니다.
    </div>
  );
}
