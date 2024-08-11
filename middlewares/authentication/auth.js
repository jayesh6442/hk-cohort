import z from "zod";

// input validation

// const userShema = z.object({
//   username: z.string().max(10).min(4),
//   password: z.string().max(8).min(6),
// });

// const name = userShema.safeParse({
//   username: "jayesh",
//   password: "123",
// });

// if (name.success) {
//   console.log(name);
// } else {
//   console.log("no valid input");
// }

const name = z.string();

export { name };
