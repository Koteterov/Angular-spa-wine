const Item = require("../models/Item");

async function getAll(search) {
  const query = {};
  if (search) {
    query.name = new RegExp(search, "i");
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

async function like(itemId, userId) {
  const item = await Item.findById(itemId);

  if (item.likesList.some((x) => x == userId)) {
    throw new Error("You have already liked this item!");
  }
  item.likesList.push(userId);
  await item.save();
  return item;
}

async function unlike(itemId, userId) {
  return await Item.updateOne(
    { _id: itemId },
    { $pull: { likesList: userId } }
  );
}

module.exports = {
  getAll,
  getMy,
  create,
  getById,
  updateById,
  deleteById,
  like,
  unlike,
};
