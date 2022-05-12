import { FC, HTMLAttributes, useEffect, useState } from "react";
import { RemoteComponent } from "../RemoteComponent";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  useLocalUrl?: boolean;
  showDayName?: boolean;
  bgColor?: string;
  subslides?: any[];
  logo?: string;
  pageIntervalTime?: number;
  showTime?: boolean;
  showFacility?: boolean;
  showActivity?: boolean;
  showBookingNote?: boolean;
  showTeam?: boolean;
  showTeamleaders?: boolean;
  showUserName?: boolean;
}

const BookByen: FC<Props> = ({
  useLocalUrl,
  showDayName,
  bgColor,
  logo,
  pageIntervalTime,
  showTime,
  showFacility,
  showActivity,
  showBookingNote,
  showTeam,
  showTeamleaders,
  showUserName,
}) => {
  const [state, setState] = useState([]);
  // this is a boolean that chooses whether we use the local url or the one from github
  const url = useLocalUrl
    ? "https://display-templates.local.itkdev.dk/build/book-byen.js"
    : "https://raw.githubusercontent.com/kkos2/display-templates/kk-develop/build/book-byen.js";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.bookbyen.dk/api/Bookings/Infoscreen?locationId=71"
      ).then((response) => response.json());
      setState(data);
    };

    fetchData().catch(console.error);
  }, []);

  const slideTemplate = {
    content: {
      bgColor,
      subslides: state,
      showDayName,
      logo,
      pageIntervalTime,
      showTime,
      showFacility,
      showActivity,
      showBookingNote,
      showTeam,
      showTeamleaders,
      showUserName,
    },
  };

  return (
    <RemoteComponent
      url={`${url}`}
      run={new Date().toISOString()}
      slide={slideTemplate}
      content={slideTemplate.content}
      slideDone={() => {}}
    />
  );
};

export default BookByen;
