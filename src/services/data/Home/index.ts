import { api } from "../../api"
export interface IHome {
    id?: number
    nome?: string
    especie?: string
    idade?: number
}
class AnimalData{
    index() {
        return api.get<IHome[]>('/animal')
    }
    store(data: IHome) {
        return api.post('/animal/', data)
    }
    destroy(id: number) {
        return api.delete(`'/animal/'${id}`)
    }
}
export default new AnimalData