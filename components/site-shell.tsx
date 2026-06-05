import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/menu", label: "Menu" },
  { href: "/orders", label: "Orders" },
  { href: "/reservations", label: "Reservations" },
  { href: "/customers", label: "Customers" },
  { href: "/inventory", label: "Inventory" },
  { href: "/staff", label: "Staff" },
  { href: "/finance", label: "Finance" },
  { href: "/delivery", label: "Delivery" },
  { href: "/marketing", label: "Marketing" },
  { href: "/feedback", label: "Feedback" },
  { href: "/branches", label: "Branches" },
  { href: "/analytics", label: "Analytics" },
  { href: "/settings", label: "Settings" },
];

export default function SiteShell({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(254,202,202,0.5),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(185,28,28,0.12),_transparent_30%),#fff1f2] text-[#7f1d1d]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[2rem] border border-red-200 bg-red-50/95 p-6 shadow-[0_24px_80px_rgba(185,28,28,0.12)] backdrop-blur-sm">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-600">Restaurant HQ</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-red-950 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-red-700 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <Button asChild variant="outline" size="sm">
                <Link href="/settings">Business Settings</Link>
              </Button>
              <Button size="sm">
                <Link href="/analytics">View Analytics</Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Card className="p-5">
            <div className="mb-4 px-2 text-xs uppercase tracking-[0.35em] text-red-600">
              Main navigation
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-3xl px-4 py-3 text-sm font-medium text-red-700 transition hover:bg-red-50 hover:text-red-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Card>
          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
