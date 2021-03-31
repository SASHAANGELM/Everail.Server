
const { getDB } = require('./db.js');
const { Abyss } = require('../graphql/models');

getDB().then(async (db) => {
  // ToDo: Migrate your date here

  // const res = await Abyss.find();
  // res.forEach(async (record) => {
    // const looted = record.looted + 3;

    // const a = looted % 3;
    // const b = looted - a;
    // const c = b / 3;

    // const loot = {
    //   first: c,
    //   second: c,
    //   third: c
    // };

    // if (a === 2) {
    //   loot.first++;
    //   loot.second++;
    // } else if (a === 1) {
    //   loot.first++;
    // }
    // const newRecord = {
    //   ...record.toObject(),
    //   loot
    // };
    // delete newRecord._id;

    // console.log('newRecord', newRecord)

    // record.looted = undefined;

    // await record.save();

    // await Abyss.findByIdAndUpdate(record._id, newRecord);
  // });
  // console.log('res', res);
  
})
