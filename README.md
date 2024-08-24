# The Houseful Code Challenge

    This repository contains the complete source code for the runtime of The Houseful Code Challenge.

## 3. The Task Details

Please continue reading the [TASK-README.md](./task/TASK-README.md) file.

## Prerequisites

- Nodejs
- Git

## Installing

Install [npm](https://nodejs.org/en/download/) or [Yarn](https://yarnpkg.com)

Clone whole source code as follows and go to houseful-fe-dev-challange folder

```
git clone https://github.com/umitkaraogul/houseful-fe-dev-challange
```

```
cd houseful-fe-dev-challange
```

## Environment Variables

- Copy .env.example to .env (e.g. `cp .env.example .env`) for providing environment variables.

  ```
  VITE_API_URL=
  ```

## Running

```sh
# Install dependencies
pnpm i

# Start api server
pnpm run server

# Start development server
pnpm dev

# Run unit tests
pnpm test
pnpm test:watch
```

> The front end will start on [port 5173](http://localhost:5173)

## Deployment

This project deployed on [Vercel](https://vercel.com/)

You can test [the application on Vercel.](https://houseful-fe-dev-challange.vercel.app/)
