import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "app/components/logo";
import NavItems from "./navItems";

const NavbarContainer = styled.div`
  ${tw`
    w-full
    min-h-[68px]
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:px-12
    justify-between
  `}
`;

export default function Nabvar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
    </NavbarContainer>
  );
}
