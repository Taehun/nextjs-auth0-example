# Next.js Auth0 Example

Next.js와 Auth0를 사용한 인증 예제 프로젝트입니다.

## Tech Stack

- **Next.js** 16.1.2
- **React** 19.2.3
- **@auth0/nextjs-auth0** 4.14.0
- **Tailwind CSS** 4.1.18
- **TypeScript** 5.9.3

## Getting Started

### 1. 패키지 설치

```bash
pnpm install
```

### 2. 환경 변수 설정

`.env.example`을 `.env.local`로 복사하고 값을 설정합니다:

```bash
cp .env.example .env.local
```

```env
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
APP_BASE_URL='http://localhost:3000'
AUTH0_DOMAIN='your-tenant.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
```

### 3. Auth0 Dashboard 설정

[Auth0 Dashboard](https://manage.auth0.com)에서 Application 설정:

- **Allowed Callback URLs:** `http://localhost:3000/auth/callback`
- **Allowed Logout URLs:** `http://localhost:3000`

### 4. 개발 서버 실행

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx      # 로그인 필요한 대시보드 페이지
│   ├── globals.css       # Tailwind CSS 스타일
│   ├── layout.tsx        # Auth0Provider 래퍼
│   └── page.tsx          # 홈 페이지
├── lib/
│   └── auth0.ts          # Auth0Client 인스턴스
├── middleware.ts         # Auth0 미들웨어 & 라우트 보호
└── .env.local            # 환경 변수
```

## Auth Routes

Auth0 SDK v4에서는 미들웨어가 인증 라우트를 자동으로 처리합니다:

| Route | Description |
|-------|-------------|
| `/auth/login` | 로그인 |
| `/auth/logout` | 로그아웃 |
| `/auth/callback` | Auth0 콜백 |
| `/auth/profile` | 사용자 프로필 (JSON) |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth0 Next.js SDK v4](https://github.com/auth0/nextjs-auth0)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

## Changelog

### Updated 2026-01-15

**Major Version Upgrades:**
- Next.js 14.1.0 → 16.1.2
- React 18.3.1 → 19.2.3
- @auth0/nextjs-auth0 3.8.0 → 4.14.0
- Tailwind CSS 3.4.19 → 4.1.18
- ESLint 8.57.1 → 9.39.2

**@auth0/nextjs-auth0 v4 Migration:**
- 환경 변수 변경:
  - `AUTH0_BASE_URL` → `APP_BASE_URL`
  - `AUTH0_ISSUER_BASE_URL` → `AUTH0_DOMAIN` (scheme 제거)
- 인증 경로 변경: `/api/auth/*` → `/auth/*`
- `UserProvider` → `Auth0Provider`
- `getSession()` → `auth0.getSession()` (Auth0Client 인스턴스에서 호출)
- Route Handler 삭제 (미들웨어가 자동 처리)
- Auth0 Dashboard의 Callback URL 업데이트 필요

**Tailwind CSS v4 Migration:**
- `@tailwindcss/postcss` 패키지 추가
- PostCSS 설정 변경: `tailwindcss: {}` → `"@tailwindcss/postcss": {}`
- CSS import 변경: `@tailwind base/components/utilities` → `@import "tailwindcss"`
- `autoprefixer` 제거 (v4에 내장)
