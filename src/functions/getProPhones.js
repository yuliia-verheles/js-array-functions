const getProPhones = (list) => list.filter(i => i.title.toLowerCase().includes('pro'));

module.exports = getProPhones;