import { EventList } from "@/components/event-list";
import { EventCalendar } from "@/components/event-calendar";
import { VolunteerCampaigns } from "@/components/volunteer-campaigns";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#2B5329] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Eventos e Ações Solidárias
          </h1>
          <p className="text-xl">
            Participe e faça a diferença na vida de quem precisa
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <EventList />
          <EventCalendar />
        </div>
        <VolunteerCampaigns />
      </div>
    </main>
  );
}
