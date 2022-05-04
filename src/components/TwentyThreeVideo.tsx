import { FC, HTMLAttributes } from "react";
import { RemoteComponent } from "../RemoteComponent";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  useLocalUrl: boolean;
  videoList: string;
  autoPlay: boolean;
  showTray: boolean;
  mutedAutoPlay: boolean;
  autoMute: boolean;
}

const TwentyThreeVideo: FC<Props> = ({
  useLocalUrl,
  videoList,
  autoPlay,
  showTray,
  mutedAutoPlay,
  autoMute,
}) => {
  // this is a boolean that chooses whether we use the local url or the one from github
  const url = useLocalUrl
    ? "https://display-templates.local.itkdev.dk/build/twentyThreeVideo.js"
    : "https://raw.githubusercontent.com/kkos2/display-templates/kk-develop/build/twentyThreeVideo.js";

  const slideTemplate = {
    // "@id" important for iframe id!
    "@id": "storybookid",
    content: {
      videoList,
      autoPlay,
      showTray,
      mutedAutoPlay,
      autoMute,
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

export default TwentyThreeVideo;
