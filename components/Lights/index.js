import styled from "styled-components";
import Light from "../Light";
import { useAtom } from "jotai";
import { currentLights } from "../../store/lights";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const [lights] = useAtom(currentLights);

  return (
    <StyledLights>
      {lights.map((light) => {
        return (
          <li key={light.id}>
            <Light name={light.name} id={light.id} isOn={light.isOn} />
          </li>
        );
      })}
    </StyledLights>
  );
}
