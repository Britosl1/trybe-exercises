const numToHundred = () => {
    const hundred = Math.floor(Math.random() * 101);
    return hundred;
};
numToHundred();

module.exports = { numToHundred }