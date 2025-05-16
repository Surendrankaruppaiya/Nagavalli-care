import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  docId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);

