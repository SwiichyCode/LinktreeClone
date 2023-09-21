import { useSearchParams } from "next/navigation";

export const AuthError = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return error && <p className="text-xs text-red-500 font-semibold">{error}</p>;
};
