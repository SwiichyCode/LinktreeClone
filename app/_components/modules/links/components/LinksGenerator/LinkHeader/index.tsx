type Props = {
  index: number;
  removeLink: () => void;
};

export const LinkHeader = (props: Props) => {
  const { index, removeLink } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <span className=" bg-grey w-3 h-[1px]"></span>
          <span className=" bg-grey w-3 h-[1px]"></span>
        </div>
        <h3 className="font-bold">Link #{index + 1}</h3>
      </div>
      <button type="button" onClick={removeLink}>
        Remove
      </button>
    </div>
  );
};
