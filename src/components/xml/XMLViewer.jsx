import React, { useState } from "react";
import Box from "styled-minimal/Box";
import Flex from "styled-minimal/Flex";
import Input from "styled-minimal/Input";
import { DOMParser as dom } from "xmldom";
import xpath from "xpath";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/xml";
// import "ace-builds/webpack-resolver";

function XMLView({ text, showQuery }) {
  const [state, setState] = useState({
    namespace: "",
    xpath: ".",
    result: text,
  });

  const evaluateXpath = (xpathText, namespaceText) => {
    let select = xpath.select;
    if (namespaceText !== "") {
      const namespaces = namespaceText.split(",");
      const namespaceObj = {};
      for (let index = 0; index < namespaces.length; index++) {
        const element = namespaces[index];
        namespaceObj[element.split("=")[0]] = element.split("=")[1];
      }

      select = xpath.useNamespaces(namespaceObj);

      const result = select(xpathText, new dom().parseFromString(text));
      console.log(result);
      if (result.length === 0) {
        throw new Error("test");
      }
      return result.map((s) => s.toString()).join("\n");
    }

    const result = select(
      xpathText,
      new dom().parseFromString(text),
      null, // namespaceResolver
      xpath.XPathResult.STRING_TYPE, // resultType
      null
    );
    console.log(result);
    if (result.length === 0) {
      throw new Error("test");
    }
    return result.map((s) => s.toString()).join("\n");
  };

  const setNamespace = (e) => {
    let result = state.result;
    try {
      result = evaluateXpath(state.xpath, e.target.value);
    } catch {}
    setState({
      ...state,
      namespace: e.target.value,
      result,
    });
  };

  const setXpath = (e) => {
    let result = state.result;
    try {
      result = evaluateXpath(e.target.value, state.namespace);
    } catch {}

    setState({
      ...state,
      xpath: e.target.value,
      result,
    });
  };

  return (
    <div>
      {showQuery && (
        <Flex>
          <Input size={"sm"} onChange={setXpath} placeholder="xpath"></Input>
          <Input
            size={"sm"}
            onChange={setNamespace}
            placeholder="namespace serparated by comma"
          ></Input>
        </Flex>
      )}
      <Flex>
        {/* onLoad={this.onLoad}
onChange={this.onChange} */}
        <Box width={1 / (showQuery ? 2 : 1)}>
          <AceEditor
            placeholder="XML"
            mode="xml"
            theme="monokai"
            name="blah2"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={text}
            width={"100%"}
            setOptions={{
              showLineNumbers: true,
              tabSize: 2,
            }}
          />

          {/* <XMLViewer xml={text} />               //   onLoad={this.onLoad}
              //   onChange={this.onChange} */}
        </Box>
        {showQuery && (
          <Box width={1 / 2}>
            <AceEditor
              placeholder="XML"
              mode="xml"
              theme="monokai"
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={state.result + ""}
              width={"100%"}
              setOptions={{
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
            {/* <XMLViewer xml={state.result + ""} /> */}
          </Box>
        )}
      </Flex>
    </div>
  );
}

export default XMLView;
