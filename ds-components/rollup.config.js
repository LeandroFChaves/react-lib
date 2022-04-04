import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import dts from 'rollup-plugin-dts';
import babel from "rollup-plugin-babel";

const packageJson = require('./package.json');
const extensions = [".js", ".jsx", ".ts", ".tsx", ".css", "scss"];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        name: 'react-ts-lib',
        format: "cjs",
        sourcemap: true,
        //preserveModules: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        //preserveModules: true
      },
    ],
    plugins: [
      postcss({modules: true}),
      babel({
        extensions,
        include: ["src/*"],
        exclude: "node_modules/**",
        babelrc: true
      }),
      commonjs(),
      peerDepsExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/]
  }
];