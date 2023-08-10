## @cenk1cenk2/nestjs-emitter [6.0.5](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@6.0.4...@cenk1cenk2/nestjs-emitter@6.0.5) (2023-08-10)


### Bug Fixes

* **deps:** update dependency @nestjs/event-emitter to ^2.0.1 ([477c6d7](https://github.com/cenk1cenk2/nestjs-tools/commit/477c6d7106cbba8114d6d74630000983ac4792e1))

## @cenk1cenk2/nestjs-emitter [6.0.4](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@6.0.3...@cenk1cenk2/nestjs-emitter@6.0.4) (2023-06-21)


### Bug Fixes

* **deps:** update dependencies ([8b6d76c](https://github.com/cenk1cenk2/nestjs-tools/commit/8b6d76c98242418a78e59a2768adfcaf8350a60c))

## @cenk1cenk2/nestjs-emitter [6.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@6.0.2...@cenk1cenk2/nestjs-emitter@6.0.3) (2023-06-12)


### Bug Fixes

* **deps:** update dependency @nestjs/event-emitter to ^1.4.2 ([719a777](https://github.com/cenk1cenk2/nestjs-tools/commit/719a77758ec58f37f2b0d88bf15ac5f44f692c00))

## @cenk1cenk2/nestjs-emitter [6.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@6.0.1...@cenk1cenk2/nestjs-emitter@6.0.2) (2023-04-09)


### Bug Fixes

* fix build errors, update deps convert to turbo and pnpm ([5acd4b2](https://github.com/cenk1cenk2/nestjs-tools/commit/5acd4b2c5d35b192e0d6154ad66b51cb1279183e))

## @cenk1cenk2/nestjs-emitter [6.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@6.0.0...@cenk1cenk2/nestjs-emitter@6.0.1) (2023-03-03)


### Bug Fixes

* fix issues with esbuild ([87ab352](https://github.com/cenk1cenk2/nestjs-tools/commit/87ab3520bd52a3d870f940f2c42f619dcba92ac0))
* infer types ([f58e9d9](https://github.com/cenk1cenk2/nestjs-tools/commit/f58e9d9bbb84a4ae9ea7d1487d71ba5bb1e7968f))

# @cenk1cenk2/nestjs-emitter [6.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.5...@cenk1cenk2/nestjs-emitter@6.0.0) (2023-03-01)


### Performance Improvements

* drops the dependency and defaults for modules using the configservice ([85d2f90](https://github.com/cenk1cenk2/nestjs-tools/commit/85d2f90e65ed18dd24947dc7c9623594d22da4dd))


### BREAKING CHANGES

* Will break the older versions that uses the config service as the
initiation dependency.

S3 library is swapped with the smaller one.

## @cenk1cenk2/nestjs-emitter [5.0.5](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.4...@cenk1cenk2/nestjs-emitter@5.0.5) (2023-02-01)


### Bug Fixes

* **deps:** update dependency @nestjs/event-emitter to ^1.4.1 ([6376cba](https://github.com/cenk1cenk2/nestjs-tools/commit/6376cba296d62ec6e0e65c115057302efa63733f))

## @cenk1cenk2/nestjs-emitter [5.0.4](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.3...@cenk1cenk2/nestjs-emitter@5.0.4) (2022-12-01)

### Bug Fixes

- move redis adapter initiation to be lazy loaded ([bbb35f5](https://github.com/cenk1cenk2/nestjs-tools/commit/bbb35f50c8b7e42d7b3d08d611188f3ca1f9e696))

## @cenk1cenk2/nestjs-emitter [5.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.2...@cenk1cenk2/nestjs-emitter@5.0.3) (2022-11-11)

### Bug Fixes

- **event-emitter:** import error ([6756512](https://github.com/cenk1cenk2/nestjs-tools/commit/6756512599bb3547dd7d3fac36cbd26f39eecdd4))
- **event-emitter:** let manager export itself ([927d924](https://github.com/cenk1cenk2/nestjs-tools/commit/927d9241b872caf43ff99609ff41b9c4bb42de06))

## @cenk1cenk2/nestjs-emitter [5.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.1...@cenk1cenk2/nestjs-emitter@5.0.2) (2022-11-11)

### Bug Fixes

- **event-emitter:** issues with exports matching the old api ([ea8d0be](https://github.com/cenk1cenk2/nestjs-tools/commit/ea8d0becf54b7845657401f2de4d54bd4dc6bceb))

## @cenk1cenk2/nestjs-emitter [5.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@5.0.0...@cenk1cenk2/nestjs-emitter@5.0.1) (2022-11-11)

### Bug Fixes

- **event-emitter:** move event-manager to submodule ([96015cd](https://github.com/cenk1cenk2/nestjs-tools/commit/96015cd4f3bc9bbee7c1797f1f5c34c69f423cc0))
- **event-emitter:** remove dead imports ([af6e33f](https://github.com/cenk1cenk2/nestjs-tools/commit/af6e33fd9238f70b737cdfff796532d1371b0242))

# @cenk1cenk2/nestjs-emitter [5.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.1.0...@cenk1cenk2/nestjs-emitter@5.0.0) (2022-11-11)

### Performance Improvements

- **event-emitter:** combine event manager and event emitter modules because of singleton issues ([be97e24](https://github.com/cenk1cenk2/nestjs-tools/commit/be97e24156801aae448166730c07b939bca6557d))

### BREAKING CHANGES

- **event-emitter:** - event-manager module does not exists anymore.

# @cenk1cenk2/nestjs-emitter [4.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.5...@cenk1cenk2/nestjs-emitter@4.1.0) (2022-11-11)

### Bug Fixes

- update event emitter injection ([beaa6a9](https://github.com/cenk1cenk2/nestjs-tools/commit/beaa6a9f952b72a946fe919039625c07950aeb7a))

### Features

- **emitter:** add function input for request-response types ([310d8e1](https://github.com/cenk1cenk2/nestjs-tools/commit/310d8e1b961756db92864ab4f6dc84d96a860601))

## @cenk1cenk2/nestjs-emitter [4.0.5](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.4...@cenk1cenk2/nestjs-emitter@4.0.5) (2022-10-24)

### Bug Fixes

- update dependencies and fix import problem with redis-om ([a5c4d05](https://github.com/cenk1cenk2/nestjs-tools/commit/a5c4d05c836dadaeef4106ce19ac7c10d1dfbb12))

## @cenk1cenk2/nestjs-emitter [4.0.4](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.3...@cenk1cenk2/nestjs-emitter@4.0.4) (2022-08-12)

### Bug Fixes

- **deps:** update dependency @nestjs/event-emitter to ^1.3.1 ([7c0da78](https://github.com/cenk1cenk2/nestjs-tools/commit/7c0da78a2dd2c8d14cfd97a4e46162dd5baaffaa))

## @cenk1cenk2/nestjs-emitter [4.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.2...@cenk1cenk2/nestjs-emitter@4.0.3) (2022-07-12)

### Bug Fixes

- **deps:** update dependency @nestjs/event-emitter to ^1.3.0 ([bc1e79c](https://github.com/cenk1cenk2/nestjs-tools/commit/bc1e79c0af3e9792cbeed5d8f1c535c9f76c030b))

## @cenk1cenk2/nestjs-emitter [4.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.1...@cenk1cenk2/nestjs-emitter@4.0.2) (2022-07-08)

### Bug Fixes

- **deps:** update all minor dependency updates ([b983af2](https://github.com/cenk1cenk2/nestjs-tools/commit/b983af2c5cc0847f6223ef246bc87388dcce4981))

## @cenk1cenk2/nestjs-emitter [4.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@4.0.0...@cenk1cenk2/nestjs-emitter@4.0.1) (2022-05-05)

### Bug Fixes

- **deps:** update all minor dependency updates ([7fd85d8](https://github.com/cenk1cenk2/nestjs-tools/commit/7fd85d8209aec133eca95fd5bc22c1351f1a83f8))

# @cenk1cenk2/nestjs-emitter [4.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@3.0.2...@cenk1cenk2/nestjs-emitter@4.0.0) (2022-04-30)

### Bug Fixes

- **deps:** update all minor dependency updates ([87a5e9c](https://github.com/cenk1cenk2/nestjs-tools/commit/87a5e9c592a59440272dfe16fcecf593edf77725))

### Performance Improvements

- update build system ([ebb7357](https://github.com/cenk1cenk2/nestjs-tools/commit/ebb7357b5cc3f6043e5171c8e3a883d723c294d8))

### BREAKING CHANGES

- does not support versions older then node16

## @cenk1cenk2/nestjs-emitter [3.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@3.0.1...@cenk1cenk2/nestjs-emitter@3.0.2) (2022-02-19)

### Bug Fixes

- update failing build, add missing dependencies ([ac7dca2](https://github.com/cenk1cenk2/nestjs-tools/commit/ac7dca229dfa99b19fd825d89687f7219950d37f))

## @cenk1cenk2/nestjs-emitter [3.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@3.0.0...@cenk1cenk2/nestjs-emitter@3.0.1) (2021-11-17)

### Bug Fixes

- drop dead package, add to new packages for coding schol present ([a512b69](https://github.com/cenk1cenk2/nestjs-tools/commit/a512b69aed6dcaeb91113bba1d45933da5fd665c))

# @cenk1cenk2/nestjs-emitter [3.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@2.1.1...@cenk1cenk2/nestjs-emitter@3.0.0) (2021-10-05)

### Bug Fixes

- **deps:** update dependency @nestjs/event-emitter to ^0.0.4 ([248fe82](https://github.com/cenk1cenk2/nestjs-tools/commit/248fe82737178c79363e986711300b1d4b9b64f1))

### Features

- update dependencies to major versions, add failing dep ([492af85](https://github.com/cenk1cenk2/nestjs-tools/commit/492af8584d21475c0c7f552ce28e4eaca7421a59))

### BREAKING CHANGES

- nestjs-emitter package is upgraded with a major version

## @cenk1cenk2/nestjs-emitter [2.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@2.1.0...@cenk1cenk2/nestjs-emitter@2.1.1) (2021-02-25)

### Bug Fixes

- **deps:** update dependency @nestjs/event-emitter to ^0.0.3 ([bf0023f](https://github.com/cenk1cenk2/nestjs-tools/commit/bf0023fb040cd49d198904ace1f0450900911c15))

# @cenk1cenk2/nestjs-emitter [2.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@2.0.2...@cenk1cenk2/nestjs-emitter@2.1.0) (2021-02-05)

### Features

- fix all problems metadata related ([4d125a5](https://github.com/cenk1cenk2/nestjs-tools/commit/4d125a5fcc593ea23a7b8be0a91c8bd874f8cac0))

## @cenk1cenk2/nestjs-emitter [2.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@2.0.1...@cenk1cenk2/nestjs-emitter@2.0.2) (2021-02-05)

### Bug Fixes

- add binding to class ([84731a2](https://github.com/cenk1cenk2/nestjs-tools/commit/84731a24cf931941d0da51e77d0c79d53109f488))
- fix new decorator ([897ea9d](https://github.com/cenk1cenk2/nestjs-tools/commit/897ea9d989482311eb7a41df0390ba76ae1bc43c))

## @cenk1cenk2/nestjs-emitter [2.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@2.0.0...@cenk1cenk2/nestjs-emitter@2.0.1) (2021-02-05)

### Bug Fixes

- update to have seperate fields for multiple events ([825eb4e](https://github.com/cenk1cenk2/nestjs-tools/commit/825eb4e56a82f202c87b5efefea7589c238fe589))

# @cenk1cenk2/nestjs-emitter [2.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.1.1...@cenk1cenk2/nestjs-emitter@2.0.0) (2021-02-05)

### Performance Improvements

- add own implementation for event emitter ([6bd4b89](https://github.com/cenk1cenk2/nestjs-tools/commit/6bd4b89104a3944876e3a9f02710b2cf7803be9d))

### BREAKING CHANGES

- now changes the way events are handled

## @cenk1cenk2/nestjs-emitter [1.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.1.0...@cenk1cenk2/nestjs-emitter@1.1.1) (2021-01-20)

### Bug Fixes

- compile to more legacy apps node 12 es15 ([f271708](https://github.com/cenk1cenk2/nestjs-tools/commit/f27170886addb0eae7837816a45b2267fc658abe))

# @cenk1cenk2/nestjs-emitter [1.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.0.3...@cenk1cenk2/nestjs-emitter@1.1.0) (2020-12-26)

### Features

- added new packages for pagination and stuff ([fa3b3ce](https://github.com/cenk1cenk2/nestjs-tools/commit/fa3b3ce8aa301e791b7131ed3cd6ee6280ef0ff0))

## @cenk1cenk2/nestjs-emitter [1.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.0.2...@cenk1cenk2/nestjs-emitter@1.0.3) (2020-12-12)

### Bug Fixes

- add default to options ([d4876b7](https://github.com/cenk1cenk2/nestjs-tools/commit/d4876b7335725dccaebbd735f10d3540df6bea1c))

## @cenk1cenk2/nestjs-emitter [1.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.0.1...@cenk1cenk2/nestjs-emitter@1.0.2) (2020-12-12)

### Bug Fixes

- add graphql and authkey generator ([4828eac](https://github.com/cenk1cenk2/nestjs-tools/commit/4828eaccf5690ae2c9f1d7d022eeecde6979f7aa))

## @cenk1cenk2/nestjs-emitter [1.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-emitter@1.0.0...@cenk1cenk2/nestjs-emitter@1.0.1) (2020-12-12)

### Bug Fixes

- update basic readmes ([2a874de](https://github.com/cenk1cenk2/nestjs-tools/commit/2a874de8c91b9c30bff02851488c5f1d2de1e312))

# @cenk1cenk2/nestjs-emitter 1.0.0 (2020-12-12)

### Bug Fixes

- fix build setup ([1f63051](https://github.com/cenk1cenk2/nestjs-tools/commit/1f6305118bf5d23d3f7ca45e9bd7c5cc8f3a452d))
- initial version and first publish ([69f9661](https://github.com/cenk1cenk2/nestjs-tools/commit/69f96619ac6f8dd32b045b6aa0c5c98557191915))

# @cenk1cenk2/nestjs-emitter 1.0.0 (2020-12-12)

### Bug Fixes

- initial version and first publish ([69f9661](https://github.com/cenk1cenk2/nestjs-tools/commit/69f96619ac6f8dd32b045b6aa0c5c98557191915))
