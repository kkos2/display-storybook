import BookByen from "../components/BookByen";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BookByen",
  component: BookByen,
} as ComponentMeta<typeof BookByen>;

const Template: ComponentStory<typeof BookByen> = (args) => (
  <BookByen {...args} />
);

export const example1 = Template.bind({});
example1.args = {
  useLocalUrl: true,
  bgColor: "#000c2e",
  isOdd: false,
  logo: "https://admin.kkos2display.dk/bundles/kkos2displayintegration/assets/img/kbh-logo.png",
};
