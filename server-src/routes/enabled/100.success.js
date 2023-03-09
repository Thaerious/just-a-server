import Express from "express";
const router = Express.Router();

router.use("/success$", (req, res, next)=>{
    console.log("success");
    res.end();
});

export default router;