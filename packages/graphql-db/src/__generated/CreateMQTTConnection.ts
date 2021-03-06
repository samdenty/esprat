/* tslint:disable */
// This file was automatically generated and should not be edited.

import { MQTTConnectionAuthInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: CreateMQTTConnection
// ====================================================

export interface CreateMQTTConnection_createMQTTConnection_zombies {
  id: string
}

export interface CreateMQTTConnection_createMQTTConnection {
  id: string
  address: string
  username: string | null
  password: string | null
  zombies: CreateMQTTConnection_createMQTTConnection_zombies[]
}

export interface CreateMQTTConnection {
  createMQTTConnection: CreateMQTTConnection_createMQTTConnection
}

export interface CreateMQTTConnectionVariables {
  address: string
  auth?: MQTTConnectionAuthInput | null
}
