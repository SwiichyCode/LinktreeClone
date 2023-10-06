import { Suspense } from "react";
import { AuthCard } from "@/app/_components/modules/auth/components/AuthCard";
import { ResetPasswordForm } from "@/app/_components/modules/auth/components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthCard title="Reset your password" subtitle="Enter your new password">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthCard>
  );
}
