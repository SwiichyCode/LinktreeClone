import Link_service from "@/app/_services/link.client.service";
import { Preview } from "@/app/_components/layouts/Preview";

export const revalidate = 10;

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ProfilePage({ searchParams }: Props) {
  const { user } = searchParams || {};
  const data = await Link_service.getData(user as string);

  console.log(data);

  return <Preview isPreview isProfile {...data} />;
}
