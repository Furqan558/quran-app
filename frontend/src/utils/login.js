// Mock credentials
const mockUsername = "mockUser";
const mockPassword = "mockPassword";

export default async function loginWithMockUser() {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: mockUsername, password: mockPassword }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save the token
      console.log("Logged in successfully");
    } else {
      throw new Error("Failed to log in");
    }
  } catch (error) {
    console.error(error);
  }
}
