import { Meta, StoryObj } from "@storybook/react";

import { Intro } from "./Intro";

export default {
  component: Intro,
  title: "Components/Atoms/Intro",
  args: {
    welcomeText: "Hello Cook",
  },
} satisfies Meta<typeof Intro>;

export const Default: StoryObj<typeof Intro> = {};
