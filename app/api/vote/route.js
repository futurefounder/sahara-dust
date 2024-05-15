import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(req) {
  const { id } = await req.json();
  console.log("Received ID:", id); // Debug log

  if (!id) {
    return NextResponse.json({ error: "Invalid article ID" }, { status: 400 });
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      "UPDATE articles SET vote_count = vote_count + 1 WHERE id = $1 RETURNING vote_count",
      [id]
    );
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    console.log("Database result:", result.rows[0]); // Debug log
    return NextResponse.json(
      { message: "Vote registered", vote_count: result.rows[0].vote_count },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
