const Input =
`{
   "glossary":{
      "title":"exampleglossary",
      "GlossDiv":{
         "title":"S",
         "GlossList":{
            "GlossEntry":{
               "ID":"SGML",
               "SortAs":"SGML",
               "GlossTerm":"StandardGeneralizedMarkupLanguage",
               "Acronym":"SGML",
               "Abbrev":"ISO8879:1986",
               "GlossDef":{
                  "para":"Ameta-markuplanguage,usedtocreatemarkuplanguagessuchasDocBook.",
                  "GlossSeeAlso":[
                     "GML",
                     "XML"
                  ]
               },
               "GlossSee":"markup"
            }
         }
      }
   }
}`

const validateBraces = (jsonString) => {
  const stack = [];
  const matchingBraces = {
      '}': '{',
      ']': '[',
      ')': '('
  };

  // Traverse through the jsonString
  for (let char of jsonString) {
      // Push opening braces onto the stack
      if (char === '{' || char === '[' || char === '(') {
          stack.push(char);
      }
      // For closing braces, check if they match the latest opening brace
      else if (char === '}' || char === ']' || char === ')') {
          // If stack is empty or top of stack doesn't match, return false
          if (!stack.length || stack.pop() !== matchingBraces[char]) {
              return false;
          }
      }
  }

  // If the stack is empty at the end, all braces were matched correctly
  return stack.length === 0;
}

console.log(validateBraces(Input))
