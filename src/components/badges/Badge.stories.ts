import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: 'components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    name: 'Badge',
    color: 'gray',
  }
}