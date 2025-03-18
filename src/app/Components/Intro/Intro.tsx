import { FC } from "react";

interface IntroProps {
  welcomeText: string;
}

export const Intro: FC<IntroProps> = ({ welcomeText }) => {
  return <p className="text-center">{welcomeText}</p>;
};
