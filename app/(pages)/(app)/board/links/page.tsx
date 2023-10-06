import { FormContainer } from "@/app/_components/container/FormContainer";
import { FormHeader } from "@/app/_components/modules/links/components/FormHeader";
import { FormLinks } from "@/app/_components/modules/links/components/FormLinks";

export default function LinksPage() {
  return (
    <FormContainer>
      <FormHeader
        title="Customize your links"
        subtitle="Add/edit/remove links below and then share all your profiles with the
        world!"
      />
      {/* <FormLinks /> */}
    </FormContainer>
  );
}
