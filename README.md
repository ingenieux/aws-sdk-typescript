# aws-sdk-typescript

## Intro

The AWS SDK for Javascript is quite large and evolves fairly quickly. Attempts to manually create typings for it (such as the [Definitely Typed one](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/aws-sdk)) are incomplete and don't support promises.
 
This project approaches the challenge by using the information in the source JSON interface and Javascript files to generate the typings. Take a look inside the ```output/typings``` folder to see the results for yourself.

## Installation

### Using Typings

The simplest way to start using the generated typings is to install them directly from github using [typings](https://github.com/typings/typings).

1. Make sure you have [typings](https://github.com/typings/typings) installed:
 
  ```
  npm install typings --global
  ```

2. Make sure your project is set up to reference your typings `typings/index.d.ts` file in your `tsconfig.json` or as a `///` reference.

3. Make sure your typings file includes definitions for promises and node

```
typings i --save -G env~node dt~es6-promise
```

4. Install the latest aws-sdk-typescript from github using:
 
  ```
  typings i aws-sdk=github:ingenieux/aws-sdk-typescript#HEAD --save -G
  ```
  
5. Example ```typings.json```:

```
  ...,
  "globalDependencies": {
    "aws-sdk": "github:ingenieux/aws-sdk-typescript#HEAD",
    "es6-promise": "registry:dt/es6-promise#0.0.0+20160614011821",
    "node": "registry:env/node#6.0.0+20160902022231"
  }
}
```
  
### Using Typescript 2.x (experimental)

Typescript 2 allows you to [install type declarations with npm](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/), this is how you can install the @djabry fork of aws-sdk-typescript:

1. Make sure you have Typescript 2 installed

    ```
    npm install --save-dev typescript@2
    ```


2. Install the @djabry fork of aws-sdk-typescript using npm

    ```
    npm install --save-dev @djabry/aws-sdk-typescript
    ```
    
3. Modify your tsconfig.json file to include the aws-sdk-typescript entry in the compiler.types section and optionally 'es6' in the compiler.lib for the Promise definition

    ```
    {
      "compilerOptions": {
        ...
        "lib": [
          "es6",
          ...
        ],
        ...
        ...
        "types": [
          "@djabry/aws-sdk-typescript/index",
          ...
        ]
      },
      ...
    }
    ```

## Building the project

Follow these steps if you wish to build the project yourself from source:

1. Clone the repo:

```
git clone https://github.com/ingenieux/aws-sdk-typescript
```

2. Initialise the aws-sdk-js submodule:

```
cd aws-sdk-typescript
git submodule init
git submodule update
```

3. Make sure typings is installed globally:

```
npm install -g typings
```

4. Install the typescript bindings:

```
typings install
```

5. Install the dependencies and generate the bindings:

```
npm install
```


### Adding missing AWS type declarations

You can add missing declarations by editing the ```app/src/aws-sdk.handlebars``` file and run ```npm install```, they should then be included in your generated type declarations.
