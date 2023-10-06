import { LinkIcon } from "./LinkIcon";
import { LinkIndex } from "./LinkIndex";
import { LinkRemove } from "./LinkRemove";

type Props = {
  index: number;
  removeLink: () => void;
};

export const LinkHeader = ({ index, removeLink }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <LinkIcon />
        <LinkIndex index={index} />
      </div>
      <LinkRemove removeLink={removeLink} />
    </div>
  );
};
