## Points to remember

1. While taking a number as an input, use `parseInt()` as input values are always strings.

2. Difference between `innerHTML` and `innerText`:

   - Use `innerHTML` to insert or read HTML content (like bold text or lists), and `innerText` to get or set plain text without any formatting or tags.  
   - `element.innerHTML = "<b>Hello</b>";` → displays **Hello** in bold.  
   - `element.innerText = "<b>Hello</b>";` → displays `<b>Hello</b>` literally.

