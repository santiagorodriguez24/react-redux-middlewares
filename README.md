# React data load:

> Examples of how to load data from API in React: thunk, saga, suspense, hooks

This app shows different ways to query and show some data loaded from the API in React.
A loading indicator is showed while data is retrieving and error if call fails.

For testing purposes we are going to use [json-server](https://github.com/typicode/json-server) that allows you to build fake REST APIs very fast.

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Clone the repository:

```bash
git clone https://github.com/santiagorodriguez24/react-load-data.git
```

Install Server dependencies:

Open a Command Prompt or Terminal at root directory and run the following commands:

```sh
cd mock-server
npm install
```

Install Client dependencies:

Open a Command Prompt or Terminal at root directory and run the following commands:

```sh
cd client
npm install
```

## Usage

Open a Command Prompt or Terminal at "mock-server" directory and run the following command:

```bash
npm run server
```

Then Open a Command Prompt or Terminal at "client" directory and run the following command:

```bash
npm start
```
