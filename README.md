# aws-sdk-typescript

## Intro

Not really. Instead, it generates the typings necessary for the AWS SDK for JavaScript from the JSON (and JS) Files.

If you're curious about the quality, look under output/typings folder.

Use the bundled aws-sdk.js, and augment with the services you want to support. In theory, it should work :)

## Usage

If you're using tsd, things are easier:

```
$ # Obvious Preconditions: npm install -g typescript tsd, then {npm,tsc,tsd} init
$ npm install aws-sdk-typescript --save-dev
$ tsd link
```

