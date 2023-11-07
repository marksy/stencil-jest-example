import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { inlineSvg } from 'stencil-inline-svg';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssHasPseudo from 'css-has-pseudo';

const { distDirs } = require('./package.json');

export const config: Config = {
    namespace: 'tui',
    buildEs5: 'prod',
    taskQueue: 'async',
    globalStyle: 'src/global.css',
    devServer: {
        reloadStrategy: 'hmr',
        openBrowser: false,
    },
    plugins: [
        inlineSvg(),
        sass(),
        postcss({
            plugins: [autoprefixer(), postcssHasPseudo()],
        }),
    ],
    outputTargets: [
        // creates /dist dir
        {
            type: 'dist',
            dir: distDirs.stencil,
        },
        // one file in es6
        {
            type: 'dist-custom-elements',
            dir: distDirs.stencil,
        },
        {
            type: 'docs-readme',
            footer: '',
        },
        // create components(.d.ts|json) into dist
        {
            type: 'docs-json',
            file: `${distDirs.stencil}/components.json`,
        },
        reactOutputTarget({
            componentCorePackage: '../types',
            proxiesFile: `${distDirs.stencil}/react/index.ts`,
        }),
    ],
    testing: {
        // args passed to chromium when puppeteer launches a browser instance
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
        testPathIgnorePatterns: ['./.scripts', './dist-storybook', './dist-stencil'],
        moduleNameMapper: {
            // Jest can't deal with ES6 modules, so tell it to use `lodash` instead of `lodash-es` during tests
            '^lodash-es$': 'lodash',
        },
    },
};
