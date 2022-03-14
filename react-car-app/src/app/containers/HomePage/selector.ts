import { createSelector } from "@reduxjs/toolkit";
import { IRootAppState } from "typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (homePage) => homePage.topCars
);
