import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface SlideProps {
  image: string;
  href: string;
}

export const Slide: FC<SlideProps> = ({ image, href }) => {
  return (
    <Link href={href} className="w-full h-80 relative">
      <Image src={image} alt={"slide-image"} fill />
    </Link>
  );
};
