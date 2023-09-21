import { AuthCard } from "../_components/AuthCard";
import { AuthCardWrapper } from "../_components/AuthCardWrapper";
import { AuthForm } from "../_components/AuthForm";

export default function SigninPage() {
  return (
    <AuthCardWrapper>
      <AuthCard
        title="Login"
        subtitle="Add your details below to get back into the app"
        state="signin"
      >
        <AuthForm state="signin" />
      </AuthCard>
    </AuthCardWrapper>
  );
}
