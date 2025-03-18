import { Meta } from "storybook/internal/csf";
import { Intro } from "./Intro";

export default {
  title: "Components/WelcomeText",
  component: Intro,
  args: {
    welcomeText: "This is the welcome text!",
  },
} satisfies Meta<typeof Intro>;

export const Default: StoryObj<typeof Intro> = {};
