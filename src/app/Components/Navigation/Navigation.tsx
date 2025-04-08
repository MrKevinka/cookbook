import Link from "next/link";
import { navLinks } from "./NavLinks/navLinks";
import { FC } from "react";
import { Pages } from "@/types/pageTypes";

interface NavigationProps {
  pages?: Pages[];
}

export const Navigation: FC<NavigationProps> = ({ pages }) => {
  return (
    <section className="mt-5">
      <ul className="flex justify-around ">
        {pages
          ? pages.map((page, id) => {
              return (
                <li key={id}>
                  <Link href={page.link}>{page.name}</Link>
                </li>
              );
            })
          : navLinks.map((page, id) => {
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
