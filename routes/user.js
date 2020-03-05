const express=require('express');
const router=express.Router();

const controller=require("../controller/user");


router.get("/",controller.user_details);
router.post("/create",controller.user_create);
router.put("/:id",controller.user_update);
router.delete("/:id",controller.user_delete);



module.exports=router;
