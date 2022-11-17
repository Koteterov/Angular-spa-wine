const Item = require("../models/Item");

async function getAll(search) {
  const query = {}
  if (search) {
    query.name = new RegExp(search, 'i')
  }
  return Item.find(query);
}

async function getMy(id) {
  return Item.find({ _ownerId: id });
}



async function create(item) {
  return Item.create(item);
}

async function getById(id) {
  return Item.findById(id);
}

async function updateById(existing, item) {
  existing.name = item.name;
  existing.type = item.type;
  existing.origin = item.origin;
  existing.price = item.price;
  existing.image = item.image;
  existing.description = item.description;
  await existing.save();

  return existing;
}

async function deleteById(id) {
  return await Item.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getMy,
  create,
  getById,
  updateById,
  deleteById,
};
