import { BarChart, XAxis,ResponsiveContainer, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";

function CategoryChart({ monthData }) {
  const totalCategories = monthData.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 0;
    }
    acc[curr.category] += Number(curr.price);
    return acc;
  }, {});
  const obj = Object.entries(totalCategories).map((item) => {
    return { category: item[0], total: item[1] };
  });
  console.log(obj);
  console.log(totalCategories);
  return (
    <div className="category-chart">
      <ResponsiveContainer width="100%" height={300}>

      <BarChart data={obj}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis   tick={{ fontSize: 10 }} dataKey="category" />
        <YAxis   tick={{ fontSize: 10 }} tickFormatter={(value) => `Rs: ${value}`} />
        <Tooltip formatter={(value) => `Rs: ${value}`} />
        <Bar dataKey="total" barSize={30}/>
      </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
export default CategoryChart;
