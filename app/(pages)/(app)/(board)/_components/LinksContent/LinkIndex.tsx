type Props = {
  index: number;
};

export const LinkIndex = ({ index }: Props) => {
  return <h3 className="font-bold">Link #{index + 1}</h3>;
};
