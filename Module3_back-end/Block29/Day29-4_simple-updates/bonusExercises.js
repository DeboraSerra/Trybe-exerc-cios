const db = {};

// 14
db.xmen.updateMany({ class: 'unknown' }, {
  $unset: { class: '' },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 15
db.xmen.updateMany({}, {
  $rename: { name: 'hero_name', true_name: 'full_name' },
  $set: { power: 100 },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 16
db.xmen.updateMany({  class: { $in: ['omega', 'gama'] } }, {
  $max: { power: 500 },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 17
db.xmen.updateMany({  class: 'gama' }, {
  $min: { power: 300 },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 18
db.xmen.updateMany({  class: { $exists: false } }, {
  $inc: { power: -100 },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 19
db.xmen.updateMany({ $or: [
  { occupation: 'Senior Staff', power: { $gt: 100 } },
  { occupation: 'Junior Staff', power: { $gt: 200 } },
] }, {
  $set: { areas: ['Students Room'] },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})

// 20
db.xmen.updateMany({ occupation: 'Junior Staff', areas: { $exists: false } }, {
  $set: { areas: ['Outside'] },
  $currentDate: { lastUpdate: { $type: 'timestamp' } }
})
