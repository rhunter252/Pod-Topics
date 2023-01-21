import asyncHandler from "express-async-handler";

import Topic from "../models/topicModel";

// @desc Get Topics
// @route GET /api/Topics
// @access Private
const getTopics = asyncHandler(async (req, res) => {
  const topics = await Topic.find({ user: req.user.id });

  res.status(200).json(topics);
});
