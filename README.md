# smx-ranking-calc

A simple package for calculating ranking points in StepManiaX

## Installation

```bash
# npm
npx jsr add @alex-massenzio/smx-ranking-calc

# bun
bunx jsr add @alex-massenzio/smx-ranking-calc

# pnpm
pnpm dlx jsr add @alex-massenzio/smx-ranking-calc
```

## Usage

```ts
import { getRanking } from "@alex-massenzio/smx-ranking-calc";

const score = 95000;
const difficulty = 20;

const rankingPoints = getRanking(score, difficulty); //36000
```

This project was created using `bun init` in bun v1.1.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
