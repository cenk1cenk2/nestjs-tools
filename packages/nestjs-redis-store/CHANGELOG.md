## @cenk1cenk2/nestjs-redis-store [5.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@5.0.1...@cenk1cenk2/nestjs-redis-store@5.0.2) (2023-04-09)


### Bug Fixes

* fix build errors, update deps convert to turbo and pnpm ([5acd4b2](https://github.com/cenk1cenk2/nestjs-tools/commit/5acd4b2c5d35b192e0d6154ad66b51cb1279183e))

## @cenk1cenk2/nestjs-redis-store [5.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@5.0.0...@cenk1cenk2/nestjs-redis-store@5.0.1) (2023-03-03)


### Bug Fixes

* fix issues with esbuild ([87ab352](https://github.com/cenk1cenk2/nestjs-tools/commit/87ab3520bd52a3d870f940f2c42f619dcba92ac0))
* infer types ([f58e9d9](https://github.com/cenk1cenk2/nestjs-tools/commit/f58e9d9bbb84a4ae9ea7d1487d71ba5bb1e7968f))

# @cenk1cenk2/nestjs-redis-store [5.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@4.1.2...@cenk1cenk2/nestjs-redis-store@5.0.0) (2023-03-01)


### Performance Improvements

* drops the dependency and defaults for modules using the configservice ([85d2f90](https://github.com/cenk1cenk2/nestjs-tools/commit/85d2f90e65ed18dd24947dc7c9623594d22da4dd))


### BREAKING CHANGES

* Will break the older versions that uses the config service as the
initiation dependency.

S3 library is swapped with the smaller one.

## @cenk1cenk2/nestjs-redis-store [4.1.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@4.1.1...@cenk1cenk2/nestjs-redis-store@4.1.2) (2022-12-01)

### Bug Fixes

- move redis adapter initiation to be lazy loaded ([bbb35f5](https://github.com/cenk1cenk2/nestjs-tools/commit/bbb35f50c8b7e42d7b3d08d611188f3ca1f9e696))

## @cenk1cenk2/nestjs-redis-store [4.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@4.1.0...@cenk1cenk2/nestjs-redis-store@4.1.1) (2022-10-28)

### Bug Fixes

- clear interval while application is dismantling ([3adacf5](https://github.com/cenk1cenk2/nestjs-tools/commit/3adacf5b4925de1c0f0214899ed513dea64b8275))

# @cenk1cenk2/nestjs-redis-store [4.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@4.0.1...@cenk1cenk2/nestjs-redis-store@4.1.0) (2022-10-28)

### Features

- add healthcheck to redis instance ([f7bbfbe](https://github.com/cenk1cenk2/nestjs-tools/commit/f7bbfbe22f2873409867666f438447446d71203c))

## @cenk1cenk2/nestjs-redis-store [4.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@4.0.0...@cenk1cenk2/nestjs-redis-store@4.0.1) (2022-10-24)

### Bug Fixes

- update dependencies and fix import problem with redis-om ([a5c4d05](https://github.com/cenk1cenk2/nestjs-tools/commit/a5c4d05c836dadaeef4106ce19ac7c10d1dfbb12))

# @cenk1cenk2/nestjs-redis-store [4.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@3.0.1...@cenk1cenk2/nestjs-redis-store@4.0.0) (2022-10-24)

### Performance Improvements

- add redis-om to redis store and update failing builds ([84f796d](https://github.com/cenk1cenk2/nestjs-tools/commit/84f796d6e7043975209643d4d6f8411381511e8c))

### BREAKING CHANGES

- changes in nestjs versions caused managers to act differently dependencies are updated for the cache manager

## @cenk1cenk2/nestjs-redis-store [3.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@3.0.0...@cenk1cenk2/nestjs-redis-store@3.0.1) (2022-05-24)

### Bug Fixes

- make options public for outside access to delimiter ([c3ddaf7](https://github.com/cenk1cenk2/nestjs-tools/commit/c3ddaf7182234e63b4a6a5b19a5b19f27d868af7))

# @cenk1cenk2/nestjs-redis-store [3.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@2.1.1...@cenk1cenk2/nestjs-redis-store@3.0.0) (2022-05-24)

### Performance Improvements

- remove unnessary testingn stuff ([53ece5e](https://github.com/cenk1cenk2/nestjs-tools/commit/53ece5efe84880fed48e9624e001772a76aa61ce))

### BREAKING CHANGES

- this removes some stuff that might be used from the unstable api

## @cenk1cenk2/nestjs-redis-store [2.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@2.1.0...@cenk1cenk2/nestjs-redis-store@2.1.1) (2022-05-24)

### Bug Fixes

- update initiation method ([5a61b37](https://github.com/cenk1cenk2/nestjs-tools/commit/5a61b374d129108421d1c2d728e648d862dce131))

# @cenk1cenk2/nestjs-redis-store [2.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@2.0.2...@cenk1cenk2/nestjs-redis-store@2.1.0) (2022-05-24)

### Features

- add creating child for pubsub interfaces ([9eb0567](https://github.com/cenk1cenk2/nestjs-tools/commit/9eb05677467d450871b24bf6f7fc1c37db9b9c15))

## @cenk1cenk2/nestjs-redis-store [2.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@2.0.1...@cenk1cenk2/nestjs-redis-store@2.0.2) (2022-05-24)

### Bug Fixes

- update module initiation time ([f3c57ae](https://github.com/cenk1cenk2/nestjs-tools/commit/f3c57ae2bffa4ff285dba606b68e3e53cfc504bd))

## @cenk1cenk2/nestjs-redis-store [2.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@2.0.0...@cenk1cenk2/nestjs-redis-store@2.0.1) (2022-05-12)

### Bug Fixes

- add missing npmignore files ([2d8a4d0](https://github.com/cenk1cenk2/nestjs-tools/commit/2d8a4d0ed98c1261911628a446ec85666dd8290f))

# @cenk1cenk2/nestjs-redis-store [2.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@1.0.3...@cenk1cenk2/nestjs-redis-store@2.0.0) (2022-04-30)

### Performance Improvements

- update build system ([ebb7357](https://github.com/cenk1cenk2/nestjs-tools/commit/ebb7357b5cc3f6043e5171c8e3a883d723c294d8))

### BREAKING CHANGES

- does not support versions older then node16

## @cenk1cenk2/nestjs-redis-store [1.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@1.0.2...@cenk1cenk2/nestjs-redis-store@1.0.3) (2022-02-19)

### Bug Fixes

- update failing build, add missing dependencies ([ac7dca2](https://github.com/cenk1cenk2/nestjs-tools/commit/ac7dca229dfa99b19fd825d89687f7219950d37f))

## @cenk1cenk2/nestjs-redis-store [1.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@1.0.1...@cenk1cenk2/nestjs-redis-store@1.0.2) (2021-11-26)

### Bug Fixes

- add default types for redis stuff ([e4f0327](https://github.com/cenk1cenk2/nestjs-tools/commit/e4f0327ffcffc5f267adee364eae65b2084219c1))

## @cenk1cenk2/nestjs-redis-store [1.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-redis-store@1.0.0...@cenk1cenk2/nestjs-redis-store@1.0.1) (2021-11-26)

### Bug Fixes

- service names ([09eead5](https://github.com/cenk1cenk2/nestjs-tools/commit/09eead5c581bce026d33b39a3da4de2c977b244c))

# @cenk1cenk2/nestjs-redis-store 1.0.0 (2021-11-26)

### Features

- **redis:** changes how the options are handled, adds new redis package ([aee701a](https://github.com/cenk1cenk2/nestjs-tools/commit/aee701a52d5891728be4acd9e2e5e6d5bece1417))
