import { useEffect, useState } from "react";

type Props = {
  picture: File[] | Blob[];
};

export const usePicture = ({ picture }: Props) => {
  const [pictureURL, setPictureURL] = useState<string | null>(null);

  useEffect(() => {
    if (picture && picture.length > 0) {
      const file = picture[0];
      const objectURL = URL.createObjectURL(file);
      setPictureURL(objectURL);

      // Assurez-vous de nettoyer l'URL de l'objet lorsqu'il n'est plus nécessaire
      return () => URL.revokeObjectURL(objectURL);
    } else {
      setPictureURL(null);
    }
  }, [picture]);

  return {
    pictureURL,
  };
};
