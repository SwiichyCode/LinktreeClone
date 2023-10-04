import Image from "next/image";

export const LinksFormEmpty = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center rounded-xl bg-primary my-6 p-5">
      <Image src="/illustration-empty.svg" width={124} height={80} alt="icon" />
      <h2 className="heading">Let’s get you started</h2>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};
