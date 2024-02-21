const { required, string } = require("joi");
const { schema, model, Schema } = require("mongoose");

const { ObjectId } = Schema.Types;

const blogSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is missing"] },
    slug: { type: String, required: true, unique: true },
    author: {
      type: ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "published"],
        message: "{VALUE} is not supported.",
      },
      default: "draft",
      required: true,
    },
    content: { type: String, required: true },
    pictureUrl: { type: Number, min: 1 },
  },
  { timestamps: true }
);

const Blog = new model("Blog", blogSchema);

module.exports = Blog;
