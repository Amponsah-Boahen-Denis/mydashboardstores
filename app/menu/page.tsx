import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Drinks",
  "Combo Meals",
];

const menuItems = [
  { name: "Grilled Salmon Bowl", category: "Main Courses", price: "$18.50", status: "Available" },
  { name: "Truffle Mushroom Pizza", category: "Main Courses", price: "$22.00", status: "Available" },
  { name: "Spicy Chicken Tacos", category: "Main Courses", price: "$14.00", status: "Low stock" },
  { name: "Caesar Salad", category: "Appetizers", price: "$11.00", status: "Unavailable" },
  { name: "Chocolate Lava Cake", category: "Desserts", price: "$9.50", status: "Available" },
];

const comboMeals = [
  { name: "Family Feast", description: "2 pizzas, 4 sides, 3 drinks", price: "$64.00" },
  { name: "Lunch Duo", description: "Salad + sandwich + drink", price: "$24.00" },
];

export default function MenuPage() {
  return (
    <SiteShell
      title="Menu Management"
      description="Create new dishes, manage pricing, stock availability, categories, combos, and promotions for your restaurant menu."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Menu items</h2>
              <p className="mt-2 text-sm text-red-600">Review active dishes, set prices, and toggle availability across categories.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Menu Item
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Item</th>
                  <th className="px-5 py-4 font-medium">Category</th>
                  <th className="px-5 py-4 font-medium">Price</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {menuItems.map((item) => (
                  <tr key={item.name}>
                    <td className="px-5 py-4 font-medium text-red-950">{item.name}</td>
                    <td className="px-5 py-4 text-red-600">{item.category}</td>
                    <td className="px-5 py-4 text-red-600">{item.price}</td>
                    <td className="px-5 py-4 text-red-600">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <section className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Categories</h3>
            <div className="mt-4 grid gap-3">
              {categories.map((category) => (
                <div key={category} className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {category}
                </div>
              ))}
            </div>
            <Button className="mt-6 w-full rounded-3xl border border-red-200 bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Category
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-red-950">Combo meals</h3>
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">+12%</span>
            </div>
            <div className="mt-4 space-y-4">
              {comboMeals.map((combo) => (
                <div key={combo.name} className="rounded-3xl border border-red-200 bg-red-50 p-4">
                  <h4 className="font-medium text-red-950">{combo.name}</h4>
                  <p className="mt-1 text-sm text-red-600">{combo.description}</p>
                  <p className="mt-2 text-sm font-semibold text-red-950">{combo.price}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </SiteShell>
  );
}
