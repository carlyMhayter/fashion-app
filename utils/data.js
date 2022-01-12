import { v4 as uuidv4 } from "uuid";

export const clothes = [
  { src: "/clothes/IMG_0840.jpeg", tags: ["jumpsuit", "spring"] },
  {
    src: "/clothes/IMG_0841.jpeg",
    tags: ["shorts", "bottoms", "spring", "summer"],
  },
  {
    src: "/clothes/IMG_0842.jpeg",
    tags: ["shorts", "bottoms", "spring", "summer"],
  },
  { src: "/clothes/IMG_0844.jpeg", tags: ["top", "summer", "hiking"] },
  {
    src: "/clothes/IMG_0845.jpeg",
    tags: ["pants", "summer", "summer", "bottoms"],
  },
  {
    src: "/clothes/IMG_0846.jpeg",
    tags: ["rainjacket", "jacket", "hiking", "top"],
  },
  {
    src: "/clothes/IMG_0847.jpeg",
    tags: ["top", "kimono", "jacket", "summer", "spring"],
  },
  { src: "/clothes/IMG_0852.jpeg", tags: ["top", "tshirt", "goth"] },
  { src: "/clothes/IMG_0849.jpeg", tags: ["dress", "summer", "spring"] },
  { src: "/clothes/IMG_0850.jpeg", tags: ["dress", "summer", "spring"] },
  { src: "/clothes/IMG_0851.jpeg", tags: ["jumpsuit", "summer", "spring"] },
  { src: "/clothes/IMG_1096.jpeg", tags: ["bottoms", "lounge", "pants"] },
  { src: "/clothes/IMG_1097.jpeg", tags: ["bottoms", "lounge", "pants"] },
  {
    src: "/clothes/IMG_1098.jpeg",
    tags: ["shorts", "bottoms", "spring", "summer", "workout"],
  },
  {
    src: "/clothes/IMG_1099.jpeg",
    tags: ["dress", "summer", "spring", "mini"],
  },
  { src: "/clothes/IMG_1100.jpeg", tags: ["bottoms", "lounge", "pants"] },
  { src: "/clothes/IMG_1101.jpeg", tags: ["bottoms", "skirt", "maxi"] },
  {
    src: "/clothes/IMG_1103.jpeg",
    tags: ["rainjacket", "jacket", "hiking", "top"],
  },
  {
    src: "/clothes/IMG_1104.jpeg",
    tags: ["hiking", "jacket", "winter", "fall"],
  },
  {
    src: "/clothes/IMG_1105.jpeg",
    tags: ["jacket", "fall", "top", "spring", "winter"],
  },
  { src: "/clothes/IMG_1106.jpeg", tags: ["workout", "top", "yoga"] },
  { src: "/clothes/IMG_1107.jpeg", tags: ["workout", "top", "yoga"] },
  { src: "/clothes/IMG_1109.jpeg", tags: ["bag", "accessory"] },
  { src: "/clothes/IMG_1110.jpeg", tags: ["bag", "accessory"] },
].map((item) => {
  return { ...item, id: uuidv4() };
});

export const sections = {
  head: [clothes[1].id, clothes[2].id],
  torso: [clothes[7].id],
  legs: [clothes[4].id],
  feet: [clothes[10].id],
};

export const categories = ["bottoms", "tops", "dress", "jackets", "pants"];
