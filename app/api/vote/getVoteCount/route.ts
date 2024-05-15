import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing article ID" }, { status: 400 });
  }

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT vote_count FROM articles WHERE id = $1",
      [id]
    );
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const voteCount = result.rows[0].vote_count;
    return NextResponse.json({ vote_count: voteCount }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
