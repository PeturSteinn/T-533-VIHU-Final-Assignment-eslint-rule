import { test } from "vitest";
var rule = require("./no-moment");

var RuleTester = require("eslint").RuleTester;

test("no-moment", () => {
  var ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  });
  // var ruleTester = new RuleTester();

  ruleTester.run("no-moment", rule, {
    valid: [
      {
        code: "import React from 'react';",
      },
    ],
    invalid: [
      {
        code: "import moment from 'moment';",
        errors: [
          {
            message: "The use of Moment.js library is forbidden.",
            type: "ImportDeclaration",
          },
        ],
      },
    ],
  });
});
