import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "app/components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    w-full
    pt-16
    pb-10
    md:pt-16
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    h-full
    max-w-screen-2xl
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    flex
    justify-center
    mt-16
    px-12
    md:px-3
  `}
`;

const CopyrightText = styled.small`
  ${tw`
    text-xs
    text-gray-400
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    px-12
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-xs
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    px-12
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-sm
      text-white
      hover:text-red-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    mb-3
    text-2xl
    font-bold
    text-white
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    bg-red-500
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            contries accross the world which has high quality cars and top rated
            service
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+886 123-456-789</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>rickyang2910@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Rick. All rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
