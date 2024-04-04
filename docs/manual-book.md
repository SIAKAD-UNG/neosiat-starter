# Manual book UNG Starter

Base project adalah sebiah skeleton aplikasi untuk memudahkan pengembangan aplikasi dengan
package2 yang sudah distandarisasi dan telahtersedia konfigurasi bdasar.
base project ini menggunakan nextjs 14 sebagai framework utama

## Perlu disiapkan

- Typescript
- Nodejs v20.12 atau terbaru
- Npm 10.5
- Nextjs 14.1

## Installation

Clone repository aplikasi dan install dependensi aplikasi.

```sh
git clone ung-starter
cd ung-starter
npm install
# dan jalanakan
npm run dev
```

settingan environments...
letakan pada file **.env.local** untuk local development
sebagai berikut

```env
# https://next-auth.js.org/configuration/options
# Linux: `openssl rand -hex 32` or go to https://generate-secret.vercel.app/32
AUTH_SECRET=mbqnhDJDfE3pWlFfVfBoAR02Sv2l73nleFVEXLQ3+rk=
```

## Dependensi dan package

Standarisasi dan penetuan package adalah hal terpenting dalam mengembangan aplikasi dalam jangka panjang dan besar karena itu pada base project ini kami menggunakan beberapa package untuk mendukung pengembangan aplikasi baik itu open source atau berlisensi.

berikut daftar package:

| Nama Package | README | Example |
| ------ | ------ | ------ |
| shadcn/ui | [https://github.com/shadcn-ui/ui/blob/main/README.md][shadcn] | |
| Auth.js | [https://github.com/nextauthjs/next-auth/blob/main/README.md][Authjs] | |
| React Hook Form | [https://github.com/react-hook-form/react-hook-form/blob/master/README.md][RHF] | |
| React Hook Form Resolver | [https://github.com/react-hook-form/resolvers/blob/master/README.md][RHFr] | |
| Zod | [https://github.com/colinhacks/zod/blob/master/README.md][ZOD] | |
| swr | [https://github.com/vercel/swr/blob/main/README.md][SWR] | [https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts][swrEx] |
| TanStack Table v8 | [https://github.com/TanStack/table/blob/main/README.md][TSTBL] | |
| axios http | [https://github.com/axios/axios/blob/v1.x/README.md][aXIO] | [https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts][aXIOtE] |

## Shadcn/ui

Package yang telah diinstall dan di konfigurasi dengan shadcn/ui

sebagai berikut:


```sh
npx shadcn-ui@latest add sheet
# ✔ Done.
npx shadcn-ui@latest add alert-dialog
# ✔ Done.
npx shadcn-ui@latest add dialog
# ✔ Done.
npx shadcn-ui@latest add popover
# ✔ Done.
npx shadcn-ui@latest add tooltip
# ✔ Done.
npx shadcn-ui@latest add skeleton
# ✔ Done.
npx shadcn-ui@latest add toast
# ✔ Done.
npx shadcn-ui@latest add aspect-ratio
# ✔ Done.
npx shadcn-ui@latest add calendar
# ✔ Done.
npx shadcn-ui@latest add dropdown-menu
# ✔ Done.
# Date Picker Done ✅
```

## Tailwind

### @tailwindcss/forms

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.


```sh
npm install -D @tailwindcss/forms
```

```js
// tailwind.config.js
plugins: [
  require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),
],
```

## Docker

Bisa ditambahkan

## Testing

Bisa ditambahkan

## License

UNG


[//]: # (Catatan)

   [node.js]: <https://nodejs.org/en>
   [Typescript]: <https://www.typescriptlang.org/>
   [Next.js]: <https://nextjs.org/>

   [shadcn]: <https://github.com/shadcn-ui/ui/blob/main/README.md>
   [Authjs]: <https://github.com/nextauthjs/next-auth/blob/main/README.md>
   [RHF]: <https://github.com/react-hook-form/react-hook-form/blob/master/README.md>
   [RHFr]: <https://github.com/react-hook-form/resolvers/blob/master/README.md>
   [ZOD]: <https://github.com/colinhacks/zod/blob/master/README.md>
   [SWR]: <https://github.com/vercel/swr/blob/main/README.md>
   [TSTBL]: <https://github.com/TanStack/table/blob/main/README.md>
   [swrEx]: <https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts>
   [aXio]: <https://github.com/axios/axios/blob/v1.x/README.md>
   [aXIOtE]: <https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts>
