import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const overviewStats = [
  { label: "Today's Sales", value: "$12.8k", change: "+18%" },
  { label: "Total Orders", value: "184", change: "+7%" },
  { label: "Pending Orders", value: "23", change: "-3%" },
  { label: "Completed Orders", value: "161", change: "+10%" },
  { label: "Total Customers", value: "1,280", change: "+5%" },
  { label: "Inventory Alerts", value: "4", change: "High priority" },
];

const popularItems = [
  { name: "Truffle Mushroom Pizza", sold: 34 },
  { name: "Grilled Salmon Bowl", sold: 26 },
  { name: "Spicy Chicken Tacos", sold: 19 },
  { name: "Signature Cheeseburger", sold: 17 },
];

const quickActions = [
  "Add Menu Item",
  "View New Orders",
  "Approve Reservation",
  "Track Inventory",
  "Add Employee",
  "Generate Report",
  "Create Promo Code",
  "Manage Branches",
];

const featureSections = [
  {
    title: "Menu Management",
    items: [
      "Add, edit, delete menu items",
      "Upload food images",
      "Set prices and availability",
      "Create combo meals",
    ],
  },
  {
    title: "Order Management",
    items: [
      "Accept or reject orders",
      "Track status in real time",
      "Assign orders to staff",
      "Print kitchen receipts",
    ],
  },
  {
    title: "Reservation Management",
    items: [
      "Table booking calendar",
      "Approve and cancel requests",
      "Manage seating assignments",
      "Customer reservation notes",
    ],
  },
  {
    title: "Inventory Management",
    items: [
      "Stock tracking",
      "Low-stock alerts",
      "Supplier & purchase records",
      "Expiry date monitoring",
    ],
  },
  {
    title: "Staff Management",
    items: [
      "Employee roles & schedules",
      "Attendance tracking",
      "Payroll overview",
      "Performance reports",
    ],
  },
  {
    title: "Marketing & Analytics",
    items: [
      "Coupon and promo tools",
      "Email / SMS campaigns",
      "Sales trends and peak times",
      "Branch performance reports",
    ],
  },
];

export default function Home() {
  return (
    <SiteShell
      title="Dashboard"
      description="Monitor sales, manage menus, process orders, organize reservations, and run the business from one admin experience."
    >
      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.86fr]">
        <Card variant="elevated" padding="none">
          <div className="bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_28%)] px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.34em] text-red-600">Restaurant pulse</p>
                <h2 className="mt-3 text-3xl font-semibold text-red-950 sm:text-4xl">
                  Executive dashboard for restaurant operations
                </h2>
                <p className="mt-3 text-sm leading-6 text-red-600 sm:text-base">
                  See the most important restaurant metrics in one polished workspace, with fast access to order, menu, inventory, and staff workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">New order</Button>
                <Button size="sm" variant="outline">
                  Add menu item
                </Button>
              </div>
            </div>
          </div>

          <CardContent className="grid gap-4 pt-6 md:grid-cols-3">
            {overviewStats.map((stat) => (
              <Card
                key={stat.label}
                variant="interactive"
                padding="tight"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-red-950">{stat.value}</p>
                <p className="mt-2 text-xs text-red-600">{stat.change}</p>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card variant="default">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue forecast</CardTitle>
                  <CardDescription>
                    Sales based on current orders and peak hours.
                  </CardDescription>
                </div>
                <Badge variant="outline">+14%</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 pt-4">
              <div className="rounded-xl bg-red-50 p-4">
                <div className="flex items-center justify-between text-sm text-red-700">
                  <span className="font-medium">Today</span>
                  <span className="font-bold text-red-950">$68.4k</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-red-100">
                  <div className="h-full w-[72%] rounded-full bg-red-700" />
                </div>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <div className="flex items-center justify-between text-sm text-red-700">
                  <span className="font-medium">Projected week</span>
                  <span className="font-bold text-red-950">$312k</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-red-100">
                  <div className="h-full w-[82%] rounded-full bg-red-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
              <CardDescription>Access common workflows fast.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 pt-4 sm:grid-cols-2">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start"
                >
                  {action}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Sales performance</CardTitle>
                <CardDescription>Top items and order momentum for the last 24 hours.</CardDescription>
              </div>
              <Badge variant="outline">Live</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {popularItems.map((item) => (
                <Card
                  key={item.name}
                  variant="muted"
                  padding="tight"
                >
                  <p className="font-semibold text-red-950">{item.name}</p>
                  <p className="mt-2 text-sm text-red-600">Sold {item.sold} times today</p>
                </Card>
              ))}
            </div>

            <div className="rounded-xl bg-red-950 p-5 text-white">
              <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.25em] text-red-200">
                <span>Revenue trend</span>
                <span className="font-semibold">+18% vs yesterday</span>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-7">
                {[72, 50, 85, 60, 95, 70, 82].map((value, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-full rounded-lg bg-red-800" style={{ height: `${value / 5}px` }} />
                    <span className="text-xs text-red-200">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Operations summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {featureSections.slice(0, 3).map((section) => (
              <Card key={section.title} variant="muted" padding="tight">
                <p className="font-semibold text-red-950">{section.title}</p>
                <p className="mt-2 text-xs text-red-600">{section.items.slice(0, 2).join(" • ")}</p>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featureSections.slice(3).map((section) => (
          <Card key={section.title} variant="default">
            <CardTitle className="mb-4">{section.title}</CardTitle>
            <ul className="space-y-3 text-sm text-red-600">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <Card variant="elevated" className="mt-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">Admin settings</p>
            <h2 className="mt-3 text-2xl font-semibold text-red-950">Business controls and restaurant policies</h2>
            <p className="mt-2 text-sm text-red-600">
              Configure business info, payment methods, operating hours, tax rules, and user permissions from a single control panel.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:flex-nowrap lg:gap-3">
            <Button>View Admin Settings</Button>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
      </Card>
    </SiteShell>
  );
}
