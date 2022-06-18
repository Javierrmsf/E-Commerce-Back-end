const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({
    include:
    {
      model: Product,
     
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then (tData => res.json (tData)).catch(err => { console.log(err), res.status(500).json(err);});
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
  .then (tData => res.json (tData)).catch(err => { console.log(err), res.status(500).json(err);});
});


router.post('/', (req, res) => {
  // create a new tag

  Tag.create({
    
    tag_name: req.body.tag_name
  })
  .then (tData => res.json (tData)).catch(err => { console.log(err), res.status(500).json(err);});
});


router.put('/:id', (req, res) => {
Tag.update(req.body, {
  where: {
   id:req.params.id
  }
})
.then(tData =>
  {
    if (!tData){
      res.status(404).json({message: 'Tag not found'});

      return;
      

    }
  })



})
  










router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
