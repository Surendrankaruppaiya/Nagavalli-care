import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    console.log("Incoming feedback body:", req.body); // ✅ Log the request body

    const { doctorId, userName, comment } = req.body;

    // ✅ Check for missing fields
    if (!doctorId || !userName || !comment) {
      return res.status(400).json({ success: false, message: 'All fields required' });
    }

    // ✅ Create and save feedback
    const newFeedback = new Feedback({ doctorId, userName, comment });
    await newFeedback.save();

    res.status(200).json({ success: true, message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error('Feedback submission error:', err); // ✅ Log error
    res.status(500).json({ success: false, message: 'Error submitting feedback', error: err.message });
  }
};

export const getDoctorFeedback = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const feedbacks = await Feedback.find({ doctorId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: feedbacks });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching feedback', error: err.message });
  }
};
