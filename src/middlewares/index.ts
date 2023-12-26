import express from "express";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};


