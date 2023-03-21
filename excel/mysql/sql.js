module.exports = {
  customerList: `SELECT * FROM customers`,
  customerInsert: `insert into customers set ?`,
  customerUpdate: `update customers set ? where id=?`,
  customerDelete: `DELETE FROM customers WHERE id=?`,
};
