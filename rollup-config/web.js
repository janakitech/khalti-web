import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const CDN_HOST = process.env.CDN_HOST

if (!CDN_HOST) {
  console.error('No CDN_HOST provided');
}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/khalti-checkout.iffe.js',
    format: 'iife',
    name: 'KhaltiCheckout'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    replace({
      __CDN_HOST__: JSON.stringify(CDN_HOST)
    }),
    uglify()
  ]
};
