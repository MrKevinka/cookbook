import { Dishes } from "@/types/dishTypes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  dish: Dishes;
}

export const Card: FC<CardProps> = ({ dish }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < dish.difficulty ? "gold" : "gray" }}>
          ★
        </span>
      );
    }
    return stars;
  };
  return (
    <Link
      className="flex flex-col gap-2 items-center justify-center border-white border-2 rounded-2xl bg-green-500 relative h-96 w-96"
      href={dish.link ? dish.link : "/"}
    >
      <Image
        src={dish.src ? dish.src : "https://picsum.photos/200/300"}
        alt={""}
        width={200}
        height={300}
        className="block h-full w-full object-cover rounded-t-2xl"
      />

      <span className=" text-xl">{dish.dish ? dish.dish : "test dish"}</span>
      <section>
        {renderStars()} | {dish.time ? dish.time : "999"} Min.
      </section>
    </Link>
  );
};
