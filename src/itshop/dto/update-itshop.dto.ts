import { PartialType } from '@nestjs/mapped-types'
import { CreateITShopDto } from './create-itshop.dto'

export class UpdateITShopDto extends PartialType(CreateITShopDto) {}
