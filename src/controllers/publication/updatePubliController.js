import {updatePublication} from "../../models/publicationModel.js";

export const updatePublicationController = async (req, res) => {
    const { id } = req.params
    const publication = req.body    

    const result = await updatePublication(publication, +id)

    return res.status(200).json({
        message: 'Publication updated successfully',
        publication: result
    })
}