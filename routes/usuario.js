const { Router } = require("express");
const { userGet, userPost, userPut, userDelete } = require("../controllers/usuarios");

const router=Router();



router.get('/', userGet)
router.post('/', userPost)
router.put('/:id', userPut)
router.put('/', userDelete)
module.exports=router;