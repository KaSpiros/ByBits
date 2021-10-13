import axios from "axios";

export async function login(email, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      environment: "mock",
    },
  };
  const body = JSON.stringify({
    username: email,
    password: password,
    type: "USER_PASSWORD_AUTH",
  });
  try {
    const res = await axios.post(
      `https://api.bybits.co.uk/auth/token`,
      body,
      config
    );
    document.cookie = `ByBits-Token=${res.data.access_token}`;
    return res.data;
  } catch (error) {
    const errors = error.response.data.errors;
    return errors;
  }
}

export function logout() {
  document.cookie = "ByBits-Token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
