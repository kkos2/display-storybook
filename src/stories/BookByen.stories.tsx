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
  apiUrl: "https://api.bookbyen.dk/api/Bookings/Infoscreen?locationId=71",
  useLocalUrl: true,
  showDayName: false,
  logo: "https://admin.kkos2display.dk/bundles/kkos2displayintegration/assets/img/kbh-logo.png",
  showTime: true,
  showFacility: true,
  showActivity: true,
  showBookingNote: true,
  showTeam: true,
  showTeamleaders: false,
  showUserName: true,
  bgColor: "#000c2e",
};
