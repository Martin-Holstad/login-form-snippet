export default async function login(email, passowrd) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const user = users.find((user) => user.email === email && user.password === passowrd);

  if (!user) {
    const error = new Error("Invalid credentials");
    error.code = "auth/invalid-credential";
    throw error;
  }

  return user;
}

const users = [{ id: 1, email: "eksample@gmail.com", password: "pass123" }];
