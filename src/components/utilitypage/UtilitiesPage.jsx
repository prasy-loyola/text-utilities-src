import React, { useState } from "react";
import Box from "styled-minimal/Box";
import Button from "styled-minimal/Button";
import ButtonGroup from "styled-minimal/ButtonGroup";
import Flex from "styled-minimal/Flex";
import Heading from "styled-minimal/Heading";
import Visualize from "../visualize/Visualize";
import Editor from "../editor/Editor";
import Paragraph from "styled-minimal/Paragraph";

const VISUALIZE = "VISUALIZE";
const QUERY = "QUERY";
const COMPARE = "COMPARE";
const MANIPULATE = "MANIPULATE";
const EDITOR = "EDITOR";

function UtilitiesPage(props) {
  const [state, setstate] = useState({ option: EDITOR });

  const handleClick = (option) => {
    setstate({ ...state, option: option });
  };

  return (
    <Box m={2}>
      <Heading as="h4">
        <Flex>
          <Box>Text Utilites</Box>

          <ButtonGroup px={50}>
            <Button
              id={EDITOR}
              onClick={() => handleClick(EDITOR)}
              bordered={state.option === EDITOR}
            >
              Editor
            </Button>
            <Button
              id={VISUALIZE}
              onClick={() => handleClick(VISUALIZE)}
              bordered={state.option === VISUALIZE}
            >
              Visualize
            </Button>
            <Button
              id={QUERY}
              onClick={() => handleClick(QUERY)}
              bordered={state.option === QUERY}
            >
              Query
            </Button>
            <Button
              id={COMPARE}
              onClick={() => handleClick(COMPARE)}
              bordered={state.option === COMPARE}
            >
              Compare
            </Button>
            <Button
              id={MANIPULATE}
              onClick={() => handleClick(MANIPULATE)}
              bordered={state.option === MANIPULATE}
            >
              Manipulate
            </Button>
          </ButtonGroup>
        </Flex>
      </Heading>
      <Box textAlign="left" mt={20}>
        {state.option === VISUALIZE && <Visualize></Visualize>}
        {state.option === EDITOR && <Editor></Editor>}
        {state.option === QUERY && "Coming Soon.."}
        {state.option === COMPARE && "Coming Soon.."}
        {state.option === MANIPULATE && "Coming Soon.."}
      </Box>
    </Box>
  );
}

export default UtilitiesPage;
