require('dotenv').config();
const jwt = require('jsonwebtoken');

console.log('Testing JWT configuration...');
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('JWT_SECRET length:', process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 'NOT SET');

// Test JWT signing
if (process.env.JWT_SECRET) {
  try {
    const testPayload = { userId: 'test123', username: 'testuser' };
    const token = jwt.sign(testPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ JWT signing works!');
    console.log('Sample token:', token);

    // Test verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ JWT verification works!');
    console.log('Decoded payload:', decoded);
  } catch (error) {
    console.error('❌ JWT error:', error.message);
  }
} else {
  console.error('❌ JWT_SECRET is not set in environment variables');
}
