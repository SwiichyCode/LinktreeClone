type Props = {
  list: string[];
};

export const Marquee = ({ list }: Props) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-8 animate-marquee whitespace-nowrap">
        {list.map((item, index) => (
          <span key={index} className="text-xl mx-4">
            {item}
          </span>
        ))}
      </div>
      <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
        {list.map((item, index) => (
          <span key={index} className="text-xl mx-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
