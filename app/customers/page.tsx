import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const customers = [
  { name: "Charlotte Brooks", orders: 42, loyalty: 860, status: "VIP" },
  { name: "Marcus Rivera", orders: 18, loyalty: 320, status: "Active" },
  { name: "Lina Gomez", orders: 27, loyalty: 510, status: "VIP" },
  { name: "Derek Sun", orders: 11, loyalty: 190, status: "New" },
];

const reviews = [
  { customer: "Charlotte Brooks", rating: 5, comment: "Amazing weekend brunch experience." },
  { customer: "Marcus Rivera", rating: 4, comment: "Great delivery timing and food quality." },
  { customer: "Lina Gomez", rating: 5, comment: "Staff were super friendly and helpful." },
];

export default function CustomersPage() {
  return (
    <SiteShell
      title="Customer Management"
      description="Track guest profiles, loyalty points, reviews, VIP tags, and order history for your best customers."
    >
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Customer profiles</h2>
              <p className="mt-2 text-sm text-red-600">Review active guests, loyalty progress, and VIP status across your customer base.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Customer
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Customer</th>
                  <th className="px-5 py-4 font-medium">Orders</th>
                  <th className="px-5 py-4 font-medium">Loyalty</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {customers.map((customer) => (
                  <tr key={customer.name}>
                    <td className="px-5 py-4 font-medium text-red-950">{customer.name}</td>
                    <td className="px-5 py-4 text-red-600">{customer.orders}</td>
                    <td className="px-5 py-4 text-red-600">{customer.loyalty} pts</td>
                    <td className="px-5 py-4 text-red-600">{customer.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">VIP customer tags</h3>
            <p className="mt-3 text-sm text-red-600">Highlight repeat guests and high-value diners for special offers.</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-3xl bg-red-50 px-4 py-4 text-sm text-red-700">Charlotte Brooks — Gold VIP</div>
              <div className="rounded-3xl bg-red-50 px-4 py-4 text-sm text-red-700">Lina Gomez — Gold VIP</div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Recent reviews</h3>
            <div className="mt-4 space-y-4 text-sm text-red-600">
              {reviews.map((review) => (
                <div key={review.customer} className="rounded-3xl bg-red-50 p-4">
                  <p className="font-medium text-red-950">{review.customer}</p>
                  <p className="mt-1">Rating: {review.rating} / 5</p>
                  <p className="mt-2 text-sm text-red-700">“{review.comment}”</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
