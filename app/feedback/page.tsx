import SiteShell from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ratings = [
  { label: "5 stars", value: 134 },
  { label: "4 stars", value: 48 },
  { label: "3 stars", value: 12 },
  { label: "2 stars", value: 6 },
  { label: "1 star", value: 3 },
];

const complaints = [
  { issue: "Late delivery", time: "Today 6:42 PM", status: "In review" },
  { issue: "Incorrect order", time: "Yesterday 8:10 PM", status: "Resolved" },
];

export default function FeedbackPage() {
  return (
    <SiteShell
      title="Review & Feedback"
      description="Collect customer reviews, analyze ratings, and resolve complaints to improve service quality."
    >
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-red-950">Ratings overview</h2>
              <p className="mt-2 text-sm text-red-600">Track customer sentiment and rating distribution across recent visits.</p>
            </div>
            <Button className="rounded-3xl bg-red-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800">
              Request Review
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ratings.map((rating) => (
              <div key={rating.label} className="rounded-3xl border border-red-200 bg-red-50 p-5">
                <p className="text-sm font-medium text-red-600">{rating.label}</p>
                <p className="mt-3 text-3xl font-semibold text-red-950">{rating.value}</p>
              </div>
            ))}
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Complaint management</h3>
            <div className="mt-4 space-y-3 text-sm text-red-600">
              {complaints.map((complaint) => (
                <div key={complaint.issue} className="rounded-3xl bg-red-50 px-4 py-4">
                  <p className="font-medium text-red-950">{complaint.issue}</p>
                  <p className="mt-1">{complaint.time}</p>
                  <p className="mt-1 text-red-700">Status: {complaint.status}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-950">Feedback reports</h3>
            <p className="mt-3 text-sm text-red-600">Summarize customer satisfaction trends and identify areas for improvement.</p>
            <div className="mt-5 rounded-3xl bg-red-50 px-4 py-4 text-sm text-red-700">
              <p className="font-medium text-red-950">Improvement focus</p>
              <p className="mt-1">Faster delivery and menu accuracy.</p>
            </div>
          </Card>
        </aside>
      </div>
    </SiteShell>
  );
}
