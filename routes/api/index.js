var express = require('express');
var router = express.Router();

var swotRouter = require('./swot/index');

router.get('/', (req, res, next)=>{
        res.status(200).json({"msg":"Api V1 JSON"});
});

router.use('/swot', swotRouter);
//router.use('/swot', jwtMiddleware ,swotRouter);

module.exports = router;