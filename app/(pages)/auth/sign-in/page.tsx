import { Suspense } from "react";
import { AuthCard } from "@/app/_components/modules/auth/components/AuthCard";
import { AuthForm } from "@/app/_components/modules/auth/components/AuthForm";

export default function SigninPage() {
  return (
    <AuthCard
      title="Login"
      subtitle="Add your details below to get back into the app"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm state="signin" />
      </Suspense>
    </AuthCard>
  );
}
