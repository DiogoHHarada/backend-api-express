import {deletePublication} from "../../models/publicationModel.js";

export const deletePubliController = async (req, res) => {
    const id = req.params.id        
    
    const result = await deletePublication(+id) // O "+" é para converter a string para número.

    return res.json({
        message: "Publicação deletada com sucesso!",
        publication: result
    })
}