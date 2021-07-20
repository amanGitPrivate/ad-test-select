import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from '@rollup/plugin-image'

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: {
    main: "src/index.ts",
  },
  output: [
    {
      dir: "dist/esm",
      format: "es",
      sourcemap: true,
      exports: "auto",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    }
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    image(),
    babel({
      extensions,
      babelHelpers: "runtime",
      include: ["src/**"],
      exclude: "**/node_modules/**",
      sourceMaps: true,
      compact: true,
      minified: true,
      comments: false,
      skipPreflightCheck: true,
    }),
  ],
  external: ["react", "react-dom"],
};
