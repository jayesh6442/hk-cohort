import z from "zod";

const todoSchemaValidation = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
});

const updateTodo = z.object({
  id: z.string(),
});

export { todoSchemaValidation, updateTodo };
