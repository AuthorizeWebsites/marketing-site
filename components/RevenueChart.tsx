import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Legend,
} from "recharts";

export function RevenueChart({ data }: { data: any }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-start flex-shrink-0 w-screen px-4 py-16 overflow-x-scroll bg-white border-t border-b border-gray-200 shadow-inner overscroll-x-contain">
        <LineChart
          width={Math.max(window.innerWidth - 32, 700)}
          height={600}
          data={data}
          margin={{ top: 5, bottom: 20, left: 110 }}
        >
          <Legend verticalAlign="top" layout="horizontal" />
          <Line
            type="monotone"
            dataKey="Monthly Revenue"
            stroke="green"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Monthly Support Plan Revenue"
            stroke="blue"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Monthly Site Building Revenue"
            stroke="gold"
            dot={false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month">
            <Label value="Months" position="insideBottom" offset={-10} />
          </XAxis>
          <YAxis orientation="left">
            <Label
              value="Monthly Revenue"
              position="insideLeft"
              offset={-110}
            />
          </YAxis>
          {/* <YAxis yAxisId="big-nums" orientation="right">
            {" "}
            <Label value="Total Amounts" position="insideRight" offset={-75} />
          </YAxis> */}
        </LineChart>
        <div
          style={{ minWidth: 16, width: 16, maxWidth: 16 }}
          className="h-full p-2"
        />
      </div>
    </div>
  );
}
