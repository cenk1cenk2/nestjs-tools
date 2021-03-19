## @cenk1cenk2/nestjs-transactions [3.1.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@3.1.0...@cenk1cenk2/nestjs-transactions@3.1.1) (2021-03-19)


### Bug Fixes

* timeout ([cff4466](https://github.com/cenk1cenk2/nestjs-tools/commit/cff44669957c23ca8dbf7b3bc752562427a41af4))

# @cenk1cenk2/nestjs-transactions [3.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@3.0.2...@cenk1cenk2/nestjs-transactions@3.1.0) (2021-02-25)


### Features

* add condition feature for transactions ([6262953](https://github.com/cenk1cenk2/nestjs-tools/commit/62629531b482332b213aec9cd46004c0e97f85a4))

## @cenk1cenk2/nestjs-transactions [3.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@3.0.1...@cenk1cenk2/nestjs-transactions@3.0.2) (2021-02-25)


### Bug Fixes

* transaction rollback problem ([21d566f](https://github.com/cenk1cenk2/nestjs-tools/commit/21d566fd536c52fde07f08b48d73feeb644578cf))

## @cenk1cenk2/nestjs-transactions [3.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@3.0.0...@cenk1cenk2/nestjs-transactions@3.0.1) (2021-02-09)


### Bug Fixes

* increase default timeout ([f003be6](https://github.com/cenk1cenk2/nestjs-tools/commit/f003be6fdc17b01fde3ea43e3920e48f97ea9ead))

# @cenk1cenk2/nestjs-transactions [3.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@2.1.0...@cenk1cenk2/nestjs-transactions@3.0.0) (2021-02-04)


### Performance Improvements

* refactored a little for work ([1643cc4](https://github.com/cenk1cenk2/nestjs-tools/commit/1643cc468d8e137cd4d5fe859e0ffeb857c7327d))


### BREAKING CHANGES

* - rollback is implemented differently
- createChildInstance is renamed to createChild with different typing.
- scope is changed to be singleton since the idea is to create child instances

# @cenk1cenk2/nestjs-transactions [2.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@2.0.1...@cenk1cenk2/nestjs-transactions@2.1.0) (2021-02-04)


### Bug Fixes

* fix failing build ([a0be410](https://github.com/cenk1cenk2/nestjs-tools/commit/a0be410e4abc9bb10c2425a76105747f88b50493))


### Features

* update transaction manager to have check ([597e27f](https://github.com/cenk1cenk2/nestjs-tools/commit/597e27f36d0cfec3419152d3fa87bfdbfd8a8b91))

## @cenk1cenk2/nestjs-transactions [2.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@2.0.0...@cenk1cenk2/nestjs-transactions@2.0.1) (2021-01-20)


### Bug Fixes

* compile to more legacy apps node 12 es15 ([f271708](https://github.com/cenk1cenk2/nestjs-tools/commit/f27170886addb0eae7837816a45b2267fc658abe))

# @cenk1cenk2/nestjs-transactions [2.0.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.2.0...@cenk1cenk2/nestjs-transactions@2.0.0) (2021-01-02)


### Features

* added rollback transaction as well ([40c6508](https://github.com/cenk1cenk2/nestjs-tools/commit/40c65086e9854641d2fb4d27f57ec4abb631e431))


### BREAKING CHANGES

* - changed the handling of how the transactions are getting added to
  list, there is now only one to add all, and it is determined by
  typeguards which list it gets added to.

# @cenk1cenk2/nestjs-transactions [1.2.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.1.0...@cenk1cenk2/nestjs-transactions@1.2.0) (2021-01-02)


### Features

* add creating a child instance ([b1291f6](https://github.com/cenk1cenk2/nestjs-tools/commit/b1291f6f5ad1be792c8897c193c96540947437d4))

# @cenk1cenk2/nestjs-transactions [1.1.0](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.0.4...@cenk1cenk2/nestjs-transactions@1.1.0) (2020-12-26)


### Features

* added new packages for pagination and stuff ([fa3b3ce](https://github.com/cenk1cenk2/nestjs-tools/commit/fa3b3ce8aa301e791b7131ed3cd6ee6280ef0ff0))

## @cenk1cenk2/nestjs-transactions [1.0.4](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.0.3...@cenk1cenk2/nestjs-transactions@1.0.4) (2020-12-25)


### Bug Fixes

* update type export ([7357c7b](https://github.com/cenk1cenk2/nestjs-tools/commit/7357c7b3e9c4881560b777b15c75ccade32e8fff))

## @cenk1cenk2/nestjs-transactions [1.0.3](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.0.2...@cenk1cenk2/nestjs-transactions@1.0.3) (2020-12-12)


### Bug Fixes

* add default to options ([d4876b7](https://github.com/cenk1cenk2/nestjs-tools/commit/d4876b7335725dccaebbd735f10d3540df6bea1c))

## @cenk1cenk2/nestjs-transactions [1.0.2](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.0.1...@cenk1cenk2/nestjs-transactions@1.0.2) (2020-12-12)


### Bug Fixes

* add graphql and authkey generator ([4828eac](https://github.com/cenk1cenk2/nestjs-tools/commit/4828eaccf5690ae2c9f1d7d022eeecde6979f7aa))

## @cenk1cenk2/nestjs-transactions [1.0.1](https://github.com/cenk1cenk2/nestjs-tools/compare/@cenk1cenk2/nestjs-transactions@1.0.0...@cenk1cenk2/nestjs-transactions@1.0.1) (2020-12-12)


### Bug Fixes

* update basic readmes ([2a874de](https://github.com/cenk1cenk2/nestjs-tools/commit/2a874de8c91b9c30bff02851488c5f1d2de1e312))

# @cenk1cenk2/nestjs-transactions 1.0.0 (2020-12-12)


### Bug Fixes

* fix build setup ([1f63051](https://github.com/cenk1cenk2/nestjs-tools/commit/1f6305118bf5d23d3f7ca45e9bd7c5cc8f3a452d))
* initial version and first publish ([69f9661](https://github.com/cenk1cenk2/nestjs-tools/commit/69f96619ac6f8dd32b045b6aa0c5c98557191915))
