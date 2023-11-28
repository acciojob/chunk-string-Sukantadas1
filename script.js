function stringChop(str, size) {
   // Check if the input string is null
  if (str === null) {
    return [];
  }

  // Initialize an array to store chunks
  const chunks = [];

  // Loop through the string with the specified chunk length
  for (let i = 0; i < str.length; i += chunkLength) {
    // Extract a chunk of the specified length
    const chunk = str.substring(i, i + chunkLength);
    // Add the chunk to the array
    chunks.push(chunk);
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
