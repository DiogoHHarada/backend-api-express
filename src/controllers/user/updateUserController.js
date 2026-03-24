import { updateUser } from "../../models/userModel.js";

export const updateUserController = async (req, res) => {
    const { id } = req.params
    const user = req.body

    const result = await updateUser( user, +id)

    return res.status(200).json({
        message: 'User updated successfully',
        user: result
    })
}