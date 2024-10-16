import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const screenWidth = 393;
const screenHeight = 852;

const wt = (size) => (width / screenWidth) * size;
const ht = (size) => (height / screenHeight) * size;
const fs = (size, factor = 0.5) => size + (wt(size) - size) * factor;

export { wt, ht, fs };
