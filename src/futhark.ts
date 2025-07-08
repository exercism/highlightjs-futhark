/*
Language: Futhark
Description: A high-performance purely functional data-parallel array programming language
Category: scripting
Author: @erikschierboom
Maintainer: @erikschierboom
Website: https://www.futhark.org/
*/

import { type HLJSApi, type Language, type Mode } from "highlight.js";

export default function (hljs: HLJSApi): Language {
  const re = hljs.regex;
  const COMMENT: Mode = hljs.COMMENT("--", "$");

  const KEYWORDS = [
    "assert",
    "case",
    "def",
    "do",
    "else",
    "entry",
    "false",
    "for",
    "if",
    "import",
    "in",
    "include",
    "let",
    "local",
    "loop",
    "match",
    "module",
    "open",
    "then",
    "true",
    "type",
    "val",
    "while",
    "with",
  ];

  const NUMBER = {
    className: "number",
    match:
      /-?(0[xXbB])?((\d[\d_]*)?\.)?\d[\d_]*([fF](16|32|64)|[uUiI](8|16|32|64))?/,
    relevance: 0,
  };

  const STRINGCHAR = /[^\\\n"]/;
  const STRINGLIT = {
    scope: "string",
    match: re.concat('"', re.anyNumberOfTimes(STRINGCHAR), '"'),
  };

  const CHAR = /[^\\\n']/;
  const CHARLIT = {
    scope: "string",
    match: re.concat("'", CHAR, "'"),
  };

  hljs.QUOTE_STRING_MODE;
  return {
    name: "Futhark",
    keywords: KEYWORDS,
    contains: [NUMBER, COMMENT, STRINGLIT, CHARLIT],
  };
}
