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

  const DECDIGIT = /[0-9]+/;
  const HEXDIGIT = /[0-9a-fA-F]+/;
  const BINDIGIT = /[01]+/;

  const INT_TYPE = /[iu](?:8|16|32|64)/;
  const FLOAT_TYPE = /f(?:16|32|64)/;

  const INTPART = re.concat(
    DECDIGIT,
    re.anyNumberOfTimes(re.either(DECDIGIT, "_"))
  );
  const FRACTION = re.concat(
    ".",
    DECDIGIT,
    re.anyNumberOfTimes(re.either(DECDIGIT, "_"))
  );
  const HEXINTPART = re.concat(
    HEXDIGIT,
    re.anyNumberOfTimes(re.either(HEXDIGIT, "_"))
  );
  const HEXFRACTION = re.concat(
    ".",
    HEXDIGIT,
    re.anyNumberOfTimes(re.either(HEXDIGIT, "_"))
  );
  const EXPONENT = re.concat(/[eE](?:[\+\-]")/, DECDIGIT);
  const HEXADECIMALFLOAT = re.concat(
    /0[xX]/,
    HEXINTPART,
    HEXFRACTION,
    /[pP]/,
    /[+-]?/,
    DECDIGIT
  );
  const EXPONENTFLOAT = re.concat(re.either(INTPART, FRACTION), EXPONENT);
  const POINTFLOAT = re.concat(re.optional(INTPART), FRACTION);
  const FLOATNUMBER = re.concat(
    re.either(POINTFLOAT, EXPONENTFLOAT, HEXADECIMALFLOAT),
    re.optional(FLOAT_TYPE)
  );

  const BINARY = re.concat(
    /0[bB]/,
    BINDIGIT,
    re.anyNumberOfTimes(re.either(BINDIGIT, "_"))
  );
  const HEXADECIMAL = re.concat(
    /0[xX]/,
    HEXDIGIT,
    re.anyNumberOfTimes(re.either(HEXDIGIT, "_"))
  );
  const DECIMAL = re.concat(
    DECDIGIT,
    re.anyNumberOfTimes(re.either(DECDIGIT, "_"))
  );
  const INTNUMBER = re.concat(
    re.either(DECIMAL, HEXADECIMAL, BINARY),
    re.optional(INT_TYPE)
  );

  const LITERAL = {
    className: "literal",
    begin: re.concat(re.either(INTNUMBER, FLOATNUMBER, /true|false/)),
  };

  return {
    name: "Futhark",
    keywords: KEYWORDS,
    contains: [LITERAL, COMMENT],
  };
}
