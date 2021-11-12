import React, { memo } from "react";

const Content = () => {
  console.log("re-render");

  return (
    <div>
      <h2>Hello ae</h2>
    </div>
  );
};

export default memo(Content);
