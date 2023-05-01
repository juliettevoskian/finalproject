import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const place = (req, res, next) => {
    return User.create({
      name: req.body.name,
      order: req.body.order,
      address: req.body.address,
    })
      .then(() => {
        res.status(200).json({ message: 'Order placed!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(502).json({ message: 'Error while placing order' });
      });
  };

export { place }