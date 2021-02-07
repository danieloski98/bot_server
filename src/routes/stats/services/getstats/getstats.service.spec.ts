import { Test, TestingModule } from '@nestjs/testing';
import { GetstatsService } from './getstats.service';

describe('GetstatsService', () => {
  let service: GetstatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetstatsService],
    }).compile();

    service = module.get<GetstatsService>(GetstatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
