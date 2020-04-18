import React from "react";
import { connect } from "react-redux";
import Box from "styled-minimal/Box";
import Button from "styled-minimal/Button";
import Flex from "styled-minimal/Flex";
import { setCurrentText } from "../../redux/actions/textActions";
import { FORMAT } from "../../utilities/textFormat";
import JsonViewer from "../json/JsonViewer";
import XMLViewer from "../xml/XMLViewer";
import Text from "styled-minimal/Text";

function Visualize({ dispatch, texts }) {
  return (
    <>
      <VisualizeView current={texts.current} showQuery></VisualizeView>
      <Box mt={50}></Box>
      <Text fontSize={2}>History</Text>
      <Box style={{ display: "block" }}>
        {texts.history.map((t, i) => (
          <Flex key={i}>
            <Button onClick={() => dispatch(setCurrentText(t))} size={"xs"}>
              Load {i + 1}
            </Button>{" "}
            <VisualizeView current={t}></VisualizeView>{" "}
          </Flex>
        ))}
      </Box>
    </>
  );
}

function VisualizeView({ current, showQuery }) {
  console.log("VisualizeView -> showQuery", showQuery);
  console.log("VisualizeView -> current", current);
  return (
    <Box alignSelf="left" alignItems="left" alignContent="0">
      {current.format === FORMAT.JSON && (
        <JsonViewer text={current.text} showQuery={showQuery}></JsonViewer>
      )}
      {current.format === FORMAT.XML && (
        <XMLViewer text={current.text} showQuery={showQuery}></XMLViewer>
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
