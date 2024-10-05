var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', { title: 'Application' });
});
router.get('/about',(req,res,next)=>{
  res.render('about',{ title: 'Application' })
})
router.get('/project',(req,res,next)=>{
  res.render('project')
})
router.get('/project/javascript',(req,res,next)=>{
  res.render('javascript')
})

module.exports = router;
