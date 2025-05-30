"use client";

import { useState } from "react";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    date: new Date(2025, 0, 15),
    title: "Campanha de Arrecadação de Alimentos",
  },
  { date: new Date(2025, 1, 20), title: "Dia Nacional da Solidariedade" },
  { date: new Date(2025, 2, 8), title: "Dia Internacional da Mulher" },
  { date: new Date(2025, 3, 22), title: "Mutirão de Limpeza" },
  { date: new Date(2025, 4, 1), title: "Dia do Trabalho" },
  { date: new Date(2025, 5, 12), title: "Campanha de Doação de Sangue" },
  { date: new Date(2025, 6, 4), title: "Feira de Adoção de Animais" },
  { date: new Date(2025, 6, 15), title: "Campanha de Doação de Agasalhos" },
  { date: new Date(2025, 7, 22), title: "Mutirão de Limpeza do Rio" },
  { date: new Date(2025, 8, 5), title: "Feira de Adoção de Animais" },
  { date: new Date(2025, 8, 10), title: "Corrida pela Solidariedade" },
  { date: new Date(2025, 8, 20), title: "Dia de Doar" },
  { date: new Date(2025, 9, 1), title: "Campanha de Arrecadação de Alimentos" },
  { date: new Date(2025, 9, 15), title: "Voluntariado em Abrigos" },
  { date: new Date(2025, 9, 30), title: "Dia Nacional de Combate à Fome" },
  { date: new Date(2025, 10, 5), title: "Campanha de Vacinação" },
  { date: new Date(2025, 10, 20), title: "Dia Internacional da Solidariedade" },
  { date: new Date(2025, 11, 1), title: "Natal Solidário" },
  { date: new Date(2025, 11, 10), title: "Campanha de Brinquedos" },
];

export function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const eventsToday = events.filter(
    (event) => date && event.date.toDateString() === date.toDateString()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-[#2B5329]">
          Calendário de Eventos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ptBR}
          formatters={{
            formatCaption: (date) => {
              return format(date, "MMMM yyyy", { locale: ptBR }).toLowerCase();
            },
            formatWeekday: (date: Date) => {
              return format(date, "eee", { locale: ptBR }).toLowerCase();
            },
          }}
          className="calendar-custom"
          modifiers={{
            event: (date) =>
              events.some(
                (event) => event.date.toDateString() === date.toDateString()
              ),
          }}
          modifiersStyles={{
            event: { backgroundColor: "#2B5329", color: "white" },
          }}
          components={{
            IconLeft: () => <ChevronLeft className="h-4 w-4" />,
            IconRight: () => <ChevronRight className="h-4 w-4" />,
          }}
        />
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Eventos neste dia:</h3>
          {eventsToday.length > 0 ? (
            eventsToday.map((event, index) => (
              <p key={index} className="text-gray-700">
                {event.title}
              </p>
            ))
          ) : (
            <p className="text-gray-500">Não há eventos neste dia.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
