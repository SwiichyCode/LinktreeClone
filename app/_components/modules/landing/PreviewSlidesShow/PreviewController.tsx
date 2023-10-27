import Image from "next/image";

type Props = {
  handlePrevious: () => void;
  handleNext: () => void;
};

export const PreviewController = ({ handlePrevious, handleNext }: Props) => {
  return (
    <div className="hidden lg:absolute top-6 left-12 lg:flex items-center gap-4">
      <div className="flex gap-2">
        <div className=" w-3 h-3 bg-red-500 rounded-full" />
        <div className=" w-3 h-3 bg-yellow-500 rounded-full" />
        <div className=" w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className="flex gap-4">
        <button onClick={handlePrevious}>
          <Image
            src="./icon-chevron-left-dark.svg"
            width={12}
            height={12}
            alt=""
          />
        </button>
        <button onClick={handleNext}>
          <Image
            src="./icon-chevron-right-dark.svg"
            width={12}
            height={12}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
