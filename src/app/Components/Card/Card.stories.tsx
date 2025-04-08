import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

export default {
  component: Card,
  title: "Components/Atoms/Card",
  args: {
    dish: {
      difficulty: 2,
      dish: "ein dish",
      link: "/",
      src: "https://picsum.photos/200/300",
      time: 35,
    },
  },
} satisfies Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};
