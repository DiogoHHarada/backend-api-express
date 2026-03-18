import { createPublication } from "../../models/publicationModel.js"

export async function createPubliController(req, res){

    const publication = req.body
    console.log("Dados recebidos para criação do usuario:", publication)

    const result = await createPublication(publication)

    res.json({
        message: "Usuário criado com sucesso!",
        publication: result
    })
}