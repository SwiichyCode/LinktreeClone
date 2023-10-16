"use client";
import { useState } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Button } from "../../ui/Button";
import { Notification } from "../../ui/Notification";

type Props = {
  userId: string | undefined;
};

export const HeaderPreview = ({ userId }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleBackHistory = () => {
    window.history.back();
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_SITE_URL!}/view/?user=${userId}`
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <HeaderWrapper className="relative flex justify-between mb-14 md:mb-[126px]">
      <Button variant="secondary" onClick={handleBackHistory}>
        Back to Editor
      </Button>

      <Button onClick={handleShareLink}>Share Link</Button>
      <Notification
        iconUrl="/icon-links-header.svg"
        message="The link has been copied to your clipboard!"
        submitted={submitted}
      />
    </HeaderWrapper>
  );
};
