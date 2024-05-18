import { Router } from "express";
import { getAllPost, postLink, putLikes } from "../controllers/link.controller.js";

const router = Router()

router.get('/posts', getAllPost)
router.post('/post', postLink)
router.put('/post', putLikes)


export default router