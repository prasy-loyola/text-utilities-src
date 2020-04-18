import jsonpath from "jsonpath";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import Box from "styled-minimal/Box";
import Flex from "styled-minimal/Flex";
import Input from "styled-minimal/Input";

const classes = {
  jsonViewer: {
    display: "block",
    maxHeight: "80vh",
    minHeight: "5vh",
    overflow: "auto",

    // height: "80vh",
  },
};

function JsonViewer({ text, showQuery }) {
  const src = JSON.parse(text);
  const [state, setState] = useState({ query: "$", result: src });

  const handleChange = (e) => {
    let result = [];
    try {
      result = jsonpath.query(src, e.target.value);
    } catch {}
    setState({
      query: e.target.value,
      result,
    });
  };

  return (
    <>
      {showQuery && (
        <Input
          size={"sm"}
          defaultValue={state.query}
          onChange={handleChange}
          placeholder="query"
        ></Input>
      )}

      <Flex style={{ height: "90%" }}>
        <Box width={1 / (showQuery ? 2 : 1)} style={classes.jsonViewer}>
          <ReactJson
            theme="monokai"
            src={src}
            onEdit={() => true}
            onAdd={() => true}
            onDelete={() => true}
            name={false}
            collapsed={showQuery ? 3 : 1}
            displayDataTypes={false}
          ></ReactJson>
        </Box>
        <Box mx={1}></Box>
        {showQuery && (
          <Box width={1 / 2} style={classes.jsonViewer}>
            <ReactJson
              theme="monokai"
              src={state.result}
              onEdit={() => true}
              onAdd={() => true}
              onDelete={() => true}
              name={false}
              collapsed={3}
              displayDataTypes={false}
            ></ReactJson>
          </Box>
        )}
      </Flex>
    </>
  );
}

export default JsonViewer;
