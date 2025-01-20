import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    // Sending POST request to the login route
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Parsing response if successful
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}



export { login };
