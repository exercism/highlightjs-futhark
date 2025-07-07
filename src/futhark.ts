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

  return {
    name: "Futhark",
    contains: [COMMENT],
  };
}
