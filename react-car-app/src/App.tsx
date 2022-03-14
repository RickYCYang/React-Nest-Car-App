import React from "react";
import "./App.css";
import HomePage from "app/containers/HomePage";
import styled from "styled-components";
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
