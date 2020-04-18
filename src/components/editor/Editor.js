import React, { useState } from "react";
import { setCurrentText, setEditorText } from "../../redux/actions/textActions";
import { getTextFormat } from "../../utilities/textFormat";
import Textarea from "styled-minimal/Textarea";
import Button from "styled-minimal/Button";
import { connect } from "react-redux";
import Form from "styled-minimal/Form";
import AceEditor from "react-ace";
function Editor({ dispatch, texts }) {
  const [state, setState] = useState({ text: texts.editor });

  const handleClick = (e) => {
    dispatch(
      setCurrentText({ text: state.text, format: getTextFormat(state.text) })
    );
  };

  const handleChange = (e) => {
    setState({ ...state, text: e.target.value });
    dispatch(setEditorText(e.target.value));
  };

  return (
    <>
      <Form onSubmit={handleClick} fontSize={0}>
        <AceEditor
          placeholder="XML"
          // mode="xml"
          theme="monokai"
          name="blah2"
          fontSize={14}
          showPrintMargin={true}
          onChange={handleChange}
          showGutter={true}
          highlightActiveLine={true}
          value={texts.editor}
          width={"100%"}
          wrapEnabled={true}
          style={{ minWidth: "30vw" }}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        ></AceEditor>
        {/* <Textarea
          onChange={handleChange}
          defaultValue={texts.editor}
          rows={20}
          size="sm"
        ></Textarea> */}
        <Button onClick={handleClick}>Load Text</Button>
      </Form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    texts: state.texts,
  };
}

export default connect(mapStateToProps)(Editor);
