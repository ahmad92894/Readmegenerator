function renderLicenseBadge(license) 
{
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}


function generateMarkdown(data) {
return `
# ${data.Title}
 
## Description
${data.Description}

${renderLicenseBadge(data.license)}

---
## Table of Contents 
    
    
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Usage](#usage)
   4. [License](#license)
   5. [Contributing](#contributing)
   6. [Tests](#tests)
   7. [Questions](#questions)

---
## Installation
    ${data.Installation}
    
---
## Usage
 I want to create a README generator 
 so that i can quickly create a professional README file 
 for any new projects that i may have to make
  
    
---
## License
    license used for this project if any, ${data.license}
    
    
---    
## How to Contribute
    ${data.contributing}
    
---   
## Tests
    ${data.tests}
    
## Questions
    ${data.questions}
---
## Contact me
    ${data.github}
    ${data.email}
`;
}

module.exports = generateMarkdown;
