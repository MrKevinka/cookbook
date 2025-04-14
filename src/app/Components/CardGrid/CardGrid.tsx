import { Dishes } from "@/types/dishTypes";
import { FC } from "react";
import { Card } from "../Card/Card";

interface CardGridProps {
  dishes: Dishes[];
}

export const CardGrid: FC<CardGridProps> = ({ dishes }) => {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-1 m-auto flex flex-col gap-y-4 md:gap-x-60 md:gap-y-10 mb-6">
      {dishes
        ? dishes.map((dish, id) => {
            return (
              <Card
                key={id}
                dish={{
                  src: dish.src,
                  dish: dish.dish,
                  time: dish.time,
                  difficulty: dish.difficulty,
                  link: dish.link,
                }}
              />
            );
          })
        : "Keine Dishes"}
    </div>
  );
};
