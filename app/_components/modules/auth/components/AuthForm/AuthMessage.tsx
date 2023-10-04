import clsx from "clsx";
import { useSearchParams } from "next/navigation";

export const AuthMessage = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const error = searchParams.get("error");

  return (
    <>
      {(error || success) && (
        <p
          className={clsx(
            "text-xs font-semibold",
            success ? "text-green-500" : "text-red-500"
          )}
        >
          {success ? success : error}
        </p>
      )}
    </>
  );
};
