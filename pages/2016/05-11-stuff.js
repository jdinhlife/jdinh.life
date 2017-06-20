import React from 'react'

import Page from '../../modules/layout/main'

export default () =>
  <Page title='Stuff' date='2016-05-11'>{`

## Remove adjacent duplicated characters in js

A simple replace regular expression to remove adjacent duplicated characters from a given string in js

\`\`\`js
string.replace(/(.)(?=\\1)/g, '');
\`\`\`

For example

\`\`\`js
var string = 'aaaaaaaaaabccccccccccccccccccccdedfgh    ijjjjjjjjjjkkkkkkll';
var processed = string.replace(/(.)(?=\\1)/g, '');

// processed is now 'abcdedfgh ijkl'
\`\`\`

Explanation:
 - (.) : match one single character and capture it to \`group 1\`
 - (?=\\1) : positive look ahead, to match the results of \`group 1\` above, and not including the \`group 1\` in the results
 - /g : interate through the whole string

  `}</Page>