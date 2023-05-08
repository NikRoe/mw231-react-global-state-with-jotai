import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useAtom } from "jotai";
import { currentLights } from "../../store/lights";

export default function Light({ name }) {
  const [lights, setLights] = useAtom(currentLights);

  const { id, isOn } = lights.find((light) => light.name === name);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
