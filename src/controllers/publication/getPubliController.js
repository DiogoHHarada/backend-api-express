import { getPublications } from "../../models/publicationModel.js"

export async function getPubliController(req, res){

    const publication = req.body
    console.log("Dados recebidos para criação do usuario:", publication)

    const result = await getPublications(publication)

    res.json({
        message: "Usuário criado com sucesso!",
        publication: result
    })
}