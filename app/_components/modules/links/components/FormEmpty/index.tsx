import React from "react";
import Image from "next/image";
import { Heading } from "@/app/_components/ui/Heading";
import { Paragraph } from "@/app/_components/ui/Paragraph";

export const FormEmpty = () => {
  return (
    <div className="min-h-[377px] flex flex-col justify-center items-center gap-6 text-center rounded-xl bg-primary my-6 p-5">
      <Image
        className="w-[124px] h-[80px] md:w-[249px] md:h-[160px] "
        src="/illustration-empty.svg"
        width={124}
        height={80}
        alt="icon"
      />

      <Heading as="h2">Let’s get you started</Heading>
      <Paragraph className="max-w-[488px]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </Paragraph>
    </div>
  );
};
