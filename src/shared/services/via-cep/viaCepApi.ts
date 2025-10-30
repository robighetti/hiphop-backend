import axios from "axios"

export class ViaCepApi {
  static async getAddressByCep(cep: string) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return response.data
  }
}
