import 'dotenv/config'
import { pool } from '../database/connection.js'


const getAllPost = async () => {
    const { rows } = await pool.query('SELECT * FROM POSTS')
    return rows
}

const createLink = async ({ usuario, url, descripcion }) => {

    const query = {
        text: `
        INSERT INTO POSTS (usuario, url, descripcion) 
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        values: [usuario, url, descripcion]
    }

    const { rows } = await pool.query(query)
    return rows[0]

}

const putLikes = async (like) => {

    const query = {
        text: `
        UPDATE POSTS
        SET LIKES = COALESCE(LIKES, 0) + 1
        WHERE ID = $1 RETURNING *`,
        values: [like]
    }
    const { rows } = await pool.query(query)

    return rows[0]

}

export const LinkModel = {
    createLink,
    getAllPost,
    putLikes
}

