import Link from "next/link";

type Props = {
  state: "signin" | "signup";
};

export const AuthCardFooter = ({ state }: Props) => {
  const isSignin = state === "signin";

  return (
    <p className="text-center">
      {isSignin ? "Don’t have an account?" : "Already have an account?"}{" "}
      <Link
        className="text-purple"
        href={isSignin ? "/auth/sign-up" : "/auth/sign-in"}
      >
        {isSignin ? "Create account" : "Login"}
      </Link>
    </p>
  );
};
