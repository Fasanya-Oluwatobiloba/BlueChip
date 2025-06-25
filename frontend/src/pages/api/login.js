let users = [
  { email: "nora@gmail.com", password: "123456" }, // example user
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Check for a matching user by email
    const user = users.find(
      (u) => u.email === username && u.password === password
    );

    if (user) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
