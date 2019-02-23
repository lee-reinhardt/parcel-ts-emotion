# parcel-ts-emotion

Example use of [Emotion 10](https://github.com/emotion-js/emotion) using the [Parcel](https://github.com/parcel-bundler/parcel) bundler and [Babel Typescript](https://github.com/babel/babel/tree/master/packages/babel-preset-typescript).

## Summary

Brief summary of the necessary configs/workarounds.

- Explicitly install `@babel/core` to ensure Babel 7 ([ref](https://medium.com/@devongovett/parcel-v1-10-0-babel-7-flow-elm-and-more-c20736553573)).
- Ensure `tsconfig.json` uses `"jsx": "preserve"` ([ref](https://github.com/parcel-bundler/parcel/issues/1590)).
- Use `babel-plugin-transform-inline-environment-variables` to prevent `process it not defined` error ([ref](https://github.com/emotion-js/emotion/issues/1132)).
- Achieve `@emotion/babel-preset-css-prop` functionality by re-creating its config with individual plugins, rather than the preset ([ref](https://github.com/emotion-js/emotion/issues/1132#issuecomment-450701134)).
