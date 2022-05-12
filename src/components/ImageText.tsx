import { FC, HTMLAttributes } from "react";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/os2display/display-templates/develop/build/image-text.js";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  image: string;
  boxAlign: string;
  boxMargin: boolean;
  shadow: boolean;
  separator: boolean;
  halfSize: boolean;
  reversed: boolean;
  css: string;
}

const ImageText: FC<Props> = ({
  title,
  text,
  image,
  boxAlign,
  boxMargin,
  shadow,
  separator,
  halfSize,
  reversed,
  css,
}) => {
  const slideTemplate = {
    id: "slide1-image-text",
    type: "image-text",
    duration: 5000,
    themeData: {
      css: css,
    },
    mediaData: {
      "/v1/media/00000000000000000000000001": {
        assets: {
          uri: image,
        },
      },
    },
    content: {
      title: title,
      text: text,
      image: ["/v1/media/00000000000000000000000001"],
      boxAlign: boxAlign,
      boxMargin: boxMargin,
      shadow: shadow,
      separator: separator,
      halfSize: halfSize,
      reversed: reversed,
    },
  };

  return (
    <RemoteComponent
      url={url}
      run={new Date().toISOString()}
      slide={slideTemplate}
      content={slideTemplate.content}
      slideDone={() => {}}
    />
  );
};

export default ImageText;
