import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { NextResponse } from "next/server";
export const createUser = mutation({
  args: {},
  handler: async (ctx, args) => {
    // Check if user is logged in
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("User is not logged in");
    }
    // Check if user already exist in DB
    const userExist = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (userExist) {
      return userExist._id;
    }
    // Check if dont exist then create one
    await ctx.db.insert("users", {
      firstName: identity.givenName ?? "",
      lastName: identity.familyName ?? "",
      email: identity.email ?? "",
      image: identity.pictureUrl ?? "",
      tokenIdentifier: identity.tokenIdentifier,
    });

    return { status: 201, message: "User created successfully" };
  },
});
