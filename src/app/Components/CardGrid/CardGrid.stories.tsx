import { Meta, StoryObj } from "@storybook/react";

import { CardGrid } from "./CardGrid";
import { mockDishes } from "@/lib/mockDishes";

export default {
  component: CardGrid,
  title: "Components/Molecules/CardGrid",
  args: {
    dishes: mockDishes,
  },
} satisfies Meta<typeof CardGrid>;

export const Default: StoryObj<typeof CardGrid> = {};
