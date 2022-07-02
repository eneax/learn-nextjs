import * as React from "react";

const APIRoute = () => {
  const emailInputRef = React.useRef();
  const feedbackInputRef = React.useRef();
  const [feedback, setFeedback] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    // send email and feedback to server
    // {email: test@test.com, feedback: "this is a feedback"}
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleGetFeedback = (e) => {
    e.preventDefault();

    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  };

  return (
    <div>
      <h1>API Route</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input type="email" id="email" ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="feedback">Feedback</label> <br />
          <textarea
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInputRef}
          ></textarea>
        </div>

        <button>Send feedback</button>
      </form>

      <hr />

      <h2>Feedback</h2>
      <button onClick={handleGetFeedback}>Fetch Feedback</button>

      {feedback &&
        feedback.map(({ id, email, feedback }) => (
          <div key={id} style={{ border: "1px solid #000", marginTop: "2rem" }}>
            <p>Email: {email}</p>
            <p>Feedback: {feedback}</p>
          </div>
        ))}
    </div>
  );
};

export default APIRoute;
