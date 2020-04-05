import React from "react";
import { Container } from "styled-minimal";
import Paragraph from "styled-minimal/Paragraph";
import Alert from "styled-minimal/Alert";
import Box from "styled-minimal/Box";

function Homepage(props) {
  return (
    <Box alignContent={"center"} textAlign={"center"} width={0.8}>
      <Alert
        size="lg"
        width={0.8}
        variant={"secondary"}
        textAlign="left"
        display={"inline-block"}
      >
        <Paragraph>
          Lots of time during software development we have to visualize,
          manipulate or query different kinds of structured data.
        </Paragraph>
        <Paragraph>
          But, finding the tools which are approved to use inside a corporate
          organisation is a pain.
        </Paragraph>
        <Paragraph>
          A valid concern of the organisation is data security. When you use an
          online tool, there is always a concern that the site may send data out
          of the browser to the server in the background.
        </Paragraph>
        <Paragraph size={"lg"}>
          To make sure this set of utilities in this site doesn't send anything
          to a server, this is hosted as a github.io site, which doesn't host
          any server for processing requests.
        </Paragraph>
        <Paragraph>
          As it only serves static files from a repo, this can assure that the
          data is safe and doesn't leave your browser.
        </Paragraph>
      </Alert>
    </Box>
  );
}

export default Homepage;
