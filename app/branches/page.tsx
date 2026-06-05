import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const branches = [
  { name: "Downtown", revenue: "$54.8k", orders: 720, staff: 28 },
  { name: "Northside", revenue: "$38.2k", orders: 492, staff: 19 },
  { name: "Eastside", revenue: "$24.6k", orders: 310, staff: 14 },
];

const branchInventory = [
  { item: "Tomatoes", branch: "Downtown", stock: "45 kg" },
  { item: "Mozzarella Cheese", branch: "Northside", stock: "12 kg" },
  { item: "Spice Mix", branch: "Eastside", stock: "4 packs" },
];

export default function BranchesPage() {
  return (
    <SiteShell
      title="Multi-Branch Management"
      description="Monitor performance across locations, compare inventory and staff, and keep branches aligned."
    >
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-red-950">Branch performance</h2>
          <p className="mt-2 text-sm text-red-600">Compare sales, order volume, and staffing across each restaurant location.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {branches.map((branch) => (
              <div key={branch.name} className="rounded-3xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-red-950">{branch.name}</p>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-700">Branch</span>
                </div>
                <div className="mt-4 grid gap-2 text-sm text-red-600">
                  <p>Revenue: {branch.revenue}</p>
                  <p>Orders: {branch.orders}</p>
                  <p>Staff: {branch.staff}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Branch inventory</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {branchInventory.map((item, index) => (
                <div key={`${item.item}-${index}`} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{item.item}</p>
                  <p className="mt-1">Branch: {item.branch}</p>
                  <p className="mt-1">Stock: {item.stock}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Branch highlights</h3>
            <p className="mt-3 text-sm text-red-600">Downtown is leading with the highest weekly revenue while Eastside needs extra inventory restocking.</p>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
