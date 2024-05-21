import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}
export const user: User = {
  name: "Ravi",
  profile: require("../assets/images/Avatar.jpg"),
};

interface Exercise {
  id: number;
  name: string;
  time: string;
  image: string;
  set: number;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Perna",
    time: "30 sec",
    image: "",
    set:2
  },
  {
    id: 2,
    name: "Peitoral",
    time: "30 sec",
    image: "",
    set:2
  },
  {
    id: 3,
    name: "Costas",
    time: "30 sec",
    image: "",
    set:2
  },
  {
    id: 4,
    name: "Ombro",
    time: "30 sec",
    image: "",
    set:2
  },
  {
    id: 5,
    name: "Cardio",
    time: "30 sec",
    image:"",
    set:2
  },
  {
    id: 6,
    name: "Abdome",
    time: "30 sec",
    image: "",
    set:2
  },
];

