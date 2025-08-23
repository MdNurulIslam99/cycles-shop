import dbConnect from "@/lib/dbConnection";

export async function POST(req) {
  try {
    const data = await req.json(); // Get JSON data from frontend

    const productCollection = await dbConnect("products");

    const result = await productCollection.insertOne(data);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  try {
    const allProductCollection = await dbConnect("products");

    const products = await allProductCollection
      .find({})
      .sort({ price: -1 }) // Highest price first
      .limit(6)
      .toArray();

    return new Response(JSON.stringify(products || []), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
