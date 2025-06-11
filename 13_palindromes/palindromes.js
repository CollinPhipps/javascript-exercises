const palindromes = function (word) {
    word = word.split("").filter((char) => /^[a-zA-Z]$/.test(char) || /^[0-9]$/.test(char)).map((char) => char.toLowerCase());

    l = 0;
    r = word.length - 1;
    while (l <= r) {
        if (word[l] !== word[r])
            return false;

        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
