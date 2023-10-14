import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getLinks = async (id: string | undefined) => {
  const { data, error } = await supabase
    .from("user")
    .select(`id, links`)
    .eq("id", id);

  return { data, error };
};

const getData = async (id: string | undefined) => {
  const { data, error } = await supabase
    .from("user")
    .select(`id, username, links, firstname, lastname, email`)
    .eq("id", id);

  return { data, error };
};

const Link_service = {
  getLinks,
  getData,
};

export default Link_service;
