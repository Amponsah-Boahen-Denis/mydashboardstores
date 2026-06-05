import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const trendCards = [
  { label: "Best Selling Food", value: "Truffle Mushroom Pizza" },
  { label: "Peak Order Time", value: "7:30 PM" },
  { label: "Customer Growth", value: "+18%" },
];

const foodTrends = [
  { item: "Mushroom Pizza", sales: "350" },
  { item: "Salmon Bowl", sales: "288" },
  { item: "Chicken Tacos", sales: "239" },
];

export default function AnalyticsPage() {
  return (
    <SiteShell
      title="Analytics Dashboard"
      description="Analyze sales trends, identify top foods, and forecast revenue from operational data."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {trendCards.map((trend) => (
            <div key={trend.label} className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-red-600">{trend.label}</p>
              <p className="mt-4 text-3xl font-semibold text-red-950">{trend.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-red-950">Sales trends</h2>
            <p className="mt-2 text-sm text-red-600">Weekly and monthly demand trends to help staff and inventory planning.</p>
            <div className="mt-6 grid gap-3 text-sm text-red-600">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                <div key={day} className="flex items-center justify-between rounded-3xl bg-red-50 px-4 py-4">
                  <span>{day}</span>
                  <span>{Math.round(60 + index * 6)}%</span>
                </div>
              ))}
            </div>
          </Card>

          <aside className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-red-950">Best selling foods</h3>
              <div className="mt-4 space-y-3 text-sm text-red-600">
                {foodTrends.map((food) => (
                  <div key={food.item} className="rounded-3xl bg-red-50 px-4 py-4">
                    <p className="font-medium text-red-950">{food.item}</p>
                    <p className="mt-1">{food.sales} orders</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-red-950">Forecast summary</h3>
              <p className="mt-3 text-sm text-red-600">Revenue and order volume look strong through the next 30 days. Use this report to plan staffing and inventory.</p>
            </Card>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
