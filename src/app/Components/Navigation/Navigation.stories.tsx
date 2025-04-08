import { Meta, StoryObj } from "@storybook/react";

import { Navigation } from "./Navigation";

export default {
  component: Navigation,
  title: "Components/Atoms/Navigation",
  args: {
    pages: [
      { name: "Start", link: "/" },
      { name: "Vegan", link: "/vegan" },
      { name: "Vegetarisch", link: "/vegetarisch" },
      { name: "Fleisch", link: "/fleisch" },
    ],
  },
} satisfies Meta<typeof Navigation>;

export const Default: StoryObj<typeof Navigation> = {};
