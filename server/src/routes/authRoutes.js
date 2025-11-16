import express from 'express';
import { verifyToken } from './middlewares/authMiddleware.js';

const router = express.Router();

router.get('/protected-route', verifyToken, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, you are authenticated` });
});
