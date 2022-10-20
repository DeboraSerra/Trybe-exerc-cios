const db = {};

const fixing1 = db.restaurants.countDocuments({
  rating: {
    $not: { $lte: 5 },
  },
});

const fixing2 = db.restaurants.countDocuments({
  $or: [
    { rating: { $gte: 6 } },
    { borough: 'Brooklyn' },
  ],
});

const fixing3 = db.restaurants.countDocuments({
  $and: [
    { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } },
    { rating: { $gt: 4 } },
  ],
});

const fixing4 = db.restaurants.countDocuments({
  $nor: [
    { rating: 1 },
    { cuisine: 'American' }
  ]
});

const fixing5 = db.restaurants.countDocuments({
  $and: [
    { rating: { $gt: 6, $lt: 10 } },
    {
      $or: [
        { borough: 'Brooklyn' },
        { cuisine: { $ne: 'Delicatessen' } },
      ],
    },
  ],
});
