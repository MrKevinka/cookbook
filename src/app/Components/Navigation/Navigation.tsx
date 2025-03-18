import Link from "next/link";
import { navLinks } from "./NavLinks/navLinks";

export const Navigation = () => {
  return (
    <section>
      <ul className="flex justify-around ">
        {navLinks.map((page, id) => {
          return (
            <li key={id}>
              <Link href={page.link}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
