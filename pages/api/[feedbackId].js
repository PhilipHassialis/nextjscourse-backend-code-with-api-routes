import { buildFeedabackPath, extractFeedbackData } from "./feedback";

const handler = (req, res) => {
  if (req.method === "GET") {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedabackPath();
    const feedbackData = extractFeedbackData(filePath);
    const selectedFeedback = feedbackData.find(
      (feedback) => feedback.id === feedbackId
    );
    res.status(200).json({ feedback: selectedFeedback });
  } else {
    res.status(403);
  }
};

export default handler;
