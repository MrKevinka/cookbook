import { FC } from "react";

interface IntroProps {
  welcomeText: string;
}

export const Intro: FC<IntroProps> = ({ welcomeText }) => {
  return <div className="text-center">{welcomeText}</div>;
};
