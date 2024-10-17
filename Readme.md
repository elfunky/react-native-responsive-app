# React Native Responsive App

# Why?

### In many React Native projects, developers often need to pass size values as percentages when scaling layouts across different screen sizes, while using other library package. However, these percentages require manual calculations, which can be tedious and error-prone. To simplify this, we've created a library that allows you to pass your width and height directly, and the library will handle the scaling for you based on the device's screen dimensions.

### This eliminates the need for complex calculations every time you need to adjust the size for different devices.

# Installation

To install this package, you can run:

```bash
npm install react-native-responsive-app

or

yarn add react-native-responsive-app

```

## Mobile View Comparison

Below is a comparison of the mobile views for different devices displaying a React Native component:

![Both platform devices UI](https://raw.githubusercontent.com/elfunky/react-native-responsive-app/main/src/assets/responsive.png)

# Usage

### Instead of manually calculating the dimensions in percentage, you can simply use the wt (width), ht (height), and fs (font scaling) functions.

### Example

If you want to set the width to 28 and height to 19 for a particular component, you can do the following:

```javascript
import { wt, ht, fs } from "react-native-responsive-app";

const styles = {
  container: {
    width: wt(28),
    height: ht(19),
    marginTop: ht(20),
    marginHorizontal: wt(20),
  },
  text: {
    fontSize: fs(14),
  },
};
```

## In this example:

- ### width: You don't need to pass percentage values. Just pass the width like wt(28), and the library will adjust it according to the screen width.
- ### height: Similarly, pass the height as ht(19), and it will be auto-scaled based on the screen height.
- ### fontSize: Use fs(14) for font scaling, with an optional factor parameter that defaults to 0.5 for fine-tuning the scaling effect.

# Dependencies

This package uses the Dimensions API from React Native, so make sure your environment is set up to handle this.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
