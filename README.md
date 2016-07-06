# aws-sdk-typescript

## Intro

The AWS SDK for Javascript is quite large and evolves fairly quickly. Attempts to manually create typings for it (such as the [Definitely Typed one](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/aws-sdk)) are incomplete and don't support promises.
 
This project approaches the challenge by using the information in the source JSON interface and Javascript files to generate the typings. Take a look inside the ```output/typings``` folder to see the results for yourself.

## Installation

The simplest way to start using the generated typings is to install them directly from github using [typings](https://github.com/typings/typings).

1. Make sure you have [typings](https://github.com/typings/typings) installed: 
  ```
  npm install typings --global
  ```

2. Make sure your project is set up to reference your typings `typings/index.d.ts` file in your `tsconfig.json` or as a `///` reference.

3. Install the latest aws-sdk-typescript from github using: 
  ```
  typings i aws-sdk=github:ingenieux/aws-sdk-typescript#HEAD --save -G
  ```





