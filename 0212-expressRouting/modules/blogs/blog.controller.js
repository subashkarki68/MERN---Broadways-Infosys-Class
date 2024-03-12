// ██████╗ ██╗      ██████╗  ██████╗      ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗
// ██╔══██╗██║     ██╔═══██╗██╔════╝     ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
// ██████╔╝██║     ██║   ██║██║  ███╗    ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
// ██╔══██╗██║     ██║   ██║██║   ██║    ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
// ██████╔╝███████╗╚██████╔╝╚██████╔╝    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
// ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
const Blog = require("./blog.model");

//throw error message
const errorMsg = (msg) => {
  throw new Error(msg);
};

// ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
// ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
// ██║     ██████╔╝█████╗  ███████║   ██║   █████╗
// ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝
// ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
//  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

const createBlog = async (_id, payload) => {
  try {
    const blog = new Blog(payload);
    blog.author = _id;
    const result = await blog.save();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured during creation:", error);
    errorMsg("Error creating blog");
  }
};

// ██╗     ██╗███████╗████████╗
// ██║     ██║██╔════╝╚══██╔══╝
// ██║     ██║███████╗   ██║
// ██║     ██║╚════██║   ██║
// ███████╗██║███████║   ██║
// ╚══════╝╚═╝╚══════╝   ╚═╝
const listBlog = () => {
  //Pagination
  //ObjectId Reference
  //Solution aggregation
  return Blog.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        author: "$author.name",
        title: 1,
        slug: 1,
        status: 1,
        content: 1,
        pictureUrl: 1,
        createdAt: 1,
        updatedAt: 1,
        _id: 0,
      },
    },
  ]);
};

// Get by Slug OPen Route
//Get by slug for admin and user

// UPDATE BY SLUG
/*
    1. Blog exist?
    2. Title change?? => change slug
    3. user role ?? => only author can change the data
  */

// CHANGE BLOG STATUS

module.exports = { createBlog, listBlog };
