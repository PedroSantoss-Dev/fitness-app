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

interface Workout {
  id: number;
  name: string;
  image: string;
  nivel: number;
}

export const workout: Workout[] = [
  {
    id: 1,
    name: "Bulking",
    image: "https://www.mensjournal.com/.image/t_share/MTk2MTM1Nzc1ODYzMzE3NjQ5/muscular-dude-muscle-medicine-ball-abs-arms-chest-shoulders-forearms-outdoors-main.jpg",
    nivel:1,
   
  },
  {
    id: 2,
    name: "Crossfit",
    image: "https://www.institutoreaction.com.br/wp-content/uploads/2019/04/crossfit-beneficios-lesoes-miniatura.jpg",
    nivel:1,
   
  },
  {
    id: 3,
    name: "Musculação",
    image: "https://i0.wp.com/www.magnuspersonal.com.br/wp-content/uploads/2022/04/x-cuidados-que-voce-deve-ter-na-musculacao-Magnus-Personal-Trainer.jpg?fit=800%2C448&ssl=1",
    nivel:1,
   
  },  
  {
    id: 4,
    name: "Ciclismo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ObEmHUKe2IjLvZmUDw84utIsf82dKNt0Nw&usqp=CAU",
    nivel:1,
   
  },
  {
    id: 5,
    name: "Pilates",
    image: "https://www.smartfit.com.br/news/wp-content/uploads/2021/03/agachamento-sumo.jpg",
    nivel:1,
   
  },
  {
    id: 6,
    name: "yoga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTKBzKjIiv0q3uZQcdFDWMHnu2D4ArVwfFmjb0MpBx9U8U72xtY-VG8Gt_Rbj4eMuSjU&usqp=CAU",
    nivel:1,
   
  },
]