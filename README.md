# Grippenetch Studies

## Setup

This repository uses several submodules, init them first:

```bash
git submodule update --init --recursive
```

Then you can install them together with the other dependencies:

```bash
yarn install
```

## Generate json

To build the Grippenetch studies together with surveys and rules run:

```
yarn generate
```

the `generate` task will take care of build all the submodules.