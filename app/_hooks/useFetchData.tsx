"use client";

import { useEffect, useState } from "react";
import { useDataStore } from "@/app/_stores/data.store";
import { usePreviewStore } from "../_stores/preview.store";
import { getStatusString, FetchStatus } from "@/app/_utils/getStatusString";
import Link_service from "@/app/_services/link.client.service";

type Props = {
  userId: string | undefined;
};

export const useFetchData = ({ userId }: Props) => {
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [error, setError] = useState<string | null>(null);
  const { links, setData, setLinks, setProfile } = useDataStore();
  const { setLinkPreviews, setProfilePreview } = usePreviewStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(FetchStatus.Loading);
        const { data, error } = await Link_service.getData(userId);
        if (error) {
          throw new Error(error.message);
        }
        const response = data?.[0];
        const links = response?.links;
        const profile = {
          picture: response?.picture,
          username: response?.username,
          firstname: response?.firstname,
          lastname: response?.lastname,
          email: response?.email,
        };

        setData(links, profile);
        setLinkPreviews(links);
        setProfilePreview(profile);

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
  }, [links, userId, setData, setLinks, setProfile]);

  return {
    status: getStatusString(status),
    error,
  };
};
