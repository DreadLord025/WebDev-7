import { Injectable, NotFoundException, Response } from '@nestjs/common'
import { CreateITShopDto } from './dto/create-itshop.dto'
import { UpdateITShopDto } from './dto/update-itshop.dto'
import { DeepPartial, Repository } from 'typeorm'
import { ITShop } from './entities/itshop.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ITShopService {
  constructor(
    @InjectRepository(ITShop)
    private readonly itshopRepository: Repository<ITShop>,
  ) {}
  async create(createITShopDto: CreateITShopDto, id: number) {
    const newModel: DeepPartial<ITShop> = {
      id: Number(createITShopDto.id),
      user: {
        id,
      },
      model: createITShopDto.model,
      price: Number(createITShopDto.price),
    }
    return await this.itshopRepository.save(newModel)
  }

  async findAll(id: number) {
    return await this.itshopRepository.find({
      where: {
        user: { id },
      },
    })
  }

  async findOne(id: number) {
    const isExistModel = await this.itshopRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    })

    if (!isExistModel) throw new NotFoundException('Model not found')

    return isExistModel
  }

  async update(id: number, updateITShopDto: UpdateITShopDto, @Response() res) {
    const model = await this.itshopRepository.findOne({
      where: { id },
    })
    if (!model) throw new NotFoundException('Model not found!')

    res.status(200).send('Model has been successfully update!')
    return await this.itshopRepository.update(id, updateITShopDto)
  }

  async remove(id: number, @Response() res) {
    const isExistModel = await this.itshopRepository.findOne({
      where: { id },
    })
    if (!isExistModel) throw new NotFoundException('Model not found!')

    res.status(200).send('Model has been successfully delete!')
    return await this.itshopRepository.delete(id)
  }
}
