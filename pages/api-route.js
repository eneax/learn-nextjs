import * as React from "react";

const APIRoute = () => {
  const emailInputRef = React.useRef();
  const feedbackInputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    // send email and feedback to server
    // {email: test@test.com, feedback: "this is a feedback"}

    // clear form
    email = "";
    feedback = "";
  };

  return (
    <div>
      <h1>API Route</h1>

      <form>
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

        <button onClick={handleSubmit}>Send feedback</button>
      </form>
    </div>
  );
};

export default APIRoute;
