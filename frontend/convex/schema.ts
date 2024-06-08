import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});