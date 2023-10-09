import { FormContainer } from "@/app/_components/container/FormContainer";
import { FormHeader } from "@/app/_components/modules/links/components/FormHeader";
import Link_service from "@/app/_services/link.client.service";

export default function ProfilePage() {
  return (
    <FormContainer>
      <FormHeader
        title="Profile Details"
        subtitle="Add your details to create a personal touch to your profile."
      />
    </FormContainer>
  );
}
