import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useGraphData } from "@/hooks/home/useGraphData";

import { GraphProps } from "./Graph.types";

const Graph = ({ populationData }: GraphProps) => {
  const { graphLayout, prefectureNames } = useGraphData(populationData);

  return (
    <LineChart
      width={graphLayout.graphWidth}
      height={graphLayout.graphHeight}
      data={populationData}
    >
      <CartesianGrid strokeDasharray="5" />
      <XAxis dataKey="year" />
      <YAxis />
      {prefectureNames.map((prefName, index) => {
        const color = `hsl(${index * 19}, 80%, 64%)`;
        return (
          <Line type="monotone" key={index} dataKey={prefName} stroke={color} />
        );
      })}
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default Graph;
