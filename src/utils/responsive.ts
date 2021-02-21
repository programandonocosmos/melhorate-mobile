import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");
export const hp = (percentage: number) => (height / 100) * percentage;
export const wp = (percentage: number) => (height / 100) * percentage;
