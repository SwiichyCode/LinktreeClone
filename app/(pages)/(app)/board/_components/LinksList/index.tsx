import { LinksContent } from "../LinksContent";
import { LinkType } from "../LinksForm/Form";

type Props = {
  links: LinkType[];
  removeLink: (id: string) => void;
  register: any;
};

export const LinksList = ({ links, removeLink, register }: Props) => {
  return (
    <ul className="flex flex-col gap-6 my-6">
      {links.map((link, index) => (
        <li key={index}>
          <LinksContent
            index={index}
            link={link}
            removeLink={removeLink}
            register={register}
          />
        </li>
      ))}
    </ul>
  );
};
