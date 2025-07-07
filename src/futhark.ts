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

  return {
    name: "Futhark",
    keywords: KEYWORDS,
    contains: [COMMENT],
  };
}
