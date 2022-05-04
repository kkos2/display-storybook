import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      horizontal: {
        name: "9/16 (horizontal)",
        styles: {
          width: "1280px",
          height: "720px",
        },
      },
      vertical: {
        name: "16/9 (vertical)",
        styles: {
          width: "720px",
          height: "1280px",
        },
      },
    },
  },
};
