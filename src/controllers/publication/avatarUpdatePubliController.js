import { updatePublication } from "../../models/publicationModel.js";

export async function avatarUpdatePubliController(req, res){
        const {id} = req.params
        const publication = req.body

        const result = await updatePublication(publication, +id)

        return res.json({
            message: "Avatar atualizado com sucesso!",
            publication: result
        })
}
