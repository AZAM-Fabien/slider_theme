import { useState } from "react";
import * as S from "./Slider-styled";
import "./Slider.css";
import { useMemo } from "react";

function Slider({ toggleTheme }: { toggleTheme: () => void }) {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [starPositions, setStarPositions] = useState<
  { widthHeight: string; top: string; left: string }[]
>([]);

  const handleClick = () => {
    toggleTheme();
    setIsMoved(!isMoved);
    setCount(count + 1);
  };

  useMemo(() => {
    if (count % 2 !== 0) {
      const newStarPositions = Array.from({ length: 12 }, () => {
        return {
          widthHeight: `${Math.min(
            80,
            Math.max(1, Math.floor(Math.random() * 8))
          )}`,
          top: `${Math.min(90, Math.max(10, Math.floor(Math.random() * 90)))}%`,
          left: `${Math.min(70, Math.max(10, Math.floor(Math.random() * 70)))}%`,
        };
      });
      setStarPositions(newStarPositions);
    }
  }, [count]);

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
      {starPositions.map((star, i) => (
        <S.Star
          key={i}
          className={isMoved ? "visible" : "invisible"}
          src="star.svg"
          alt="star"
          style={{
            width: `${star.widthHeight}px`,
            height: `${star.widthHeight}px`,
            top: star.top,
            left: star.left,
          }}
        />
      ))}
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
            style={{
              zIndex: `${index}`,
              width: `${size}px`,
              height: `${size}px`,
              bottom: `${bottom + (isMoved ? -80 : 0)}px`,
              right: `${right}px`,
              backgroundColor: `${color}`,
              transition: "bottom 0.6s ease-in-out",
            }}
          />
        );
      })}
    </S.MainContainer>
  );
}

export default Slider;
