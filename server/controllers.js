const db = require('./db')

const getAllCows = (req, res) => {
  const queryGetAllCows = `select * from cows;`;

  try {
    db.query(queryGetAllCows, (err, results) => {
      if (err) {
        res.status(501).send(err);
      } else {
      res.status(200).send(results)
      }
    })

  } catch (error) {
    //  handle the error with db
    res.status(501).send(error)
  }

};


//   var queryPost = "INSERT INTO cows (cowName, cowDescription) VALUES( ?, ?)"
//   var insertVals = [req.body.cowName, req.body.cowDescription];



const createCow = (req, res) => {
  const { cowName, cowDescription } = req.body;
  const createQuery = `INSERT INTO cows (cowName, cowDescription) VALUES(? , ?)`;

  // handle for bad request
  if (!(cowName && cowDescription)){
    res.status(400).send('send name AND description in body')
    return
  }

  try {
    //  create a cow in the db
    db.query(createQuery, [cowName, cowDescription], (err, results) => {
      if (err) {
        res.status(501).send(err)
      } else {
          //  send back new cow obj
          res.status(201).send(results)
      }
    });
  } catch (error) {
    res.status(501).send(error)
  }
};


const getCowById = (req, res) => {
  const { id } = req.params;
  const queryGetCowById = `select * from cows where cowId=(?)`;

    // handle for bad request
  if (!id){
    res.status(400).send('this cow does not have an ID; enter one!')
    return
  }

  try {
    // get cowByid query
    db.query(queryGetCowById, [id] ,(err, results) => {
      if(err){
      res.status(501).send(err)
      } else {
      res.status(200).send(results)
      }
    });

  } catch (err) {
      res.status(501).send(err)
    }
};

const deleteCowById = (req, res) => {
  const { id } = req.params;
  const deleteCowById = `delete from cows WHERE cowId = (?)`;

  if (!id){
    res.status(400).send('the cow you are trying to create does not have an ID; enter one!')
    return
  }

  try {
    // delete the cows by ID
    db.query(deleteCowById, [id] ,(err, results) => {
      if(err){
      res.status(501).send(err)
      } else {
      res.status(200).send(results)
      }
    });
  } catch (error) {
    res.status(501).send('no cow')
  }
};


module.exports = {
  getAllCows,
  createCow,
  getCowById,
  deleteCowById,
}