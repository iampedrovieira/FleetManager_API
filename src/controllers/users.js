require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_company_info(req, res) {
    const { companyKey } = req.body;
    console.log(companyKey)
    try{
      await connection
      .query("Select * from company where company_key=:firebasekey", {
        replacements: { firebasekey:companyKey },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0][0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
  async get_employee_info(req, res) {
    const { firebaseKey } = req.body;
    try{
      await connection
      .query("Select * from employee where employee_key=:firebasekey", {
        replacements: { firebasekey:firebaseKey },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0][0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },

  async get_employee_trips(req, res) {
    const { firebaseKey } = req.body;
    try{
      await connection
      .query("Select * from trip where employee_key=:firebasekey", {
        replacements: { firebasekey:firebaseKey },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
  async get_chat_users(req, res) {
    const { companyKey,userKey } = req.body;
    var final_results
    try{
      await connection
      .query("Select * from employee where company_key=:companyKey and employee_key!=:employee", {
        replacements: { companyKey:companyKey,employee:userKey },
      })
      .then(async(results) => {
        if(results[0].length>0){
          final_results=results[0]
          
          await connection
          .query("Select * from company where company_key=:companyKey", {
            replacements: { companyKey:companyKey}})
          .then(async(results) => {
            if(results[0].length>0){
              
              admin = {
                "employee_key": results[0][0].company_key,
                "employee_name": results[0][0].company_name +" Boss",
                "phone_number": " ",
                "employee_address": " ",
                "picture": null,
                "company_key": results[0][0].company_key,
                "on_service": null
              }
              final_results.push(admin)
              return res.json(final_results);

            }
          });
          
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
}
