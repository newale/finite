import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
  ]
};
