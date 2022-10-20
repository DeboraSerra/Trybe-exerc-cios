import { Request, Response } from 'express';
import PlantsService from '../services/Plants.service';

export default class PlantsController {
  private service: PlantsService;
  constructor(service: PlantsService) {
    this.service = service;
  }

  public async getPlants(_req: Request, res: Response): Promise<void> {
    const plants = await this.service.getPlants();
    res.status(200).json({ plants });
  }

  public async getPlantById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const plant = await this.service.getPlantById(id);
    res.status(200).json({ plant });
  }

  public async removePlantById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const plant = await this.service.removePlantById(id);
    res.status(201).json({ plant });
  }

  public async getPlantsThatNeedsSunWithId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const plants = await this.service.getPlantsThatNeedsSunWithId(id);
    res.status(200).json({ plants });
  }

  public async editPlant(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const plant = await this.service.editPlant(id, req.body);
    res.status(201).json({ plant });
  }

  public async savePlant(req: Request, res: Response): Promise<void> {
    const plant = await this.service.savePlant(req.body);
    res.status(201).json({ plant });
  }
}
