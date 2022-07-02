import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const Feedback = ({ feedbackItems }) => {
  return (
    <div className="feedback">
      <h2>Feedback</h2>

      <div>
        {feedbackItems.map(({ id, email, feedback }) => (
          <div key={id} style={{ border: "1px solid #000", marginTop: "2rem" }}>
            <p>Email: {email}</p>
            <p>Feedback: {feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
};
