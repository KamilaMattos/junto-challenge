export interface IUserRequest {
  name: string
  email: string
  password: string
}

export interface IUser {
  id: string
  nome: string
  email: string
  criadoEm: Date
  atualizadoEm: Date
}

export interface IUserLogin {
  email: string
  password: string
}
