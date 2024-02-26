const { required, string } = require("joi");
const { schema, model, Schema } = require("mongoose");

const { ObjectId } = Schema.Types;

const blogSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is missing"] },
    slug: { type: String, unique: true },
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
    pictureUrl: { type: String, required: true },
  },
  { timestamps: true }
);

blogSchema.pre("save", async function (next) {
  if (!this.slug) {
    const slug = this.title.toLowerCase().replace(/ /g, "-");
    this.slug = await generateUniqueSlug(slug);
  }
  next();
});

// Function to generate a unique slug
async function generateUniqueSlug(slug) {
  const existingBlog = await Blog.findOne({ slug });
  if (!existingBlog) {
    return slug;
  }

  const newSlug = `${slug}-${Date.now()}`;
  return newSlug;
}
const Blog = new model("Blog", blogSchema);

module.exports = Blog;
