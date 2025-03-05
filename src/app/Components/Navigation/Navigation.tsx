import Link from "next/link";
import { navLinks } from "./NavLinks/navLinks";

export const Navigation = () => {
  return (
    <ul className="flex justify-around ">
      {navLinks.map((link, id) => {
        return (
          <li key={id}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
