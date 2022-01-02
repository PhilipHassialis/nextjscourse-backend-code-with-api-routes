import fs from "fs";
import path from "path";

const buildFeedabackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

const extractFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    // store in js file
    const filePath = buildFeedabackPath();
    const data = extractFeedbackData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", newFeedback });
  } else {
    const filePath = buildFeedabackPath();
    const data = extractFeedbackData(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
