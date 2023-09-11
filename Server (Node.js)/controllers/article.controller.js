const express = require('express')

router = express.Router();

 const service = require('../services/articles.service')

//http://localhost:3000/api/articles/ 
router.get("/", async (req,res)=>{
    const articles = await service.getAllArticles();
    res.send(articles)
})

const Joi = require('joi');
// Joi validation schema for the article object
const articleSchema = Joi.object({
    id : Joi.number().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    updatedAt: Joi.date().iso(),
    publishedBy: Joi.string().required(),
  });


 // http://localhost:3000/api/articles/ 
router.post("/", async (req,res)=>{
//Validation
    const { error, value } = articleSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

     await service.addArticles(req.body);
    res.status(201).send('created')
})


module.exports = router;