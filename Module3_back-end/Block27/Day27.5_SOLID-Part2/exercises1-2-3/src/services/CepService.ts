import { Cep } from '../interfaces';

class CepService {
  private readonly cepApi: Cep;

  constructor(cep: Cep) {
    this.cepApi = cep;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
