import { atomWithStorage } from "jotai/utils";

export const currentLights = atomWithStorage("lights", [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedrom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: true },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
]);
