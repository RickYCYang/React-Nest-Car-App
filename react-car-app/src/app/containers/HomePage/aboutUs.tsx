import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import JeepImg from "assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `}
`;

const CarContainer = styled.div`
  ${tw`
    w-auto
    h-[15em]
    md:h-[28em]
    lg:h-[30em]
    2xl:h-[35em]
    xl:ml-0
  `}
  img {
    ${tw`
      w-auto
      h-full
    `}
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-gray-500
    text-sm
    md:text-base
    font-normal
    mt-4
  `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="jeep.png" />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          corporis corrupti, minima dolorum beatae laudantium. Minima, neque
          dolorum hic et illo cupiditate aspernatur obcaecati voluptatibus
          molestias eveniet animi labore nostrum quidem non minus rerum aliquam!
          Quibusdam commodi cumque enim ea, neque omnis aut atque praesentium
          impedit? Ipsa temporibus veritatis, repudiandae eum reprehenderit,
          vero accusantium deserunt velit, quam nostrum vitae incidunt?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
