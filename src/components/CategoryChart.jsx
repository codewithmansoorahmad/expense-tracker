import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";

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
      <BarChart width={600} height={400} data={obj}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis tickFormatter={(value) => `Rs: ${value}`} />
        <Tooltip formatter={(value) => `Rs: ${value}`} />
        <Bar dataKey="total" barSize={30}/>
      </BarChart>
    </div>
  );
}
export default CategoryChart;
