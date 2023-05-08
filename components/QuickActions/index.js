import styled from "styled-components";
import Button from "../Button";
import { useAtom } from "jotai";
import { currentLights } from "../../store/lights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const [lights, setLights] = useAtom(currentLights);

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

  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleLightOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={handleLightOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
