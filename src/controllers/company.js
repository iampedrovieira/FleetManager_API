require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_company_vehicle(req, res) {
    const { companyKey } = req.body;
    try {
      await connection
        .query("Select * from vehicle where company_key=:companyKey", {
          replacements: { companyKey: companyKey },
        })
        .then(async (results) => {
          if (results[0].length > 0) {
            return res.json(results[0]);
          }
        });
    } catch (error) {
      console.log(error);
      return res.json("Erro interno");
    }
  },

  async get_company_employees(req, res) {
    const { companyKey } = req.body;
    try {
      await connection
        .query("Select * from employee where company_key=:companyKey", {
          replacements: { companyKey: companyKey },
        })
        .then(async (results) => {
          if (results[0].length > 0) {
            return res.json(results[0]);
          }
        });
    } catch (error) {
      console.log(error);
      return res.json("Erro interno");
    }
  },

  async get_company_chart1(req, res) {
    const { companyKey } = req.body;

    try {
      await connection
        .query(
          "SELECT DATE_TRUNC('month',actions.date) AS  mes, SUM(actions.cost) as gastos FROM actions, vehicle, company " +
            "WHERE actions.license_plate = vehicle.license_plate AND vehicle.company_key = :companyKey AND vehicle.company_key = company.company_key " +
            "GROUP BY mes;",
          {
            replacements: { companyKey: companyKey },
          }
        )
        .then(async (results) => {
          if (results[0].length > 0) {
            return res.json(results[0]);
          }
        });
    } catch (error) {
      console.log(error);
      return res.json("Erro interno");
    }
  },

  async get_company_chart2(req, res) {
    const { companyKey } = req.body;

    try {
      await connection
        .query(
          "SELECT actions.license_plate, SUM(cost) as costs FROM actions, vehicle, company " +
            "WHERE actions.license_plate = vehicle.license_plate AND vehicle.company_key = :companyKey AND vehicle.company_key = company.company_key " +
            "GROUP BY actions.license_plate " +
            "ORDER BY costs DESC " +
            "LIMIT 10",
          {
            replacements: { companyKey: companyKey },
          }
        )
        .then(async (results) => {
          if (results[0].length > 0) {
            return res.json(results[0]);
          }
        });
    } catch (error) {
      console.log(error);
      return res.json("Erro interno");
    }
  },
};
