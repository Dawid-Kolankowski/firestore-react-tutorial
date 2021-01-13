import React from "react";

import moment from "moment";

const Comment = ({ content, user, createdAt }) => {
  return (
    <article className="Comment">
      {/* <span className="Comment--author">{user.displayName}</span> */}
      <span className="Comment--content">{content}</span>
      {/* <span className="Comment--timestamp">{moment(createdAt).calendar()}</span> */}
    </article>
  );
};

export default Comment;
