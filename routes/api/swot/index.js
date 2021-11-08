var express = require('express');
var router = express.Router();
var SwotDao = require('./swot.dao');
var Swot = new SwotDao();

router.get('/all', async (req, res, next)=>{
    try{
      const allSwotEntries = await Swot.getAll(req.user._id);
      return res.status(200).json(allSwotEntries);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });

  router.get('/byid/:id', async (req, res, next)=>{
    try {
      const {id} = req.params;
      const oneSwotEntry = await Swot.getById(id);
      return res.status(200).json(oneSwotEntry);
    } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  }); // byid

module.exports = router;