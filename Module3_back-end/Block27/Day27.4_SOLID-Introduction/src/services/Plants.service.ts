import ErrorCode from '../errors/ErrorCode';
import Plants, { IPlant } from '../models/Plants.model';
import PlantValidation from '../validations/ValidatePlant';

class PlantsService {
  private model: Plants;
  constructor(model: Plants) {
    this.model = model;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plants = await this.model.getPlants();
    return plants;
  }

  public async getPlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plant = await this.model.getPlantById(id);
    if (!plant) throw new ErrorCode('Plant not found', 404);
    return plant;
  }

  public async removePlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plant = await this.model.removePlantById(id);
    if (!plant) throw new ErrorCode('Plant not found', 404);
    return plant;
  }

  public async getPlantsThatNeedsSunWithId(
    id: string,
  ): Promise<IPlant[]> {
    const plants = await this.model.getPlantsThatNeedsSunWithId(id);
    return plants;
  }

  public async editPlant(
    plantId: string,
    newPlant: IPlant,
  ): Promise<IPlant> {
    const validator = new PlantValidation(newPlant, this.model);
    validator.validateId(false);
    validator.validateBool();
    validator.validateFields();
    const plant = await this.model.editPlant(plantId, newPlant);
    return plant;
  }

  public async savePlant(
    plant: IPlant,
  ): Promise<IPlant> {
    const validator = new PlantValidation(plant, this.model);
    validator.validateId(true);
    validator.validateBool();
    validator.validateFields();
    const newPlant = await this.model.savePlant(plant);
    return newPlant;
  }
}

export default PlantsService;
