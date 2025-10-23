function reverseString() {
  document.getElementById('reverse').innerText = '';
  const input = document.getElementById('reverseInput').value.trim();
  const output = document.getElementById('reverse');

  if (!input) {
    output.innerText = 'Please enter a valid string.';
    return;
  }

  const reversed = input.split('').reverse().join('');
  output.innerText = 'Reversed: ' + reversed;
}

function resetReverse() {
  document.getElementById('reverseInput').value = '';
  document.getElementById('reverse').innerText = '';
}

function replaceCharacters() {
  document.getElementById('replace').innerText = '';
  const input = document.getElementById('replaceInput').value;
  const from = document.getElementById('replaceFrom').value;
  const to = document.getElementById('replaceTo').value;
  const output = document.getElementById('replace');

  if (!input.trim()) {
    output.innerText = 'Original string cannot be empty.';
    return;
  }
  if (from.length !== 1) {
    output.innerText = 'Character to replace must be a single character.';
    return;
  }
  if (to.length !== 1) {
    output.innerText = 'Replacement must be a single character.';
    return;
  }
  if (!input.includes(from)) {
    output.innerText = `The character "${from}" is not present in the original string.`;
    return;
  }

  const replaced = input.split(from).join(to);
  output.innerText = 'Replaced String: ' + replaced;
}

function resetReplace() {
  document.getElementById('replaceInput').value = '';
  document.getElementById('replaceFrom').value = '';
  document.getElementById('replaceTo').value = '';
  document.getElementById('replace').innerText = '';
}

function checkPalindrome() {
  document.getElementById('palindrome').innerText = '';
  const input = document.getElementById('palindromeInput').value.trim();
  const output = document.getElementById('palindrome');

  if (!input) {
    output.innerText = 'Please enter a valid string.';
    return;
  }

  const clean = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPalindrome = clean === clean.split('').reverse().join('');
  output.innerText = isPalindrome
    ? 'Yes, it is a palindrome.'
    : 'No, it is not a palindrome.';
}

function resetPalindrome() {
  document.getElementById('palindromeInput').value = '';
  document.getElementById('palindrome').innerText = '';
}