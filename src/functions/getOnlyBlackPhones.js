const getOnlyBlackPhones = (list) => list.filter(item => item.colors.some(i => i === 'black'));

module.exports = getOnlyBlackPhones;