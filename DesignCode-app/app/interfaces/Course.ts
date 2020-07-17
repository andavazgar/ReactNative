import { ImageSourcePropType } from "react-native";

export default interface Course {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  caption: string;
}
