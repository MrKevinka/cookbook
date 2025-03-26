import { Meta, StoryObj } from "@storybook/react";
import { ImageSlider } from "./ImageSlider";

export default {
  component: ImageSlider,
  title: "Components/ImageSlider/ImageSlider",
  args: {},
} satisfies Meta<typeof ImageSlider>;

export const Default: StoryObj<typeof ImageSlider> = {};
