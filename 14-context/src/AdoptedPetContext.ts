import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 0,
    name: "a",
    animal: "dog",
    description: "a",
    breed: "a",
    images: [],
    city: "a",
    state: "a",
  },
  () => {},
]);

export default AdoptedPetContext;
