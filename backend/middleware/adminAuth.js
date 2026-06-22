const adminAuth = (
  req,
  res,
  next
) => {

  if (
    req.user &&
    req.user.role === "admin"
  ) {

    next();

  } else {

    return res.status(403).json({
      message:
      "Admin Access Only"
    });

  }

};

module.exports = adminAuth;