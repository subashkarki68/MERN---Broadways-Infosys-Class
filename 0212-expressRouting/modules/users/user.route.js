const router = require("express").Router();
const {
  adminRegistrationValidate,
  registrationValidate,
  loginValidate,
} = require("./user.validate");
const { checkRole, isSuperAdmin } = require("../../utils/sessionManager");
const controller = require("./user.controller");

//TO add admin user by superAdmin
router.post(
  "/registeradmin",
  isSuperAdmin,
  adminRegistrationValidate,
  async (req, res, next) => {
    try {
      req.body.roles = ["admin"];
      const result = await controller.createUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

//GET ALL USERS
router.route("/").get(checkRole(["admin"]), async (req, res, next) => {
  try {
    const { limit, page, search } = req.query; //USED FOR SEARCH, SORTING AND FILTER
    //DATABASE OPERATION
    const result = await controller.findAll();
    if (!result)
      return res.status(500).json({
        success: false,
        result,
        message: "Something Failed",
      });
    return res.status(200).json({
      success: true,
      result,
      message: "All Users Fetched Successfully",
    });
  } catch (e) {
    next(e);
  }
});

//ADD NEW USER

router.post("/register", registrationValidate, async (req, res, next) => {
  try {
    const result = await controller.register(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/register/byadmin",
  checkRole(["admin"]),
  registrationValidate,
  async (req, res, next) => {
    try {
      const result = await controller.registerByAdmin(req.body);
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", loginValidate, async (req, res, next) => {
  try {
    const result = await controller.login(req.body);
    console.log(result);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/generate-fp-token", async (req, res, next) => {
  try {
    //usercontroller generate FP token
    // console.log(req.body);
    const result = await controller.generateFPtoken(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router.post("/verify-fp-token", async (req, res, next) => {
  try {
    //usercontroller verify FP token
    const result = await controller.verifyFPtoken(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

//forLater
router.post("/change-password", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await controller.changePassword(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});
router.post(
  "/reset-password/byadmin",
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const result = await controller.resetPasswordByAdmin(
        req.body,
        req.headers.access_token
      );
      if (result.notAuthorised)
        return res.status(403).json("You are not allowed to add users.");
      if (result.noToken)
        return res
          .status(401)
          .json("You are not Authorized. Got an invalid token.");
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/block-user/byadmin",
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const result = await controller.blockUserByAdmin(
        req.body,
        req.headers.access_token
      );
      if (result.notAuthorised)
        return res.status(403).json("You are not allowed to add users.");
      if (result.noToken)
        return res
          .status(401)
          .json("You are not Authorized. Got an invalid token.");
      res.json({ result });
    } catch (error) {
      next(error);
    }
  }
);

//GET MY PROFILE
router.get(
  "/my-profile",
  checkRole(["admin", "user"]),
  async (req, res, next) => {
    try {
      const result = await controller.getProfile(req.currentUser);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

//Update MY PROFILE
router.post(
  "/my-profile",
  checkRole(["admin", "user"]),
  async (req, res, next) => {
    try {
      const result = await controller.updateProfile(req.currentUser, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

//Dynamic routes should be at last always
//UPDATE SINGLE USER FOR MORE THAN 2 FIELDS
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller.findBy({ _id: id }).select("-password");
      if (!result)
        return res
          .status(404)
          .json({ success: false, result, message: "User Not Found" });

      return res
        .status(200)
        .json({ success: true, result, message: "User Fetched Successfully" });
    } catch (error) {
      next(error);
    }
  })
  .put(registrationValidate, async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      //  //DATABASE OPERATION
      const result = await controller
        .updateAllInID(id, data)
        .select("-password");
      if (!result)
        return res
          .status(404)
          .json({ success: false, result, message: "User Not Found" });

      return res
        .status(200)
        .json({ success: true, result, message: "User Updated Successfully" });
    } catch (e) {
      next(e);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      //DATABASE OPERATION
      const result = await controller
        .updateOneInID(id, data)
        .select("-password");
      if (!result)
        return res
          .status(404)
          .json({ success: false, result, message: "User Not Found" });

      return res
        .status(200)
        .json({ success: true, result, message: "User Updated Successfully" });
    } catch (e) {
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      //DATABASE OPERATION
      const result = await controller.deleteByID(id);
      if (!result)
        return res.status(404).json({
          success: false,
          result,
          message: "User not found",
        });

      return res
        .status(200)
        .json({ success: true, result, message: "User Deleted Successfully" });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
