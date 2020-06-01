import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

const CDN_URL = process.env.CDN_URL
const CDN_HOST = CDN_URL || "https://cdn.jsdelivr.net/npm/khalti-checkout-web@latest/public"

export default {
  input: 'src/index.js',
  output: {
    file: 'public/khalti-checkout.es.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      __CDN_HOST__: JSON.stringify(CDN_HOST)
    })
  ]
};