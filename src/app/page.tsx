import { mockDishes } from "@/lib/mockDishes";
import { Intro } from "../app/Components/Intro/Intro";
import { CardGrid } from "./Components/CardGrid/CardGrid";
import { ImageSlider } from "./Components/Slider/ImageSlider";
import { FruitCards } from "./Components/FruitCards/FruitCards";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Intro welcomeText="Hello Cook" />
      <FruitCards />
      <CardGrid dishes={mockDishes} />
    </>
  );
}
