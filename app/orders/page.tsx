import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const orders = [
  { id: "#1001", customer: "Ari Lee", table: "5", total: "$45.20", status: "Preparing" },
  { id: "#1002", customer: "Nina Patel", table: "3", total: "$32.80", status: "Ready" },
  { id: "#1003", customer: "Jonas Kim", table: "12", total: "$71.40", status: "Delivered" },
  { id: "#1004", customer: "Maya Ortiz", table: "1", total: "$28.70", status: "Pending" },
];

const orderHistory = [
  { date: "Today, 11:18", summary: "8 items delivered to table 9" },
  { date: "Today, 10:55", summary: "Order #1002 marked ready" },
  { date: "Yesterday, 20:34", summary: "Order #0996 refunded" },
];

export default function OrdersPage() {
  return (
    <SiteShell
      title="Order Management"
      description="View new orders, change order statuses, assign staff, and keep sales moving through the kitchen."
    >
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-red-950">Incoming orders</h2>
                <p className="mt-2 text-sm text-red-600">Accept, reject, or send orders to the kitchen with a single click.</p>
              </div>
              <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
                New Order
              </Button>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-red-50 text-red-600">
                  <tr>
                    <th className="px-5 py-4 font-medium">Order</th>
                    <th className="px-5 py-4 font-medium">Customer</th>
                    <th className="px-5 py-4 font-medium">Table</th>
                    <th className="px-5 py-4 font-medium">Total</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-5 py-4 font-medium text-red-950">{order.id}</td>
                      <td className="px-5 py-4 text-red-600">{order.customer}</td>
                      <td className="px-5 py-4 text-red-600">{order.table}</td>
                      <td className="px-5 py-4 text-red-600">{order.total}</td>
                      <td className="px-5 py-4 text-red-600">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <aside className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-red-950">Pending actions</h3>
              <div className="mt-4 space-y-3 text-sm text-red-600">
                <div className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">3 orders pending acceptance</p>
                  <p className="mt-1">Review pending orders from online and walk-in customers.</p>
                </div>
                <div className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">4 orders waiting for pickup</p>
                  <p className="mt-1">Mark orders ready and notify delivery drivers.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-red-950">Order history</h3>
              <ul className="mt-4 space-y-3 text-sm text-red-600">
                {orderHistory.map((event) => (
                  <li key={event.date} className="rounded-3xl bg-red-50 px-4 py-4">
                    <p className="font-medium text-red-950">{event.date}</p>
                    <p className="mt-1">{event.summary}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
