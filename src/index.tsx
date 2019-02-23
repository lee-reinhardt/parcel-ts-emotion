import React from "react";
import { render } from "react-dom";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f5f5f5;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

const HotMessage = styled.div`
  width: 100%;
  height: 140px;
  margin: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 2rem;
  background-color: hotpink;
`;

interface AppProps {
  foo: number;
}

const App: React.FC<AppProps> = () => (
  <React.Fragment>
    <GlobalStyles />

    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      `}
    >
      <HotMessage>it works</HotMessage>
    </div>
  </React.Fragment>
);

render(<App foo={123} />, document.getElementById("root"));
