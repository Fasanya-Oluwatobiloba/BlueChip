let users = [
  { username: "nora", password: "123456" }, // Example user for testing
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Replace this with your actual credentials
    const validEmail = "nora@gmail.com";
    const validPassword = "password123";

    if (username === validEmail && password === validPassword) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
