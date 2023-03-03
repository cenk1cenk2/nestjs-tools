## @cenk1cenk2/nestjs-graphql-redis-cache [5.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@5.0.0...@cenk1cenk2/nestjs-graphql-redis-cache@5.0.1) (2023-03-03)


### Bug Fixes

* fix issues with esbuild ([87ab352](https://github.com/cenk1cenk2/nestjs-tools/commit/87ab3520bd52a3d870f940f2c42f619dcba92ac0))
* infer types ([f58e9d9](https://github.com/cenk1cenk2/nestjs-tools/commit/f58e9d9bbb84a4ae9ea7d1487d71ba5bb1e7968f))

# @cenk1cenk2/nestjs-graphql-redis-cache [5.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@4.0.2...@cenk1cenk2/nestjs-graphql-redis-cache@5.0.0) (2023-03-01)


### Performance Improvements

* drops the dependency and defaults for modules using the configservice ([85d2f90](https://github.com/cenk1cenk2/nestjs-tools/commit/85d2f90e65ed18dd24947dc7c9623594d22da4dd))


### BREAKING CHANGES

* Will break the older versions that uses the config service as the
initiation dependency.

S3 library is swapped with the smaller one.

## @cenk1cenk2/nestjs-graphql-redis-cache [4.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@4.0.1...@cenk1cenk2/nestjs-graphql-redis-cache@4.0.2) (2022-12-01)

### Bug Fixes

- move redis adapter initiation to be lazy loaded ([bbb35f5](https://github.com/cenk1cenk2/nestjs-tools/commit/bbb35f50c8b7e42d7b3d08d611188f3ca1f9e696))

## @cenk1cenk2/nestjs-graphql-redis-cache [4.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@4.0.0...@cenk1cenk2/nestjs-graphql-redis-cache@4.0.1) (2022-10-24)

### Bug Fixes

- update dependencies and fix import problem with redis-om ([a5c4d05](https://github.com/cenk1cenk2/nestjs-tools/commit/a5c4d05c836dadaeef4106ce19ac7c10d1dfbb12))

# @cenk1cenk2/nestjs-graphql-redis-cache [4.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@3.0.1...@cenk1cenk2/nestjs-graphql-redis-cache@4.0.0) (2022-10-24)

### Performance Improvements

- add redis-om to redis store and update failing builds ([84f796d](https://github.com/cenk1cenk2/nestjs-tools/commit/84f796d6e7043975209643d4d6f8411381511e8c))

### BREAKING CHANGES

- changes in nestjs versions caused managers to act differently dependencies are updated for the cache manager

## @cenk1cenk2/nestjs-graphql-redis-cache [3.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@3.0.0...@cenk1cenk2/nestjs-graphql-redis-cache@3.0.1) (2022-05-12)

### Bug Fixes

- add missing npmignore files ([2d8a4d0](https://github.com/cenk1cenk2/nestjs-tools/commit/2d8a4d0ed98c1261911628a446ec85666dd8290f))

# @cenk1cenk2/nestjs-graphql-redis-cache [3.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@2.1.1...@cenk1cenk2/nestjs-graphql-redis-cache@3.0.0) (2022-04-30)

### Performance Improvements

- update build system ([ebb7357](https://github.com/cenk1cenk2/nestjs-tools/commit/ebb7357b5cc3f6043e5171c8e3a883d723c294d8))

### BREAKING CHANGES

- does not support versions older then node16

## @cenk1cenk2/nestjs-graphql-redis-cache [2.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@2.1.0...@cenk1cenk2/nestjs-graphql-redis-cache@2.1.1) (2022-02-19)

### Bug Fixes

- update failing build, add missing dependencies ([ac7dca2](https://github.com/cenk1cenk2/nestjs-tools/commit/ac7dca229dfa99b19fd825d89687f7219950d37f))

# @cenk1cenk2/nestjs-graphql-redis-cache [2.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@2.0.0...@cenk1cenk2/nestjs-graphql-redis-cache@2.1.0) (2021-11-26)

### Features

- **redis:** changes how the options are handled, adds new redis package ([aee701a](https://github.com/cenk1cenk2/nestjs-tools/commit/aee701a52d5891728be4acd9e2e5e6d5bece1417))

# @cenk1cenk2/nestjs-graphql-redis-cache [2.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-graphql-redis-cache@1.0.0...@cenk1cenk2/nestjs-graphql-redis-cache@2.0.0) (2021-11-25)

### Features

- use ioredis ([3cee189](https://github.com/cenk1cenk2/nestjs-tools/commit/3cee1899388095372cd4c8c1b9e828b793c5ac24))

### BREAKING CHANGES

- my break dependencies

# @cenk1cenk2/nestjs-graphql-redis-cache 1.0.0 (2021-11-17)

### Bug Fixes

- drop dead package, add to new packages for coding schol present ([a512b69](https://github.com/cenk1cenk2/nestjs-tools/commit/a512b69aed6dcaeb91113bba1d45933da5fd665c))
