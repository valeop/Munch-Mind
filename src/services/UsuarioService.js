import axios from "axios"

const USUARIO_BASE_RES_API_URL = "http://localhost:8080/api/v1/usuarios"


class UsuarioService {
    getAllUsuarios() {
        return axios.get(USUARIO_BASE_RES_API_URL);
    }

    createUsuario(usuario) {
        return axios.post(USUARIO_BASE_RES_API_URL, usuario);
    }
}

export default new UsuarioService;