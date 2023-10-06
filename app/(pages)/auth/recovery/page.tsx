import { AuthCard } from "@/app/_components/modules/auth/components/AuthCard";
import { RecoveryForm } from "@/app/_components/modules/auth/components/RecoveryForm";
import { Suspense } from "react";

export default function RecoveryPage() {
  return (
    <AuthCard
      title="Forgot your password?"
      subtitle="Enter your email to reset your password"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <RecoveryForm />
      </Suspense>
    </AuthCard>
  );
}
