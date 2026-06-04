import requests

# Call GitHub API
url = "https://api.github.com/repos/veri-ai/Explore-Shape"
response = requests.get(url)
data = response.json()

# Assertions
assert response.status_code == 200, "Status code is not 200"
assert data["name"] == "Explore-Shape", "Repo name mismatch"
assert data["owner"]["login"] == "Veri-ai", "Owner mismatch"

print("✅ All tests passed!")
