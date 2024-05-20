import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request) {
  const { link, notify, email } = await request.json();

  if (!link || !link.startsWith("http")) {
    return new Response(JSON.stringify({ error: "Invalid link" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (notify && (!email || !email.includes("@"))) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const client = await pool.connect();
    await client.query(
      "INSERT INTO study_links (link, notify, email) VALUES ($1, $2, $3)",
      [link, notify, email]
    );
    client.release();

    return new Response(JSON.stringify({ message: "Submission received" }), {
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
