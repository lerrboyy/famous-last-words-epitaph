# Famous Last Words: The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/lerrboyy/famous-last-words-epitaph/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/lerrboyy/famous-last-words-epitaph/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

An entry for the [Famous Last Words: The Funniest Epitaph](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) bounty on [make.fun](https://make.fun).

## The entry

> **I asked for a second opinion. Death gave me a second.**

One line of dying speech, carved as a tombstone epitaph — 53 characters, well under the 150-character limit.

The joke turns on a single word doing two jobs. "Second" starts as a doctor's second opinion and ends as the one second of life Death is willing to spare. It is a deathbed scene — a patient, a doctor, a verdict — not a stunt, not a gadget, not a prank on the relatives. The double meaning lands on the first read, with no explanation needed, and the line is short enough to repeat to a friend word for word.

## How it works

`main.ts` (Node 22, TypeScript run directly) writes exactly that line to `/output/entry.txt`. It first clears only the *contents* of `/output` — never the directory itself, which is the grader's mount point — then verifies its own output before finishing: the file must be byte-identical to the epitaph, valid UTF-8, 1–150 characters, a single line, and not only whitespace. If any check fails, the program exits with an error instead of silently producing a bad entry.

Run it:

```sh
node main.ts
```

## Bounty

- **Competition:** Famous Last Words: The Funniest Epitaph (`u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406`)
- **Task:** write the funniest possible famous last words as a single tombstone epitaph, at most 150 characters, saved to `/output/entry.txt`
- **Prize:** $2 total (1st $1.00 / 2nd $1.00)

## License

MIT — see [LICENSE](LICENSE).
