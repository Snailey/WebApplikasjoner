import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    min: ["3", "Epost må inneholde mer enn tre tegn"],
    max: ["50", "Epost kan ikke inneholde mer enn 50 tegn"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: ["3", "Passoret må inneholde mer enn tre tegn"],
    max: ["20", "Passordet kan ikke inneholde mer enn 50 tegn"],
  },
});



UserSchema.virtual('polls', {
    ref: 'Poll',
    localField: '_id',
    foreignField: 'author',
    justOnce: true,
});

export default mongoose.model('User', UserSchema);


