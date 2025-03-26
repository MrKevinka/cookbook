import { Intro } from "../Components/Intro/Intro";
import { Slide } from "../Components/Slider/Slide/Slide";

export default function Fleisch() {
  return (
    <>
      <Slide
        image={"https://picsum.photos/seed/picsum/200/300"}
        href={"/fleisch"}
      />
      <Intro welcomeText="Hello Fleisch-Cook" />
    </>
  );
}
