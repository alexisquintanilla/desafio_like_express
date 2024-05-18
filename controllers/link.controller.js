import { LinkModel } from "../models/link.model.js";

export const getAllPost = async (req, res) => {
    try {
        const posts = await LinkModel.getAllPost()
        return res.json(posts)
    } catch (error) {
        console.log(error)
    }
}

export const postLink = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body
        const newPost = {
            usuario,
            url,
            descripcion
        }

        const post = await LinkModel.createLink(newPost)
        return res.json(post)

    } catch (error) {
        console.log(error)
    }
}

export const putLikes = async (req, res) => {
    try {
        const updateLikes = await LinkModel.putLikes(req.query.id)
        return res.json(updateLikes)
    } catch (error) {
        console.log(error)

    }
}

