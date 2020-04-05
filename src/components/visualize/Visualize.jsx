import React, { useState } from "react";
import Box from "styled-minimal/Box";
import { connect } from "react-redux";
import Textarea from "styled-minimal/Textarea";
import Button from "styled-minimal/Button";
import { setCurrentText } from "../../redux/actions/textActions";
import { getTextFormat, FORMAT } from "../../utilities/textFormat";
import JsonViewer from "../json/JsonViewer";
import Flex from "styled-minimal/Flex";

function Visualize({ dispatch, texts }) {
  const [state, setState] = useState({ text: "{}" });

  const handleClick = (e) => {
    dispatch(setCurrentText(state.text, getTextFormat(state.text)));
  };

  const handleChange = (e) => {
    setState({ ...state, text: e.target.value });
  };

  return (
    <>
      {/* <Textarea onChange={handleChange}>{texts.current.text}</Textarea>
      <Button onClick={handleClick}>Click Me</Button> */}
      <VisualizeView current={texts.current}></VisualizeView>
      <Box mt={50}></Box>
      History
      {texts.history.map((t, i) => (
        <Flex>
          {i + 1}.<VisualizeView key={i} current={t}></VisualizeView>{" "}
          <Button onClick={() => dispatch(setCurrentText(t))} size={"xs"}>
            Load
          </Button>
        </Flex>
      ))}
    </>
  );
}

function VisualizeView({ current }) {
  return (
    <Box alignSelf="left" alignItems="left" alignContent="0">
      {current.format === FORMAT.JSON && (
        <JsonViewer text={current.text}></JsonViewer>
      )}
      {current.format === FORMAT.PLAIN_TEXT && <Box>{current.text}</Box>}
    </Box>
  );
}

function mapStateToProps(state) {
  return {
    texts: state.texts,
  };
}

export default connect(mapStateToProps)(Visualize);
