import { getUsers } from "../../models/userModel.js"

export async function getUsersController(req, res){

    const user = req.body
    console.log("Dados recebidos para criação do usuario:", user)

    const result = await getUsers(user)

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}