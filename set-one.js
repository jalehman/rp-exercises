// Let's practice writing some functions! This set covers some basic functions
// and some slightly more advanced ones involving arrays.

// =============================================================================
// 1. Write a function 'max' that takes two numbers and returns the largest one.
// =============================================================================



/*
 max(1, 2) // => 2
 max(7, 2) // => 7
 */

// =============================================================================
// 2. Write a function 'bigger' that takes two strings as arguments and returns
// the longer one.
// =============================================================================


/*
 bigger("yo", "wassup") // => "wassup"
 bigger("blah blah blah", "blah") // => "blah blah blah"
 */


// =============================================================================
// 3. Write a function 'repeat' that takes a string 's' and a number 'n' as
// arguments, and returns the string repeated 'n' times.
// =============================================================================


/*
 repeat("yo", 2) // => "yoyo"
 repeat("blah", 3) // => "blahblahblah"
 */

// =============================================================================
// 4. The `Math` object gives us lots of useful mathematical functions.
// `Math.random()` will return a random number between 0 and 1. Write a function
// called 'rand' that takes as an argument n, and returns a random number
// between 0 and n.
// =============================================================================


/*
 rand(10) // => 6.193910123 (but it's random, so you won't get this)
 rand(100) // => 72.194293930 (...)
 */

// =============================================================================
// 5. Write a function 'randInt' that takes a parameter n, uses the 'rand'
// function you wrote before to find a random number from 0 to n, but returns an
// _integer_ from 0 to n-1. HINT: Check out the Math.floor function -- it takes
// a number as an argument and returns the floor (Google "math floor" if this
// doesn't make sense).
// =============================================================================


/*
 randInt(10) // => 6 (but it's random, so you won't get this)
 randInt(100) // => 72 (...)
 */

// =============================================================================
// 6. Write a function 'randElement' that takes an array as an argument, and
// returns a random element in that array. A sample array has been provided.
// =============================================================================

var sampleArray = ["much", "very", "so", "such", "nice"];

/*
 randElement(sampleArray) // => "very"
 randElement(sampleArray) // => "so"
 */

// =============================================================================
// 7. Write a function 'longestWord' that takes a string and returns the longest
// word in that string.
// =============================================================================


/*
 longestWord("so much") // => "much"
 longestWord("The quick brown fox jumped over the lazy dog.") // => "jumped"
 */

// =============================================================================
// 8. Write a function 'remove' that takes two parameters: an array and a value.
// 'remove' should return a new array consisting of all elements except the
// input value.
// =============================================================================

/*
 remove([0,1,2,3,4,5], 4) // => [0,1,2,3,5]
 remove(["so", "much", "very", "nice"], "so") // => ["much", "very", "nice"]
 remove([0,1,2,3], 4) // => [0,1,2,3]
 remove([0,0,0,0], 0) // => []
 */

// =============================================================================
// 9. Write a function 'dogeSpeak' that takes an array of words, and converts
// them to sentences in "Doge Speak" (for more info on the 'doge', see
// http://knowyourmeme.com/memes/doge). Each word in the input array should be
// prefixed with a random word from the `dogeWords` array below (and
// capitalized) and followed with a period. All of the resulting sentences
// should be turned into one string (hint: joined), and then ended with the
// sentence "Wow."
//
// Challenge: Implement the function such that none of the dogeWords are
// repeated, and if there are more words in the input array than dogeWords, pick
// random words from the input until there are no more dogeWords. The output
// should still end in "Wow."
// =============================================================================

var dogeWords = ["much", "very", "so", "such", "nice"];

/*
 dogeSpeak(["Sublime Text", "JavaScript", "arrays"]) // => "Much Sublime Text. So JavaScript. Very arrays. Wow."
 dogeSpeak(["closures", "functions", "powerful", "coffee", "scope", "understanding"])
   // => "Nice functions. Very closures.  Much coffee. Such understanding. So powerful. Wow."
 */
