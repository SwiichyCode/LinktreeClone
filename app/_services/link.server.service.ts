import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import type { Links } from "../_stores/preview.store";

const supabase = createServerActionClient({ cookies });

interface UpdateLinksType {
  id: string | undefined;
  links: Links[];
}

const updateLinks = async ({ id, links }: UpdateLinksType) => {
  const { data, error } = await supabase
    .from("user")
    .update({ links })
    .eq("id", id);

  return { data, error };
};

const Link_service = {
  updateLinks,
};

export default Link_service;
