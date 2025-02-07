import { useEffect, useState } from "react";
import { IHome } from "../../services/data/Home";
import { SSection } from "./styles";
import { AxiosError } from "axios";
import { apiProduto } from "../../services/data";
import { CompLoading } from "../../components";

export function Home() {
    const [dados, setDados] = useState<IHome[]>()
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        async function getHome() {
            try {
                setLoad(true)
                const resp = await apiProduto.index()
                setDados(resp.data)
            } catch (error) {
                const err = error as AxiosError
                console.log(err.response?.data)
            } finally {
                setLoad(false)
            }
        }
        getHome()
    },[])
    if(load){
        return <CompLoading />
    }
    return(
        <SSection>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Espécie</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                {dados && dados.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.especie}</td>
                        <td>{item.idade}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </SSection>
    )
}