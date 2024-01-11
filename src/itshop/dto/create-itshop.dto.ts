import { IsNotEmpty } from 'class-validator'

export class CreateITShopDto {
  @IsNotEmpty()
  public id: number

  @IsNotEmpty()
  public model: string

  public price: number
  public warranty: number
}
