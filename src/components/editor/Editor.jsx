import React, { useState } from "react";
import { setCurrentText, setEditorText } from "../../redux/actions/textActions";
import { getTextFormat } from "../../utilities/textFormat";
import Textarea from "styled-minimal/Textarea";
import Button from "styled-minimal/Button";
import { connect } from "react-redux";
import Form from "styled-minimal/Form";

function Editor({ dispatch, texts }) {
  const [state, setState] = useState({ text: "{}" });

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
      <Form onSubmit={handleClick}>
        <Textarea
          onChange={handleChange}
          defaultValue={texts.editor}
          rows={20}
        ></Textarea>
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
