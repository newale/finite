import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [
    'styled-components',
    'react',
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({ 
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
  ],
};