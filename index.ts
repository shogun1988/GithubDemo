function findDuplicateCharacters(str: string): string[] {
    const charCount: { [key: string]: number } = {};
    const duplicates: string[] = [];

    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

// this a sample file for testing purpose

