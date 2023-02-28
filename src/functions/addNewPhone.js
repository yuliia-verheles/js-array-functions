const addNewPhone = (phone, list) => [...list, {id: performance.now(), ...phone}];

module.exports = addNewPhone;