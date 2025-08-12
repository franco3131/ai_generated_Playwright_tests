This Playwright automation requires an open AI Key in the ai/generateTest.js file. In the workflow file, the open ai key is called.
When creating the tests, i ran promps such as 'create several edge case scenarios' and a file is generated
I used command like 'node ai/generateTest.js "create several similar tests based on the template"' 

This repo uses github actions and runs tests when code push to main or prs targeting main and through workflow dispatch.

Additionally, test cases can be generated using the ai workflow in actions tab workflow dispatch. A pull request is created with the ai generated test case.
