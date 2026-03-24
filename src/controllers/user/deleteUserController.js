import { deleteUser } from "../../models/userModel.js"

export const deleteUserController = async (req, res) => {
    const id = req.params.id

    const result = await deleteUser(+id) // O "+" é para converter a string para número.

    return res.json({
        message: "Usuário deletado com sucesso!",
        user: result
    })
}