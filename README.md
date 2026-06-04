## API Testing Playground
A demo project showcasing automated API testing with Postman, Node.js, and Python.

### Features
- Validates responses from public APIs (e.g., GitHub API)
- Automated assertions for status codes and response fields
- Multiple approaches:
  - Tool-based testing (Postman collection with screenshots)
  - Code-based testing (`apiTest.js` in Node.js, `apiTest.py` in Python)
- Exported Postman collection JSON for reproducibility

### How to Run
1. Import `API_Testing.postman_collection.json` into Postman Web.
2. Click **Send** on the request.
3. View results in the **Tests tab → Test Results** section.
4. Or run locally:
   - Node.js: `node apiTest.js`
   - Python: `python apiTest.py`
