import { buildFeedbackPath, extractFeedback } from ".";

const handler = (req, res) => {
  const { feedbackId } = req.query;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const feedback = feedbackData.find((item) => item.id === feedbackId);
  res.status(200).json({
    feedback,
  });
};

export default handler;
