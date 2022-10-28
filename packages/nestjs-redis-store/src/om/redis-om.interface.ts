export interface RedisOmModuleOptions {
  global?: boolean
  /** connection url to redis instance */
  url?: string
  /** interval to check whether the connection is open */
  healthCheckInterval?: number
}
