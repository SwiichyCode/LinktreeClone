import { useEffect, useState } from "react";
import { useStore } from "@/app/_stores/useStore";
import { useLinkStore } from "@/app/_stores/link.store";
import { getStatusString, FetchStatus } from "../_utils/getStatusString";
import Link_service from "@/app/_services/link.service";

export const useFetchLink = () => {
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [error, setError] = useState<string | null>(null);
  // const links = useStore(useLinkStore, (state) => state.links);
  const { links, setLinks } = useLinkStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(FetchStatus.Loading);
        const { data, error } = await Link_service.getLinks(
          "877381de-9ba9-4cd3-b2fe-fbe04c07cc13"
        );
        if (error) {
          throw Error(error.message);
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
  }, [setLinks]);

  return {
    status: getStatusString(status),
    error,
  };
};
