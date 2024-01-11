import { Test, TestingModule } from '@nestjs/testing';
import { ITShopService } from './itshop.service';

describe('ITShopService', () => {
  let service: ITShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ITShopService],
    }).compile();

    service = module.get<ITShopService>(ITShopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
