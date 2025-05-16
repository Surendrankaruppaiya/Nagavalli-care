import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  docId: { type: String, required: true },
  sender: { type: String, required: true }, // 'user' or 'doctor'
  message: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);
