import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const SupplyStats = () => {
  // Static data for supplies
  const data = [
    { name: "Food", value: 400 },
    { name: "Water", value: 300 },
    { name: "Medicine", value: 300 },
    { name: "Clothing", value: 200 },
    { name: "Shelter", value: 278 },
    { name: "Other", value: 189 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF6666",
  ];

  // Calculate total supply count
  const totalSupplyCount = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="flex mt-8 flex-col items-center">
      <h1 className="mb-4">Supply Statistics</h1>
      <div className="w-full md:w-3/4 lg:w-1/2 mb-4">
        <ResponsiveContainer width="100%" aspect={4 / 3}>
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, value }) => `${name} (${value} units)`}>
              {data.map(
                (
                  _entry, // Placeholder variable for unused parameter
                  index // eslint-disable-line @typescript-eslint/no-unused-vars
                ) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
              )}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 mb-4">
        <h3 className="text-xl font-semibold mb-2 text-popover">
          Supply Summary
        </h3>
        <p className="text-gray-600 mb-2">
          Total Supplies: {totalSupplyCount} units
        </p>
        <p className="text-gray-600">
          Each category represents a different type of supply such as food,
          water, medicine, clothing, shelter, etc.
        </p>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h3 className="text-xl font-semibold mb-2 text-popover">
          Distribution Strategy
        </h3>
        <p className="text-gray-600">
          Our distribution strategy focuses on ensuring equitable access to
          essential supplies for all affected areas. We prioritize areas with
          the greatest need and collaborate with local partners for efficient
          distribution.
        </p>
      </div>
    </div>
  );
};

export default SupplyStats;
