import { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

export default {
  component: Slider,
  title: "Components/Slider/Slider",
  args: {},
} satisfies Meta<typeof Slider>;

export const Default: StoryObj<typeof Slider> = {};
