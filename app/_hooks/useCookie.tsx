import { cookies } from "next/headers";

export const useCookie = (key: string) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(key);

  return { cookie };
};
