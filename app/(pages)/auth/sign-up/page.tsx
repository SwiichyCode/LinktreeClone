import { Suspense } from "react";
import { AuthCard } from "@/app/_components/modules/auth/components/AuthCard";
import { AuthForm } from "@/app/_components/modules/auth/components/AuthForm";

export default function SignupPage() {
  return (
    <AuthCard
      title="Create account"
      subtitle="Let’s get you started sharing your links!"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm state="signup" />
      </Suspense>
    </AuthCard>
  );
}
