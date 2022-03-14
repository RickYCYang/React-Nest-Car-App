import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import CarLogoImage from "assets/images/car-logo.png";
import CarLogoDarkImage from "assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div<{ color?: string }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
  ${({ color }) =>
    color === "white"
      ? css`
          ${tw`text-white`}
        `
      : css`
          ${tw`text-black`}
        `}
`;

const Image = styled.div`
  ${tw`
    h-6
    md:h-9
    w-auto
  `}
  img {
    ${tw`
      w-auto
      h-full
    `}
  }
`;

export default function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDarkImage : CarLogoImage} />
      </Image>
      <LogoText color={color}>YourCar.</LogoText>
    </LogoContainer>
  );
}
