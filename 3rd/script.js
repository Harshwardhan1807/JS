// Utility function to clear outputs and errors
function clearOutput(id) {
  document.getElementById(id + 'Output').innerText = '';
  document.getElementById(id + 'Error').innerText = '';
}

// Reverse string function
function reverseString() {
  clearOutput('reverse');
  const input = document.getElementById('reverseInput').value.trim();
  if (!input) {
    document.getElementById('reverseError').innerText = 'Please enter a valid string.';
    return;
  }
  const reversed = input.split('').reverse().join('');
  document.getElementById('reverseOutput').innerText = 'Reversed: ' + reversed;
}

// Reset reverse section
function resetReverse() {
  document.getElementById('reverseInput').value = '';
  clearOutput('reverse');
}

// Replace characters function
function replaceCharacters() {
  clearOutput('replace');
  const input = document.getElementById('replaceInput').value;
  const from = document.getElementById('replaceFrom').value;
  const to = document.getElementById('replaceTo').value;

  if (!input.trim()) {
    document.getElementById('replaceError').innerText = 'Original string cannot be empty.';
    return;
  }
  if (from.length !== 1) {
    document.getElementById('replaceError').innerText = 'Character to replace must be a single character.';
    return;
  }
  if (to.length !== 1) {
    document.getElementById('replaceError').innerText = 'Replacement must be a single character.';
    return;
  }
  if (!input.includes(from)) {
    document.getElementById('replaceError').innerText = `The character "${from}" is not present in the original string.`;
    return;
  }

  const replaced = input.split(from).join(to);
  document.getElementById('replaceOutput').innerText = 'Replaced String: ' + replaced;
}

// Reset replace section
function resetReplace() {
  document.getElementById('replaceInput').value = '';
  document.getElementById('replaceFrom').value = '';
  document.getElementById('replaceTo').value = '';
  clearOutput('replace');
}

// Palindrome checker
function checkPalindrome() {
  clearOutput('palindrome');
  const input = document.getElementById('palindromeInput').value.trim();
  if (!input) {
    document.getElementById('palindromeError').innerText = 'Please enter a valid string.';
    return;
  }
  const clean = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPalindrome = clean === clean.split('').reverse().join('');
  document.getElementById('palindromeOutput').innerText = isPalindrome
    ? 'Yes, it is a palindrome.'
    : 'No, it is not a palindrome.';
}

// Reset palindrome section
function resetPalindrome() {
  document.getElementById('palindromeInput').value = '';
  clearOutput('palindrome');
}