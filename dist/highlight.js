import {styleTags, tags as t} from "@lezer/highlight"

export const jsonHighlighting = styleTags({
  String: t.string,
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  LineComment: t.lineComment,
  BlockComment: t.blockComment,
  ",": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace
})
