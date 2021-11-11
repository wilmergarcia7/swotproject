var express = require('express');
var router = express.Router();
var SwotDao = require('./swot.dao');
var Swot = new SwotDao();

router.get('/', (req, res, next)=>{
  res.status(200).json({"msg":"Hi"});
});
//req.user._id
router.get('/all', async (req, res, next)=>{
    try{
      const allSwotEntries = await Swot.getAll();
      return res.status(200).json(allSwotEntries);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });

  router.post('/new', async (req, res, next)=>{
    try{
      const {
        swotType,
        swotDesc,
        swotMeta
      } = req.body;
      const swotMetaArray = swotMeta.split('|');
      // validaciones
      const result = await Swot.addNew(swotType, swotDesc, swotMetaArray); //, req.user._id
      console.log(result);
      res.status(200).json({msg:"Agregado Satisfactoriamente"});
    } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  });

module.exports = router;