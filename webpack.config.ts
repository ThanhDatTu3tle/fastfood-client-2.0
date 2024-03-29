import Dotenv from "dotenv-webpack";
import CircularDependencyPlugin from 'circular-dependency-plugin';

module.exports = {
  entry: "./src/index",
  plugins: [
    new Dotenv({
      path: "./some.other.env", // default is .env
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.ts|node_modules/,
      // include specific files based on a RegExp
      include: /dir/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
};

