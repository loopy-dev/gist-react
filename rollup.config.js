import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [/node_modules/, /examples/],
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
    typescript({
      tsconfig: './tsconfig.json',
    }),
    cleanup(),
  ],
};
