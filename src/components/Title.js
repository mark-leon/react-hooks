import React from "react";

const Title = () => {
  console.log("rendering title...");
  return <div>This is useCallback hook</div>;
};

export default React.memo(Title);
