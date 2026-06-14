import bcrypt from "bcrypt";
import { User } from "../api/models/user.model";
import { env } from "../config/env";

export async function seedUsers() {
  const admin = await User.findOne({
    where: {
      email: "admin@test.com",
    },
  });

  if (admin) {
    return;
  }

  const hash = await bcrypt.hash(env.ADMIN_PASSWORD, 10);

  await User.create({
    email: "admin@test.com",
    passwordHash: hash,
    role: "ADMIN",
  });

  console.log("Admin user seeded");

  const testUser = await User.findOne({
    where: {
      email: "user@test.com",
    },
  });

  if (!testUser) {
    const testHash = await bcrypt.hash(env.USER_PASSWORD, 10);
    await User.create({
      email: "user@test.com",
      passwordHash: testHash,
      role: "USER",
    });
    console.log("Test user seeded");
  }
}
