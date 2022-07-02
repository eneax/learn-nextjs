import fs from "fs";
import path from "path";

export const buildFeedbackPath = () =>
  path.join(process.cwd(), "data", "feedback.json");

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileData);
  return data;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    // get the feedback file path
    const filePath = buildFeedbackPath();
    // get existing data from feedback file and convert it to JSON
    const data = extractFeedback(filePath);
    // add new feedback to the existing data
    data.push(newFeedback);
    // convert the data back to a string
    const newData = JSON.stringify(data);
    // write the new data to the feedback file
    fs.writeFileSync(filePath, newData);
    // send a response to the client
    res.status(201).json({
      message: "Success!",
      feedback: newFeedback,
    });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    res.status(200).json({
      feedback: data,
    });
  }
};

export default handler;
