import { Meta, StoryObj } from "@storybook/react";

import { Intro } from "./Intro";

export default {
  component: Intro,
  title: "Components/WelcomeText",
  args: {
    welcomeText: "This is the welcome text!",
  },
} satisfies Meta<typeof Intro>;

export const Default: StoryObj<typeof Intro> = {};
