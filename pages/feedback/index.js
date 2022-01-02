import React from "react";
import { buildFeedabackPath, extractFeedbackData } from "../api/feedback";

const FeedbackPage = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.feedback}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedabackPath();
  const data = extractFeedbackData(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
