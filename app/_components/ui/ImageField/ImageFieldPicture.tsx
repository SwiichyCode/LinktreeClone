type Props = {
  pictureURL: string | undefined;
};

export const ImageFieldPicture = ({ pictureURL }: Props) => {
  return (
    <div
      className="absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-xl"
      style={{ backgroundImage: `url(${pictureURL})` }}
    />
  );
};
