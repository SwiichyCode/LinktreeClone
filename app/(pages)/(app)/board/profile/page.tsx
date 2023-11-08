import { useCookie } from "@/app/_hooks/useCookie";
import { FormLayout } from "@/app/_components/ui/Form/FormLayout";
import { FormProfile } from "@/app/_components/modules/profile/components/FormProfile";

export const revalidate = 10;

export default function ProfilePage() {
  const { cookie } = useCookie("user_id");

  return (
    <FormLayout
      title="Profile Details"
      subtitle="Add your details to create a personal touch to your profile."
    >
      <FormProfile userId={cookie?.value} />
    </FormLayout>
  );
}
