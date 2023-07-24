import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    label: '라벨',
    children: '버튼'
  }
}