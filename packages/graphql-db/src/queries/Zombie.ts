import { gql } from 'apollo-boost'

const ZOMBIE_INTROSPECTION = gql`
  fragment ZombieIntrospection on Zombie {
    id
    mqttConnection {
      id
      address
      username
      password
    }
    directConnections {
      id
      address
    }
  }
`

export const CREATE_ZOMBIE = gql`
  mutation CreateZombie($id: ID!) {
    createZombie(id: $id) {
      ...ZombieIntrospection
    }
  }
  ${ZOMBIE_INTROSPECTION}
`

export const DELETE_ZOMBIE = gql`
  mutation DeleteZombie($id: ID!) {
    deleteZombie(id: $id)
  }
`

export const GET_ZOMBIE = gql`
  query GetZombie($id: ID!) {
    getZombie(id: $id) {
      ...ZombieIntrospection
    }
  }
  ${ZOMBIE_INTROSPECTION}
`
