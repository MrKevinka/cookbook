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
    <div className="flex flex-col gap-2 justify-between items-center  border-white border-2 rounded-2xl bg-green-500 relative h-96 w-80">
      <Link
        href={dish.link ? dish.link : "/"}
        className="relative w-full h-2/3"
      >
        <Image
          src={dish.src ? dish.src : "https://picsum.photos/200/300"}
          alt={""}
          fill
          className="block  object-cover rounded-t-2xl"
        />
      </Link>
      <section className="flex flex-col mb-9 gap-6 items-center">
        <span className="text-xl">{dish.dish ? dish.dish : "test dish"}</span>
        <span>
          {renderStars()} | {dish.time ? `${dish.time} Min.` : "N/A"}
        </span>
      </section>
    </div>
  );
};
