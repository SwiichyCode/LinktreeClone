import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import type { Link } from "../_stores/types";

const supabase = createServerActionClient({ cookies });

interface UpdateLinksType {
  id: string | undefined;
  links: Link[];
}

interface UpdateProfileType {
  id: string | undefined;
  profile: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
  };
}

const updateLinks = async ({ id, links }: UpdateLinksType) => {
  const { data, error } = await supabase
    .from("user")
    .update({ links })
    .eq("id", id);

  return { data, error };
};

const updateProfile = async ({ id, profile }: UpdateProfileType) => {
  const { data, error } = await supabase
    .from("user")
    .update({
      username: profile.username,
      firstname: profile.firstname,
      lastname: profile.lastname,
      email: profile.email,
    })
    .eq("id", id);

  return { data, error };
};

const Link_service = {
  updateLinks,
  updateProfile,
};

export default Link_service;
