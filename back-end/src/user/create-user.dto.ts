// src/user/dto/create-user.dto.ts

export class CreateUserDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
  ) {}
}
