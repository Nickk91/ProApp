import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const PieChartComp = ({ data, fill }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill={fill}
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComp;
