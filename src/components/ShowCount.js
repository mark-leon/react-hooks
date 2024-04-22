import React from "react";

const ShowCount = ({ count, title }) => {
  console.log(`rendering show count`);
  return (
    <p>
      {title} is {count}
    </p>
  );
};

export default React.memo(ShowCount);
