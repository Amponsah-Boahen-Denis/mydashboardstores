import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const bookings = [
  { name: "Helena Park", time: "Today 7:00 PM", table: "11", guests: 4, status: "Confirmed" },
  { name: "Victor Jones", time: "Today 8:30 PM", table: "6", guests: 2, status: "Pending" },
  { name: "Anna Chen", time: "Tomorrow 6:15 PM", table: "14", guests: 5, status: "Confirmed" },
  { name: "Liam Murphy", time: "Tomorrow 9:00 PM", table: "2", guests: 2, status: "Cancelled" },
];

export default function ReservationsPage() {
  return (
    <SiteShell
      title="Reservation Management"
      description="Approve table bookings, manage seating, and keep reservation notes organized for every guest."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Upcoming bookings</h2>
              <p className="mt-2 text-sm text-red-600">Manage confirmed reservations and approve new booking requests.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Add Reservation
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-red-50 text-red-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Guest</th>
                  <th className="px-5 py-4 font-medium">Time</th>
                  <th className="px-5 py-4 font-medium">Table</th>
                  <th className="px-5 py-4 font-medium">Guests</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {bookings.map((booking) => (
                  <tr key={booking.name + booking.time}>
                    <td className="px-5 py-4 font-medium text-red-950">{booking.name}</td>
                    <td className="px-5 py-4 text-red-600">{booking.time}</td>
                    <td className="px-5 py-4 text-red-600">{booking.table}</td>
                    <td className="px-5 py-4 text-red-600">{booking.guests}</td>
                    <td className="px-5 py-4 text-red-600">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Table booking calendar</h3>
            <div className="mt-4 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
              <p className="font-medium text-red-950">Today</p>
              <p className="mt-2">11:30 AM - 4 reservations</p>
              <p className="mt-1">6:00 PM - 8 reservations</p>
              <p className="mt-1">8:00 PM - 4 reservations</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Customer notes</h3>
            <div className="mt-4 space-y-4 text-sm text-red-600">
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Helena Park</p>
                <p className="mt-1">Prefers aisle seating and gluten-free dressing.</p>
              </div>
              <div className="rounded-3xl bg-red-50 px-4 py-4">
                <p className="font-medium text-red-950">Anna Chen</p>
                <p className="mt-1">Celebrating anniversary with a special dessert.</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
