# actions-cache-proto

This repository contains the protobuf files for the new GitHub Actions cache service (v2) API. These files were reconstructed from the generated TypeScript files in the [actions/toolkit](https://github.com/actions/toolkit/tree/main/packages/cache/src/generated).

## Overview

The proto files in this repository are useful for the community to understand and interact with the GitHub Actions cache service API. This effort aims to provide a clear and structured way to work with the cache service, as discussed in [actions/toolkit#1931](https://github.com/actions/toolkit/issues/1931).

## Building

To rebuild the TypeScript files from the proto sources, follow these steps:

1. Use [mise](https://mise.jdx.dev) to set up the needed tools.
2. Run `mise build`.

If you do not want to use mise, that's fine. Look in `mise.toml` for the required tools and build script (a one-liner).

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the actions/toolkit project for providing the TypeScript files used to reconstruct these proto files.
