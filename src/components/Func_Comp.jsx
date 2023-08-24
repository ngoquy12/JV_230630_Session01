import React from "react";

export default function Func_Comp() {
  // Đây là nơi code js
  const sum = (a, b) => {
    return a + b;
  };
  return <div>Tổng 3 + 4 = {sum(3, 4)}</div>;
}
