import { SHeader } from "./styles";
import { Link } from "react-router-dom";
import { FcBiohazard } from "react-icons/fc";
export function Header() {
    return (
        <SHeader>
            <FcBiohazard size={70} />
        </SHeader>
    )
}