import {nodeResolve} from "@rollup/plugin-node-resolve"

export default {
  input: "./src/parser.js",
  output: [
    { format: "cjs", file: "./dist/index.cjs" },
    { format: "es", file: "./dist/index.mjs" }
  ],
  external(id) {
    return !/^[\.\/]/.test(id)
  },
  plugins: [
    nodeResolve()
  ]
}
