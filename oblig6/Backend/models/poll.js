import mongoose from "mongoose";

const { Schema } = mongoose;

const PollSchema = new Schema({
  question: {
    type: String,
    required: true,
    min: ["3", "Spørsmplet må bestå av mer enn 3 tegn"],
    max: ["50", "Spørsmålet kan ikke være lengre enn 50 tegn"],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  options: [
    {
      answers: String,
      votes: {type: Number,
              default: 0,}
      },
    ],
});

export default mongoose.model('Poll', PollSchema);

