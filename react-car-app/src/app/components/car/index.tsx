import {
  faEllipsis,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "typings/car";
import Button from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  &:hover {
    transform: translateY(-1em);
  }
  ${tw`
    w-[16.5em]
    h-[23em]
    shadow-3xl
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
    duration-500
  `}
`;

const CarThumbnail = styled.div`
  ${tw`
    w-full
    h-auto
  `}

  img {
    ${tw`
      w-full
      h-full
    `}
  }
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
  `}
`;

const PriceContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline
    text-xs
    font-thin
  `}
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const CarDetailsContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-between
  `}
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Seperator = styled.div`
  ${tw`
    min-w-full
    min-h-[1px]
    flex
    bg-gray-300
    my-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

const Car = (props: ICarProps) => {
  const {
    thumbnailSrc,
    name,
    mileage,
    gearType,
    dailyPrice,
    monthlyPrice,
    gas,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="thumbnailSrc" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PriceContainer>
        <DailyPrice>
          $ {dailyPrice} <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          $ {monthlyPrice} <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PriceContainer>
      <Seperator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsis} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
};

export default Car;
