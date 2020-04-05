import React, { useState } from "react";
import { Container } from "styled-minimal";
import Button from "styled-minimal/Button";
import Heading from "styled-minimal/Heading";
import Box from "styled-minimal/Box";
import { connect } from "react-redux";
import * as jsonActions from "./../../redux/actions/jsonActions";

import Textarea from "styled-minimal/Textarea";

function Homepage(props) {
  const [state, setState] = useState({ json: "{}" });

  const handleClick = (e) => {
    props.dispatch(jsonActions.setJson1(state.json));
  };

  const handleChange = (e) => {
    setState({ ...state, json: e.target.value });
  };

  return (
    <Container>
      <Heading>Hello</Heading>
      <Box mx="auto" />
      <Textarea onChange={handleChange}></Textarea>
      <Button onClick={handleClick}>Click Me</Button>
      <Box>{state.json}</Box>
      <Box>{props.jsons.json1}</Box>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    jsons: state.jsons,
  };
}

export default connect(mapStateToProps)(Homepage);
