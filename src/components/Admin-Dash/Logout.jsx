
import { useNavigate, Navigate } from 'react-router'

function Logout() {
    const token = localStorage.removeItem("token")
    return <Navigate to={"/admin"} />
}

export default Logout
