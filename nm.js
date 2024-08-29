document.getElementById('numeronymForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const word = document.getElementById('inputText').value;
    const numeronym = generateNumeronym(word);
    document.getElementById('result').textContent = `Generated Numeronym: ${numeronym}`;
});

function generateNumeronym(word) {
    if (word.length <= 3) {
        return word;
    }
    return word[0] + (word.length - 2) + word[word.length - 1];
