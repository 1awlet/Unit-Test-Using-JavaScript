import express from 'express';
const router = express.Router();
let emplooyes = 
   [
      {
         id: 1, 
         name: "Samuel", 
         job:"Front-end developer",
         Company:"Google"
      },
      {
        id: 2, 
        name: "Gele", 
        job:".Net developer",
        Company:"Microsoft"
     },{
        id: 3, 
        name: "Jamie", 
        job:"Full-stack developer",
        Company:"Freelancer"
     },
     {
        id: 4, 
        name: "Karin", 
        job:"Front-end developer",
        Company:"Google"
     },
     {
       id: 5, 
       name: "Neo", 
       job:"QA",
       Company:"Microsoft"
    },{
       id: 6, 
       name: "Amanda", 
       job:"Full-stack developer",
       Company:"Freelancer"
    }
   ];


router.get('/', function(req, res){
    res.json(emplooyes);
  
});


router.get('/:id', function(req, res){
    //Modified
    const emplooyID = req.params['id'];
    const chosenEmplooye = emplooyes.find((employee) => employee.id === parseInt(emplooyID));
 
 
    if(chosenEmplooye){
       //res(spell);
       res.json(chosenEmplooye);
 
    }
   
 });



module.exports={
    router: router,
    emplooyes:emplooyes
 } 
 