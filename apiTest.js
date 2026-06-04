// apiTest.js
const fetch = require("node-fetch");

async function testGitHubAPI() {
  const response = await fetch("https://api.github.com/repos/veri-ai/Explore-Shape");
  
  // Assertion 1: Status code
  if (response.status !== 200) {
    throw new Error(`Expected 200, got ${response.status}`);
  }

  const data = await response.json();

  // Assertion 2: Check repo name
  if (data.name !== "Explore-Shape") {
    throw new Error(`Repo name mismatch: ${data.name}`);
  }

  // Assertion 3: Check owner
  if (data.owner.login !== "Veri-ai") {
    throw new Error(`Owner mismatch: ${data.owner.login}`);
  }

  console.log("✅ All API tests passed!");
}

testGitHubAPI().catch(err => {
  console.error("❌ Test failed:", err.message);
});
