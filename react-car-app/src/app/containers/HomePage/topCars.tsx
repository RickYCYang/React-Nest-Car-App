import React, { Dispatch, useEffect, useState } from "react";
import { Action, createSelector } from "@reduxjs/toolkit";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "typings/car";
import Car from "app/components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "app/components/responsive";
import carService from "app/services/carService";
import { GetCars_cars } from "app/services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selector";
import MoonLoader from "react-spinners/MoonLoader";

const TopCarsContaier = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    md:px-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const EmptyCars = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-full
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-full
    mt-9
    text-base
    text-black
  `}
`;

const actionDispatch = (dispatch: Dispatch<Action>) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

const TopCars = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [isLoading, setLoading] = useState(false);

  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.error("Error: ", err);
    });
    if (cars) setTopCars(cars);
    //await wait(5000); // set timeout to test loading panel
    setLoading(false);
  };
  const { setTopCars } = actionDispatch(useDispatch());
  const { topCars } = useSelector(stateSelector);

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;
  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];

  const numberOfDots = isMobile
    ? topCars.length
    : Math.ceil(topCars.length / 3);

  return (
    <TopCarsContaier>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={40} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars to Show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              /// width is less than 900
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
              /// width is less than 640
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContaier>
  );
};

export default TopCars;

const testCar1: ICar = {
  name: "Audi S3 Car",
  mileage: "10k",
  thumbnailSrc:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar2: ICar = {
  name: "HONDA cITY 5 Seater Car",
  mileage: "20k",
  thumbnailSrc:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

const testCars = [
  <Car {...testCar1} />,
  <Car {...testCar2} />,
  <Car {...testCar1} />,
  <Car {...testCar2} />,
  <Car {...testCar1} />,
];
