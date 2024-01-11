import { Test, TestingModule } from '@nestjs/testing'
import { ITShopController } from './itshop.controller'
import { ITShopService } from './itshop.service'

describe('ITShopController', () => {
  let controller: ITShopController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ITShopController],
      providers: [ITShopService],
    }).compile()

    controller = module.get<ITShopController>(ITShopController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
