# Getting Started with storybook

```
$ yarn install
§ yarn storybook
```

## webpack 5

To be able to use remote-components we have changed webpack config using react-app-rewired (config-overrides.js). be aware that these changes have also been added in storybook config.

## storybook custom css

we have added this to be able to have a full screen experience

```
.sb-show-main.sb-main-padded {
  padding: 0;
}

.sb-show-main.sb-main-padded > #root {
  height: 100%;
}
```

This project was bootstrapped with [npx create-react-app my-app --template typescript (version 18 + webpack 5).](https://github.com/facebook/create-react-app).
