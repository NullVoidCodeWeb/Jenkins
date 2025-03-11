const express = require('express');
const router = express.Router();

// Simple GET API endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;