import buble from "rollup-plugin-buble";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const input = "src/index.js";

export default [
  {
    input,
    plugins: [nodeResolve()],
    output: [
      {
        file: "dist/jsts.min.js",
        format: "umd",
        name: "jsts",
        sourcemap: true,
        plugins: [buble(), terser()],
      },
    ],
  },
];
