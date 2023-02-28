const groupPhonesBySize = (list) => {
    return list.reduce((acc, cur) => {
        const size = cutString(cur.title) || "no size";

        return {
            ...acc,
            [size]: [...(acc[size] || []), cur]
        };
    }, {});
};

const cutString = (str) => str.replace(new RegExp(`.*?[0-9]{1,2}(.*)`), '$1');

module.exports = groupPhonesBySize;


