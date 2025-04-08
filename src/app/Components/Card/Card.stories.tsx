import { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

export default {
  component: Card,
  title: "Components/Atoms/Card",
  args: {},
} satisfies Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};
