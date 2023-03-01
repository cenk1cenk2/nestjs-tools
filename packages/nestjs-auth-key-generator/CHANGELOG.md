# @cenk1cenk2/nestjs-auth-key-generator [5.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@4.0.2...@cenk1cenk2/nestjs-auth-key-generator@5.0.0) (2023-03-01)


### Performance Improvements

* drops the dependency and defaults for modules using the configservice ([85d2f90](https://github.com/cenk1cenk2/nestjs-tools/commit/85d2f90e65ed18dd24947dc7c9623594d22da4dd))


### BREAKING CHANGES

* Will break the older versions that uses the config service as the
initiation dependency.

S3 library is swapped with the smaller one.





### Dependencies

* **@cenk1cenk2/nestjs-utils:** upgraded to 3.0.0

## @cenk1cenk2/nestjs-auth-key-generator [4.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@4.0.1...@cenk1cenk2/nestjs-auth-key-generator@4.0.2) (2022-12-01)

### Bug Fixes

- move redis adapter initiation to be lazy loaded ([bbb35f5](https://github.com/cenk1cenk2/nestjs-tools/commit/bbb35f50c8b7e42d7b3d08d611188f3ca1f9e696))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 2.0.3

## @cenk1cenk2/nestjs-auth-key-generator [4.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@4.0.0...@cenk1cenk2/nestjs-auth-key-generator@4.0.1) (2022-10-24)

### Bug Fixes

- update dependencies and fix import problem with redis-om ([a5c4d05](https://github.com/cenk1cenk2/nestjs-tools/commit/a5c4d05c836dadaeef4106ce19ac7c10d1dfbb12))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 2.0.2

# @cenk1cenk2/nestjs-auth-key-generator [4.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@3.0.1...@cenk1cenk2/nestjs-auth-key-generator@4.0.0) (2022-10-24)

### Bug Fixes

- **deps:** update dependency selfsigned to ^2.1.1 ([8f1122f](https://github.com/cenk1cenk2/nestjs-tools/commit/8f1122fc53573123a7f491936170fb3529394df9))

### Performance Improvements

- add redis-om to redis store and update failing builds ([84f796d](https://github.com/cenk1cenk2/nestjs-tools/commit/84f796d6e7043975209643d4d6f8411381511e8c))

### BREAKING CHANGES

- changes in nestjs versions caused managers to act differently dependencies are updated for the cache manager

## @cenk1cenk2/nestjs-auth-key-generator [3.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@3.0.0...@cenk1cenk2/nestjs-auth-key-generator@3.0.1) (2022-07-02)

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 2.0.1

# @cenk1cenk2/nestjs-auth-key-generator [3.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.7...@cenk1cenk2/nestjs-auth-key-generator@3.0.0) (2022-05-04)

### Bug Fixes

- **deps:** update dependency selfsigned to ^2.0.1 ([4b878bb](https://github.com/cenk1cenk2/nestjs-tools/commit/4b878bb78b102ec65016d3c8ff3baac911206aa9))

### Performance Improvements

- update build system ([ebb7357](https://github.com/cenk1cenk2/nestjs-tools/commit/ebb7357b5cc3f6043e5171c8e3a883d723c294d8))

### BREAKING CHANGES

- does not support versions older then node16

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 2.0.0

## @cenk1cenk2/nestjs-auth-key-generator [2.0.7](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.6...@cenk1cenk2/nestjs-auth-key-generator@2.0.7) (2022-02-19)

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.7

## @cenk1cenk2/nestjs-auth-key-generator [2.0.6](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.5...@cenk1cenk2/nestjs-auth-key-generator@2.0.6) (2022-02-19)

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.6

## @cenk1cenk2/nestjs-auth-key-generator [2.0.5](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.4...@cenk1cenk2/nestjs-auth-key-generator@2.0.5) (2022-02-19)

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.5

## @cenk1cenk2/nestjs-auth-key-generator [2.0.4](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.3...@cenk1cenk2/nestjs-auth-key-generator@2.0.4) (2022-02-19)

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.4

## @cenk1cenk2/nestjs-auth-key-generator [2.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.2...@cenk1cenk2/nestjs-auth-key-generator@2.0.3) (2022-02-19)

### Bug Fixes

- update failing build, add missing dependencies ([ac7dca2](https://github.com/cenk1cenk2/nestjs-tools/commit/ac7dca229dfa99b19fd825d89687f7219950d37f))
- **deps:** update dependency selfsigned to ^1.10.13 ([0ed38b1](https://github.com/cenk1cenk2/nestjs-tools/commit/0ed38b1924735a302c3b74b4d0228c113d781be1))
- **deps:** update dependency selfsigned to ^1.10.14 ([7432de3](https://github.com/cenk1cenk2/nestjs-tools/commit/7432de30f1e9ab8e179b5801fab4b400794c44aa))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.3

## @cenk1cenk2/nestjs-auth-key-generator [2.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.1...@cenk1cenk2/nestjs-auth-key-generator@2.0.2) (2021-11-17)

### Bug Fixes

- drop dead package, add to new packages for coding schol present ([a512b69](https://github.com/cenk1cenk2/nestjs-tools/commit/a512b69aed6dcaeb91113bba1d45933da5fd665c))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.2

## @cenk1cenk2/nestjs-auth-key-generator [2.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@2.0.0...@cenk1cenk2/nestjs-auth-key-generator@2.0.1) (2021-10-05)

### Bug Fixes

- nullable entry ([5b80da0](https://github.com/cenk1cenk2/nestjs-tools/commit/5b80da0816633ee5fdc9212fe541912086861f8b))

# @cenk1cenk2/nestjs-auth-key-generator [2.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.1.3...@cenk1cenk2/nestjs-auth-key-generator@2.0.0) (2021-10-05)

### Features

- application key handler ([1161293](https://github.com/cenk1cenk2/nestjs-tools/commit/11612938f18fc2edf6aab32d131721f835cf0815))

### BREAKING CHANGES

- Handles application key generation in a different way now.

## @cenk1cenk2/nestjs-auth-key-generator [1.1.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.1.2...@cenk1cenk2/nestjs-auth-key-generator@1.1.3) (2021-06-06)

### Bug Fixes

- **deps:** update dependency keypair to ^1.0.3 ([062126f](https://github.com/cenk1cenk2/nestjs-tools/commit/062126f1d89ecc1d200e0d8b47ec4561e72b2990))

## @cenk1cenk2/nestjs-auth-key-generator [1.1.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.1.1...@cenk1cenk2/nestjs-auth-key-generator@1.1.2) (2021-02-04)

### Bug Fixes

- fix failing build ([a0be410](https://github.com/cenk1cenk2/nestjs-tools/commit/a0be410e4abc9bb10c2425a76105747f88b50493))
- **deps:** update all minor dependency updates ([1027b13](https://github.com/cenk1cenk2/nestjs-tools/commit/1027b137574340f41137079ca56f62a9f13fd445))

## @cenk1cenk2/nestjs-auth-key-generator [1.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.1.0...@cenk1cenk2/nestjs-auth-key-generator@1.1.1) (2021-01-20)

### Bug Fixes

- compile to more legacy apps node 12 es15 ([f271708](https://github.com/cenk1cenk2/nestjs-tools/commit/f27170886addb0eae7837816a45b2267fc658abe))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.1

# @cenk1cenk2/nestjs-auth-key-generator [1.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.0.2...@cenk1cenk2/nestjs-auth-key-generator@1.1.0) (2020-12-26)

### Bug Fixes

- update dependency versions ([5a2822f](https://github.com/cenk1cenk2/nestjs-tools/commit/5a2822f08ccd02d55e3db562f009eada826b0521))

### Features

- added new packages for pagination and stuff ([fa3b3ce](https://github.com/cenk1cenk2/nestjs-tools/commit/fa3b3ce8aa301e791b7131ed3cd6ee6280ef0ff0))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.1.0

## @cenk1cenk2/nestjs-auth-key-generator [1.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.0.1...@cenk1cenk2/nestjs-auth-key-generator@1.0.2) (2020-12-12)

### Bug Fixes

- add default to options ([d4876b7](https://github.com/cenk1cenk2/nestjs-tools/commit/d4876b7335725dccaebbd735f10d3540df6bea1c))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.0.3

## @cenk1cenk2/nestjs-auth-key-generator [1.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-auth-key-generator@1.0.0...@cenk1cenk2/nestjs-auth-key-generator@1.0.1) (2020-12-12)

### Bug Fixes

- add graphql and authkey generator ([4828eac](https://github.com/cenk1cenk2/nestjs-tools/commit/4828eaccf5690ae2c9f1d7d022eeecde6979f7aa))

### Dependencies

- **@cenk1cenk2/nestjs-utils:** upgraded to 1.0.2

# @cenk1cenk2/nestjs-auth-key-generator 1.0.0 (2020-12-12)

### Bug Fixes

- add the key fixer here and update the emitter ([95a3e79](https://github.com/cenk1cenk2/nestjs-tools/commit/95a3e79517c2bd5c8051200a2834f6ca2ab2250e))
