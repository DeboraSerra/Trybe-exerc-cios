import ErrorCode from '../errors/ErrorCode';
import Plants, { IPlant } from '../models/Plants.model';

export default class PlantValidation {
  private plant: IPlant;
  private model: Plants;
  constructor(plant: IPlant, model: Plants) {
    this.plant = plant;
    this.model = model;
  }

  public async validateId(newInfo: boolean): Promise<void> {
    const { id } = this.plant;
    if (!id) throw new ErrorCode('Id is required', 400);
    const exists = await this.model.getPlantById(id);
    if (exists && newInfo) throw new ErrorCode('Id must be unique', 400);
  }

  public validateBool(): void {
    const { needsSun } = this.plant;
    if (needsSun === undefined) throw new ErrorCode('needSun is required', 400);
  }

  public validateFields(): void {
    const { breed, origin, size } = this.plant;
    if (!breed) throw new ErrorCode('breed is required', 400);
    if (!origin) throw new ErrorCode('origin is required', 400);
    if (!size) throw new ErrorCode('size is required', 400);
  }
}
