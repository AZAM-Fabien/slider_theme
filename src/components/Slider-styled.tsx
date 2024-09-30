import styled from "styled-components";

export const MainContainer = styled.div<{ $themechoice: string }>`
  position: relative;
  width: 240px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
  background-color: ${(props) =>
    props.$themechoice === "true" ? "#1B1D2D" : "#3176B7"};
  transition: background-color 0.8s ease-out;

  &:hover {
    cursor: pointer;
  }
`;

export const Sun = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8bf21;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
export const Moon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c2c9d0;
  box-shadow: inset -2px -2px 10px rgba(0, 0, 0, 0.12);
  transition: left 0.8s ease-out;
`;

const MoonCrater = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #929fb2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const MoonCrater1 = styled(MoonCrater)`
  top: 56%;
  left: 32%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
`;

export const MoonCrater2 = styled(MoonCrater)`
  top: 24%;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
`;

export const MoonCrater3 = styled(MoonCrater)`
  top: 80%;
  left: 66%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
`;

const circle = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  mix-blend-mode: lighten;
  filter: blur(4px);
`;

export const Circle1 = styled(circle)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.2;
`;

export const Circle2 = styled(circle)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  opacity: 0.1;
`;

export const Circle3 = styled(circle)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  opacity: 0.05;
`;

export const Star = styled.img`
  position: absolute;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.3));
`;

export const Cloud = styled.div`
  position: absolute;
  border-radius: 50%;
`;
