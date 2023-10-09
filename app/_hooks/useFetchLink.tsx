"use client";

import { useEffect, useState } from "react";
import { useLinkStore } from "@/app/_stores/link.store";
import { getStatusString, FetchStatus } from "@/app/_utils/getStatusString";
import Link_service from "@/app/_services/link.client.service";

type Props = {
  userId: string | undefined;
};

export const useFetchLink = ({ userId }: Props) => {
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [error, setError] = useState<string | null>(null);
  const { links, setLinks } = useLinkStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(FetchStatus.Loading);
        const { data, error } = await Link_service.getLinks(userId);
        if (error) {
          throw new Error(error.message);
        }
        const response = data?.[0].links;
        setLinks(response);
        setStatus(FetchStatus.Success);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        setStatus(FetchStatus.Error);
      }
    };

    if (links?.length === 0) {
      fetchData();
    } else {
      setStatus(FetchStatus.Success);
    }
  }, []);

  return {
    status: getStatusString(status),
    error,
  };
};
