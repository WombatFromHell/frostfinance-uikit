import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  plugins: [image(), typescript()],
};
