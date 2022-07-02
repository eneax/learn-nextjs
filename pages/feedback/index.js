import * as React from "react";

import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

const Feedback = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = React.useState();

  const handleLoadFeedback = (feedbackId) =>
    fetch(`/api/feedback/${feedbackId}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });

  return (
    <div className="feedback">
      <h2>Feedback</h2>

      <div>
        <ul>
          {feedbackItems.map(({ id, email }) => (
            <li key={id}>
              <p>Email: {email}</p>

              <button onClick={() => handleLoadFeedback(id)}>
                Show Feedback
              </button>
            </li>
          ))}
        </ul>

        {feedbackData && (
          <p style={{ border: "1px solid #000" }}>{feedbackData.feedback}</p>
        )}
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
