import { useEffect, useState } from "react";

type Props = {
  picture: File[] | Blob[];
};

export const usePicture = ({ picture }: Props) => {
  const [pictureURL, setPictureURL] = useState<any>();

  useEffect(() => {
    if (picture?.[0] instanceof File || picture?.[0] instanceof Blob) {
      setPictureURL(URL.createObjectURL(picture?.[0]));
    }
  }, [picture]);

  return {
    pictureURL,
  };
};
