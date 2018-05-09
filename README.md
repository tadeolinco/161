# 161 Project

## Prerequisites

1.  Install [yarn](https://yarnpkg.com/en/docs/install#debian-stable)
2.  Install a node version manager. Let's use `n`.

```
sudo yarn global add n
```

3.  Install the latest stable NodeJS.

```
sudo n stable
```

## Installation

```
yarn
```

## Running the Development Server

```
yarn start
```

This will open up your default browser, create a new tab, and go to [http://localhost:8080](http://localhost:8080). All changes to your JavaScript files will automagically reload the browser with the new changes.

## Coding conventions

1.  Don't use `var`. Use `const` for immutables or `let` for mutables.
