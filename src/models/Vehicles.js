const restful = require('node-restful');
const mongoose = restful.mongoose;

const vehiclesSchema = new mongoose.Schema({
  code: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  plate: { type: String, min: 2, max: 2 },
  price: { type: Number, min: 0 },
  category: { type: String, upperCase: true, required: true, 
    enum: ['CARRO', 'MOTO', 'CAMIONETE']}
});

module.exports = restful.model('vehicles', vehiclesSchema);