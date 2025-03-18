import { Intro } from "./Components/Intro/Intro";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Intro welcomeText="Hello Cook" />
    </div>
  );
}
