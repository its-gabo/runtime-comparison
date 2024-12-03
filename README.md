# Runtime Comparison between Node.js, Deno and Bun

This project demonstrates how to set up HTTP servers using three different runtimes: **Node.js**, **Deno**, and **Bun** in a monorepo structure and benchmark them.

## Prerequisites

To run the servers, ensure you have the following installed:

### Node.js

```bash
# Linux & macOS
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 23

# Windows
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 23
```

### Deno

```bash
# Linux & macOS
curl -fsSL https://deno.land/install.sh | sh

# Windows
irm https://deno.land/install.ps1 | iex
```

### Bun

```bash
# Linux & macOS
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

## Project Structure

The project is structured as a monorepo with three separate server implementations:

```
/runtime-comparison
├── /packages
│   ├── /node-server
│   ├── /deno-server
│   ├── /bun-server
└── /package.json
```

- **Node Server**: A simple HTTP server using Node.js.
- **Deno Server**: A simple HTTP server using Deno.
- **Bun Server**: A simple HTTP server using Bun.

## Instalation process

```bash
# Clone repository
git clone git@github.com:its-gabo/runtime-comparison.git

# Install dependencies
bun install

# Running server
bun run start:{runtimeName}
```

## Benchmarking runtimes

To benchmark the runtimes you can use [hey](https://github.com/rakyll/hey).

```bash
hey -c 10 -n 1000 http://localhost:3000/

# -c number of workers to run concurrently
# -n number of requests
```

