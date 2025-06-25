export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const validEmail = "nora@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
