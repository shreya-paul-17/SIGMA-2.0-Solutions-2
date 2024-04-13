// A function that examines a sentence and counts how many times each unique word appears in it using Map

function wordCounter (sentence){
    let words = sentence.toLowerCase().split(/\s+/) // Converting the words in to lowercase and splitting them by whitespace characters

    let wordFrequencyMap = new Map () //Creating a new map

    // Iterating through each word in the array 
    for (const word of words) {
        if (word === ' ')
        continue;
        if (wordFrequencyMap.has(word)) {
            wordFrequencyMap.set(word, wordFrequencyMap.get(word)+1) // If the word is present more than once in the map then the frequency will be incremented by 1
        } else {
            wordFrequencyMap.set(word,1) // Otherwise the frequency will remain 1
        }
    }
    
    return wordFrequencyMap
}

const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordCounter(sentence)

console.log(result);