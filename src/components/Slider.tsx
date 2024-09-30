import { useState } from "react";
import * as S from "./Slider-styled";
import "./Slider.css";

function Slider({ toggleTheme }: { toggleTheme: () => void }) {
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = () => {
    toggleTheme();
    setIsMoved(!isMoved);
  };

  return (
    <S.MainContainer onClick={handleClick} $themechoice={isMoved.toString()}>
      <S.Sun className={isMoved ? "sun-right" : "sun-left"}>
        <S.Moon className={isMoved ? "moon-right" : "moon-left"}>
          <S.MoonCrater1></S.MoonCrater1>
          <S.MoonCrater2></S.MoonCrater2>
          <S.MoonCrater3></S.MoonCrater3>
        </S.Moon>
      </S.Sun>
      <S.Circle1 className={isMoved ? "sun-right" : "sun-left"}></S.Circle1>
      <S.Circle2 className={isMoved ? "sun-right" : "sun-left"}></S.Circle2>
      <S.Circle3 className={isMoved ? "sun-right" : "sun-left"}></S.Circle3>
      {[...Array(12)].map((_, i) => {
        const widthHeight = `${Math.min(
          80,
          Math.max(1, Math.floor(Math.random() * 8))
        )}`;
        const top = `${Math.min(
          90,
          Math.max(10, Math.floor(Math.random() * 90))
        )}%`;
        const left = `${Math.min(
          70,
          Math.max(10, Math.floor(Math.random() * 70))
        )}%`;
        return (
          <S.Star
            key={i}
            className={isMoved ? "visible" : "invisible"}
            src="star.svg"
            alt="star"
            style={{
              width: `${widthHeight}px`,
              height: `${widthHeight}px`,
              top,
              left,
            }}
          />
        );
      })}
      {[...Array(8)].map((_, i) => {
        const index: number = [2, 5, 2, 5, 2, 5, 2, 5][i];
        const size: number = [80, 50, 50, 30, 20, 60, 80, 40][i];
        const bottom: number = [-20, -15, -7, 12, 25, -33, -47, -27][i];
        const right: number = [-20, -1, 50, -12, 45, 27, 62, 71][i];
        const color: string = [
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
          "#96B8EE",
          "#F8F9FD",
        ][i];
        return (
          <S.Cloud
            key={i}
            className={isMoved ? "invisible" : "visibleCloud"}
            style={{
              zIndex: `${index}`,
              width: `${size}px`,
              height: `${size}px`,
              bottom: `${bottom}px`,
              right: `${right}px`,
              backgroundColor: `${color}`,
            }}
          />
        );
      })}
    </S.MainContainer>
  );
}

export default Slider;
