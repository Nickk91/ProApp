import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import * as S from "./styled.js";

const PieChartComp = ({ data, fill, title }) => {
  return (
    <>
      {/* <div>{title}</div> */}
      <S.chartContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill={fill}
            label={(entry) => entry.label}
          />
          <Tooltip />
        </PieChart>
      </S.chartContainer>
    </>
  );
};

export default PieChartComp;
