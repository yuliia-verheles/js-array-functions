const getAvailablePhones = (list) => list.filter(i => i.quantity > 0);

module.exports = getAvailablePhones;