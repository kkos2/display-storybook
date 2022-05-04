import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageText from "../components/ImageText";

export default {
  title: "Components/ImageText",
  component: ImageText,
  argTypes: {
    boxAlign: {
      options: ["top (default)", "bottom", "left", "right"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof ImageText>;

const Template: ComponentStory<typeof ImageText> = (args: any) => (
  <ImageText {...args} />
);

export const example1 = Template.bind({});
example1.args = {
  title: "Københavns kommune",
  text: "København er Danmarks hovedstad og er med 1.336.982 indbyggere landets største byområde omfattende 18 kommuner eller dele heraf. Fra 1. januar 2007 er byen en del af Region Hovedstaden og for de sydlige deles vedkommende af Region Sjælland.",
  image:
    "https://images.pexels.com/photos/9365604/pexels-photo-9365604.jpeg?cs=srgb&dl=pexels-matteo-badini-9365604.jpg&fm=jpg",
  boxAlign: "top (default)",
  boxMargin: true,
  shadow: true,
  separator: true,
  halfSize: false,
  reversed: false,
  css: "--bg-light: #eee; --text-dark: #000; --bg-dark: #111; --text-light: #fff;",
};

export const example2 = Template.bind({});
example2.args = {
  title: "Nyhavn",
  text: 'Nyhavn er et havnekvarter i København, som er et af byens mest besøgte turistmål. Havnen blev udgravet fra 1671 til 1673 af svenske krigsfanger fra den Anden Karl Gustav-krig som et alternativ til den eksisterende havn. "Nyhavnskanalen" blev indviet af Christian 5. i 1670erne, men i dag hedder det bare Nyhavn.',
  image:
    "https://images.pexels.com/photos/3117216/pexels-photo-3117216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  boxAlign: "bottom",
  boxMargin: false,
  shadow: false,
  separator: false,
  halfSize: false,
  reversed: false,
  css: "--bg-light: #eee; --text-dark: #000; --bg-dark: #111; --text-light: #fff;",
};
