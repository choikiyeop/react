import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: 'components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Breadcrumb>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    breads: [
      {
        name: "Home",
        href: "#home"
      },
      {
        name: "Projects",
        href: "#projects"
      },
      {
        name: "Flowbite",
        href: "#flowbite"
      }
    ]
  }
}