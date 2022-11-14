const Item = require("../models/Item");

async function getAll(query) {
  if (query) {
    const userId = query.split("=")[1].slice(1, -1);
    return Item.find({ _ownerId: userId });
  }
  return Item.find({});
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
  create,
  getById,
  updateById,
  deleteById,
};
