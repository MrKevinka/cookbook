import { Intro } from "../app/Components/Intro/Intro";
import { Slide } from "../app/Components/Slider/Slide/Slide";

export default function Home() {
  return (
    <>
      <Slide
        image={"https://picsum.photos/seed/picsum/200/300"}
        href={"/fleisch"}
      />
      <Intro welcomeText="Hello Cook" />
    </>
  );
}
