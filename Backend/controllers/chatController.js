import Chat from '../models/Chat.js';

export const sendMessage = async (req, res) => {
  try {
    const { docId, sender, message } = req.body;
    const chat = new Chat({ docId, sender, message });
    await chat.save();
    res.status(200).json({ success: true, data: chat });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send message', error: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const messages = await Chat.find({ docId }).sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch messages', error: err.message });
  }
};



