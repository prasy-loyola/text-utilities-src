import React, { useState } from "react";
import Box from "styled-minimal/Box";
import Button from "styled-minimal/Button";
import ButtonGroup from "styled-minimal/ButtonGroup";
import Flex from "styled-minimal/Flex";
import Heading from "styled-minimal/Heading";
import Editor from "../editor/Editor";
import Homepage from "../homepage/Homepage";
import Visualize from "../visualize/Visualize";

const Utilities = {
  Editor: {
    component: <Editor></Editor>,
  },
  Visualize: {
    component: <Visualize></Visualize>,
  },
  Compare: {
    component: <div>Coming Soon...</div>,
  },
  Manipulate: {
    component: <div>Coming Soon...</div>,
  },
  About: {
    component: <Homepage></Homepage>,
  },
};

function UtilitiesPage(props) {
  const [state, setstate] = useState({ option: "Editor" });

  const handleClick = (option) => {
    setstate({ ...state, option: option });
  };

  return (
    <Box m={3}>
      <Heading as="h4">
        <Flex>
          <Box>Text Utilites</Box>

          <ButtonGroup px={50}>
            {Object.getOwnPropertyNames(Utilities).map((u) => {
              return (
                <Button
                  key={u}
                  onClick={() => handleClick(u)}
                  bordered={state.option === u}
                  size={"sm"}
                >
                  {u}
                </Button>
              );
            })}
          </ButtonGroup>
        </Flex>
      </Heading>

      <Box textAlign="left" mt={20}>
        {Utilities[state.option].component}
      </Box>
    </Box>
  );
}

export default UtilitiesPage;
