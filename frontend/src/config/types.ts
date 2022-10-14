export interface Address {
  4?: string
  3?: string
  1: string
}

export interface Token {
  id: number
  name: string
  symbol: string
  address: Address
  decimals: number
  isNative?: boolean
}

export interface GameConfig {
  id: number
  name: string
  description: string
  dbSymbol: string
  image: string
  link: string
}
