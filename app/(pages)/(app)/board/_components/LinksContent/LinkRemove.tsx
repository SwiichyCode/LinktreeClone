type Props = {
  removeLink: () => void;
};

export const LinkRemove = ({ removeLink }: Props) => {
  return (
    <button type="button" onClick={removeLink}>
      Remove
    </button>
  );
};
