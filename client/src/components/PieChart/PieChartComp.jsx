import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import * as S from "./styled.js";

const PieChartComp = ({ data, fill, title }) => {
  return (
    <>
      <S.chartContainer>
        <PieChart width={350} height={350}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill={fill}
            label={(entry) => (entry.value ? entry.label : "")}
            animation={true}
          />
          <Tooltip />
        </PieChart>
      </S.chartContainer>
    </>
  );
};

export default PieChartComp;
