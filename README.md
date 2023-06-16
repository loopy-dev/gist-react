# gist-react

Embed the gist anywhere in your latest React project.

## Table of Contents

- **[Overview](#overview)**
- **[Features](#features)**
- **[Getting Started](#getting-started)**
- **[Contributing](#contributing)**
- **[License](#license)**

## Overview

gist-react helps you embed gists more conveniently in React(include Gatsby, Next.js, etc) environments.

## Features

- Supports the latest React - Uses the latest version of the React API.
- Written in TypeScript.
- Convenient embedding method.

## Getting Started

You can use the component as follows:

### Basic Usage

```tsx
import { Gist } from 'gist-react';

const gistId = 'abcdefg';

const App = () => {
  return <Gist gistId={gistId} />;
};
```

### When there are multiple files in a gist

If there are multiple files in a gist, all files will be exposed in the component by only entering the gistId. If you want to embed only one file among multiple files, you can enter the filename.

```tsx
import { Gist } from 'gist-react';

const gistId = 'abcdefg';
const file = 'file.js';

const App = () => {
  return <Gist gistId={gistId} file={file} />;
};
```

### Prerequisites

To make the package work properly, you need React 16.8 or higher that supports react hooks.

### Installation

```bash
yarn add gist-react # install

yarn build # build
```

## Contributing

If you encounter any issues, you can raise them using GitHub issues.

## License

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
This project is licensed under the MIT License.
