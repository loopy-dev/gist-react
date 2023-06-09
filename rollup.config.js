import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd',
    },
  ],
  external: [/node_modules/],
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      include: ['src/**/*'],
    }),
    commonjs({ include: 'node_modules/**' }),
    PeerDepsExternalPlugin(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
