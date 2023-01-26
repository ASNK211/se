const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    amount: { type: Number, },
    prs: { type: Number, },
    usdtId: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
