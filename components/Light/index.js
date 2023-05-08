import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLights } from "../../hooks/useLights";

export default function Light({ name, id, isOn }) {
  const { handleToggle } = useLights();

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
