import { Meta, StoryObj } from "@storybook/react";
import { Slide } from "./Slide";

export default {
  component: Slide,
  title: "Components/Slider/Slide",
  args: {
    image: "https://picsum.photos/seed/picsum/200/300",
    href: "/fleisch",
  },
} satisfies Meta<typeof Slide>;

export const Default: StoryObj<typeof Slide> = {};
