const addPhoneColor = (id, color, list) => list.map(i => i.id === id ? {...i, colors: [...i.colors, color]} : i);

module.exports = addPhoneColor;