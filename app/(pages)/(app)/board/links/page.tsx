import { useCookie } from "@/app/_hooks/useCookie";
import { FormLayout } from "@/app/_components/ui/Form/FormLayout";
import { FormLinks } from "@/app/_components/modules/links/components/FormLinks";

export default function LinksPage() {
  const { cookie } = useCookie("user_id");

  return (
    <FormLayout
      title="Customize your links"
      subtitle="Add/edit/remove links below and then share all your profiles with the
    world!"
    >
      <FormLinks userId={cookie?.value} />
    </FormLayout>
  );
}
