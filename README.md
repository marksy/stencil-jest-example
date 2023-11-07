# README

This is a small repo to show an example of Stencil `4.7.0` and Jest `29.5.7` showing the following type/build failure. 

I upgraded my project (from StencilJS `4.2.x` & Jest `27.x`) to use Stencil `4.7.0` & Jest `29.5.7` (and associated types) and now when I run stencil build I get a Typescript error:

    TypeScript: node_modules/@stencil/core/testing/jest/jest-stencil-connector.d.ts:81:31
           Could not find a declaration file for module '@jest/types/build/Config'.
           '/Users/mark.chambers/Sites/timely/TimelyApp/Timely.UI/node_modules/@jest/types/build/Config.js' implicitly
           has an 'any' type.If the '@jest/types' package actually exposes this module, try adding a new declaration
           (.d.ts) file containing `declare module '@jest/types/build/Config';`

     L80:  coverageProvider: "v8" | "babel";
     L81:  coverageReporters: import("@jest/types/build/Config").CoverageReporters;
     L82:  coverageThreshold: {

Discord message: https://discord.com/channels/520266681499779082/1170864699361996830/1170864699361996830

## How to reproduce

1. yarn install
2. yarn start (runs `stencil build --dev --watch --serve --port 2003`)

## Notice

- The script `yarn start` shows an error in the console as per the failure example above.

## Expect

- The script `yarn start` should succeed.

## Notes

- The script `yarn build` fails as above.
- The script `yarn test` succeeds without error.
- The script `yarn test:coverage` also succeeds without error.