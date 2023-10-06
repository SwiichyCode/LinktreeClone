import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getLinks = async (id: string) => {
  const { data, error } = await supabase
    .from("user")
    .select(`links`)
    .eq("id", id);

  return { data, error };
};

const Link_service = {
  getLinks,
};

export default Link_service;
