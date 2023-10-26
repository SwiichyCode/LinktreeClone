type Props = {
  label: string;
  number: number;
};

export const Counter = ({ label, number }: Props) => {
  const handleSizeOFNumber = (number: number) => {
    if (number > 999) {
      return `${number / 1000}k`;
    }
    return number;
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-medium">{label}</h3>
      <span className="text-2xl font-bold">{handleSizeOFNumber(number)}+</span>
    </div>
  );
};
