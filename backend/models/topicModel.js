import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  topicName: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Topic", topicSchema);
