import React from "react";
import ReactJson from "react-json-view";

function JsonViewer({ text }) {
  return (
    <div>
      <ReactJson
        src={JSON.parse(text)}
        onEdit={() => true}
        onAdd={() => true}
        onDelete={() => true}
        name={false}
      ></ReactJson>
    </div>
  );
}

export default JsonViewer;
