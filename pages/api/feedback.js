import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    // get the feedback file path
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    // get existing data from feedback file and convert it to JSON
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
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
    res.status(200).json({
      message: "It works!",
    });
  }
};

export default handler;
