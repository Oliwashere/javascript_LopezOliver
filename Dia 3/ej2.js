/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        for (const root of dictionary) {
            if (word.startsWith(root)) {
                words[i] = root;
                break;
            }
        }
    }

    const modifiedSentence = words.join(' ');

    return modifiedSentence;
};

const dictionary = ["cat", "bat", "rat"];
const sentence = "the cattle was rattled by the battery";
const modifiedSentence = replaceWords(dictionary, sentence);
console.log(modifiedSentence);