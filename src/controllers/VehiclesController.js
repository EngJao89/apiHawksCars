const Vehicles = require('../models/Vehicles');

module.exports = {
  async store(req, res) { 
    const { code, brand, description, plate, price, category } = req.body;

    let vehicle = await Vehicles.findOne({ code });

      if(!vehicle) {
        vehicle = await Vehicles.create({ code, brand, description, plate, price, category });
      }

      return res.json({ vehicle });
  },

  async show(req, res) { 
    const vehicle = await Vehicles.find({});

    return res.json(vehicle);
  },

  async update(req, res) { 
    const { code, brand, description, plate, price, category } = req.body
    const { vehicle_id } = req.params;
    const vehicle = await Vehicles.findByIdAndUpdate(vehicle_id, { code, brand, description, plate, price, category });

    return res.json(vehicle);
  },

  async delete(req, res) {
    const { vehicle_id } = req.params;
    const vehicle = await Vehicles.findByIdAndDelete(vehicle_id);

    return res.json(vehicle);
  }
}