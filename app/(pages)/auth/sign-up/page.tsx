import { Suspense } from "react";
import { AuthCard } from "../_components/AuthCard";
import { AuthCardWrapper } from "../_components/AuthCard/AuthCardWrapper";
import { AuthForm } from "../_components/AuthForm";

export default function SignupPage() {
  return (
    <AuthCardWrapper>
      <AuthCard
        title="Create account"
        subtitle="Let’s get you started sharing your links!"
        state="signup"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <AuthForm state="signup" />
        </Suspense>
      </AuthCard>
    </AuthCardWrapper>
  );
}
