export const FORMAT = {
  JSON: "json",
  XML: "xml",
  YAML: "yaml",
  PLAIN_TEXT: "text",
};

export function getTextFormat(text) {
  if (text) {
    if (text.trim().startsWith("<")) {
      return FORMAT.XML;
    }

    try {
      JSON.parse(text);
      return FORMAT.JSON;
    } catch {}
  }

  return FORMAT.PLAIN_TEXT;
}
