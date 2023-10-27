import Image from "next/image";
import { Counter } from "@/app/_components/ui/Counter";
import Link_service from "@/app/_services/link.client.service";

export const ActiveUser = async () => {
  const { data } = await Link_service.getAllProfile();
  const activeUser = data?.length;

  return (
    <article className="w-full max-w-sm flex flex-col gap-8 md:gap-12">
      <p className="font-medium">
        Boost Your Online Presence with the Ultimate Link Generation Tool.
        Create, Share, and Optimize Your Links for Maximum Impact.
      </p>
      <div className="flex gap-12">
        <Counter label="Active User" number={activeUser!} />
        <Counter label="Visitors" number={0} />
      </div>

      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            key={index}
            src={`/profile/profile-${index + 1}.png`}
            alt="hero"
            width={56}
            height={56}
          />
        ))}

        <Image
          src="/profile/profile-add.png"
          alt="hero"
          width={56}
          height={56}
        />
      </div>
    </article>
  );
};
