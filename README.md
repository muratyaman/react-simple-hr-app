# simple-hr-app-react
Simple HR app using React, Node, TypeScript; connected to php8-simple-hr-api

This app is created using create-react-app: see https://create-react-app.dev/docs/getting-started/

## requirements

* Node v14
* Yarn

## install

```sh
yarn install
```

## configure

Copy `.env.sample` as `.env` and review settings.

You should configure and run PHP8 HR API: https://github.com/muratyaman/simple-hr-api-php8

Use one of the API keys setup on API for this app.

## start in dev mode

```sh
yarn start
```

## test

```sh
yarn test
```

## build for production

```sh
yarn build
```

You can serve `build` folder statically.
