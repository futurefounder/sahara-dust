import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const client = await pool.connect();
    await client.query("INSERT INTO subscriptions (email) VALUES ($1)", [
      email,
    ]);
    client.release();

    return new Response(JSON.stringify({ message: "Email received" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
