import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const items = [
  { name: "Tomatoes", stock: 42, unit: "kg", status: "Healthy" },
  { name: "Mozzarella Cheese", stock: 8, unit: "kg", status: "Low stock" },
  { name: "Chicken Breast", stock: 16, unit: "kg", status: "Healthy" },
  { name: "Spice Mix", stock: 3, unit: "packs", status: "Critical" },
  { name: "Lettuce", stock: 20, unit: "heads", status: "Healthy" },
];

const suppliers = [
  { name: "Fresh Farms", lastOrder: "2 days ago", contact: "supply@freshfarms.com" },
  { name: "Ocean Catch", lastOrder: "5 days ago", contact: "orders@oceancatch.com" },
];

export default function InventoryPage() {
  return (
    <SiteShell
      title="Inventory Management"
      description="Track stock, manage suppliers, record purchases, and get alerts when ingredients run low."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Stock levels</h2>
              <p className="mt-2 text-sm text-red-600">Stay ahead of low stock and expiry dates with real-time inventory insights.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Inventory Item
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Item</th>
                  <th className="px-5 py-4 font-medium">Stock</th>
                  <th className="px-5 py-4 font-medium">Unit</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {items.map((item) => (
                  <tr key={item.name}>
                    <td className="px-5 py-4 font-medium text-red-950">{item.name}</td>
                    <td className="px-5 py-4 text-red-600">{item.stock}</td>
                    <td className="px-5 py-4 text-red-600">{item.unit}</td>
                    <td className="px-5 py-4 text-red-600">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Low stock alerts</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              <div className="rounded-3xl bg-rose-50 px-4 py-4 text-rose-900">
                <p className="font-medium">Spice Mix</p>
                <p className="mt-1 text-red-700">Only 3 packs remaining.</p>
              </div>
              <div className="rounded-3xl bg-amber-50 px-4 py-4 text-amber-900">
                <p className="font-medium">Mozzarella Cheese</p>
                <p className="mt-1 text-red-700">Low stock alert for high demand dishes.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Supplier records</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {suppliers.map((supplier) => (
                <div key={supplier.name} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{supplier.name}</p>
                  <p className="mt-1">Last order: {supplier.lastOrder}</p>
                  <p className="mt-1">{supplier.contact}</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
