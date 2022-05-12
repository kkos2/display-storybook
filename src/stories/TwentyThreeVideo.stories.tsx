import TwentyThreeVideo from "../components/TwentyThreeVideo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TwentyThreeVideo",
  component: TwentyThreeVideo,
} as ComponentMeta<typeof TwentyThreeVideo>;

const Template: ComponentStory<typeof TwentyThreeVideo> = (args) => (
  <TwentyThreeVideo {...args} />
);

export const example1 = Template.bind({});
example1.args = {
  videoList: "12780780, 69389106",
  useLocalUrl: true,
  autoPlay: true,
  showTray: false,
  mutedAutoPlay: true,
  autoMute: false,
};
