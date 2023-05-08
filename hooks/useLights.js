import { useAtom } from "jotai";
import { currentLights } from "../store/lights";

export function useLights() {
  const [lights, setLights] = useAtom(currentLights);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  function handleLightOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  function handleLightOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  const activeLights = lights.filter((light) => light.isOn === true).length;

  return { lights, handleLightOff, handleLightOn, handleToggle, activeLights };
}
