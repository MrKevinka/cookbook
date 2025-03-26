"use client";
import { Intro } from "../app/Components/Intro/Intro";
import { ImageSlider } from "./Components/Slider/ImageSlider";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Intro welcomeText="Hello Cook" />
    </>
  );
}
