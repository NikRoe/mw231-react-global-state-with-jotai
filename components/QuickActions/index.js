import styled from "styled-components";
import Button from "../Button";
import { useLights } from "../../hooks/useLights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const { handleLightOff, handleLightOn } = useLights();

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
