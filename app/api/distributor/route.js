import { db } from "@/lib/db";

export async function POST(req) {
  try {
    const data = await req.json();

    await db.execute(
      `INSERT INTO distributors 
      (firstName,lastName,age,qualification,phone,email,city,zip,district,companyName,
      business,experience,businessType,revenue,brief,infrastructure,vehicle,investment,manpower,interested)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.Age,
        data.Qualification,
        data.phone,
        data.email,
        data.City,
        data.Zip,
        data.district,
        data.companyName,
        data.business,
        data.experience,
        data.businessType,
        data.Revenue,
        data.Brief,
        data.Infrastructure,
        data.Vehicle,
        data.Investment,
        data.Manpower,
        data.Interested,
      ]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.log(err);
    return Response.json({ error: "DB Error" }, { status: 500 });
  }
}