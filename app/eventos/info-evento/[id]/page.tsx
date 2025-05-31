"use client";

import {
  House,
  Info,
  MapPin,
  Phone,
  PlusCircleIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const events = [
  {
    id: 1,
    title: "Campanha de Doação de Agasalhos",
    date: "2025-07-15",
    location: "Centro Comunitário São José",
    description:
      "Ajude-nos a aquecer quem mais precisa neste inverno. Estamos coletando agasalhos, cobertores e meias em bom estado.",
    contact: "(11) 1234-5678",
    organizer: "Organização: Associação Beneficente São José",
    additionalInfo:
      "Traga suas doações para o Centro Comunitário São José e ajude a aquecer muitas pessoas neste inverno.",
    cep: "12345-678",
    addressStreet: "Rua Exemplo, 123",
    addressNeighborhood: "Centro",
    addressCity: "São Paulo",
    addressState: "SP",
    addressCountry: "Brasil",
    addressComplement: "Próximo à Praça da Liberdade",
    addressNumber: "456",
  },
  {
    id: 2,
    title: "Mutirão de Limpeza do Rio",
    date: "2025-08-22",
    location: "Parque Municipal",
    description:
      "Junte-se a nós para limpar as margens do rio e conscientizar sobre a importância da preservação ambiental.",
    contact: "(11) 2345-6789",
    organizer: "Organização: Amigos do Meio Ambiente",
    additionalInfo:
      "O evento contará com a presença de educadores ambientais que darão palestras sobre a importância da preservação das águas.",
    cep: "23456-789",
    addressStreet: "Avenida Verde, 456",
    addressNeighborhood: "Jardim das Flores",
    addressCity: "São Paulo",
    addressState: "SP",
    addressCountry: "Brasil",
    addressComplement: "Entrada pela Rua das Palmeiras",
    addressNumber: "789",
  },
  {
    id: 3,
    title: "Feira de Adoção de Animais",
    date: "2025-09-05",
    location: "Praça Central",
    description:
      "Venha conhecer e possivelmente adotar um novo amigo peludo. Todos os animais são vacinados e castrados.",
    contact: " (11) 3456-7890",
    organizer: "Organização: Pet Lovers Brasil",
    additionalInfo:
      "Durante o evento, haverá atividades para crianças e conscientização sobre a importância da adoção responsável.",
    cep: "34567-890",
    addressStreet: "Rua dos Animais, 789",
    addressNeighborhood: "Centro",
    addressCity: "São Paulo",
    addressState: "SP",
    addressCountry: "Brasil",
    addressComplement: "Próximo ao Parque Ibirapuera",
    addressNumber: "1011",
  },
];

export default function EventInfo({ params }) {
  const id = Number(params.id);
  const event = events.find((event) => event.id === id);

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (event) {
      const interval = setInterval(() => {
        const eventDate = dayjs(event.date);
        const now = dayjs();
        const diff = eventDate.diff(now, "millisecond");
        if (diff <= 0) {
          setTimeLeft("Evento começou!");
          clearInterval(interval);
        } else {
          const days = eventDate.diff(now, "day");
          const hours = eventDate.diff(now, "hour") % 24;
          const minutes = eventDate.diff(now, "minute") % 60;
          const seconds = eventDate.diff(now, "second") % 60;

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [event]);

  if (!event) {
    return <div>Evento não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <header className="bg-[#2B5329] text-white py-8 text-center shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold">{event.title}</h1>

        <p className="mt-2 text-lg text-gray-200">
          {timeLeft ? "Restam:" : "Início em:"}
          <br />
          {timeLeft ? (
            <span className="text-3xl font-bold animate-pulse">{timeLeft}</span>
          ) : (
            <span className="text-3xl font-bold animate-pulse">
              {dayjs(event.date).format("DD/MM/YYYY HH:mm")}
            </span>
          )}
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12 flex justify-center items-center gap-3 text-white">
          <div className="flex items-center gap-3 bg-[#2B5329] text-white  p-2 w-full justify-center">
            <House className="h-5 w-5" />
            <span className="text-xl font-semibold">{event.location}</span>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2B5329] mb-4 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-[#2B5329]" />
            Endereço
          </h2>
          <p className="text-gray-800">
            {event.addressStreet}, {event.addressNumber} -{" "}
            {event.addressNeighborhood}
            <br />
            {event.addressCity} - {event.addressState}, {event.cep}
            <br />
            {event.addressCountry}
            <br />
            {event.addressComplement}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2B5329] mb-4 flex items-center gap-2">
            <Info className="h-6 w-6 text-[#2B5329]" />
            Descrição
          </h2>
          <p className="text-gray-800">{event.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2B5329] mb-4 flex items-center gap-2">
            <PlusCircleIcon className="h-6 w-6 text-[#2B5329]" />
            Informações Adicionais
          </h2>
          <p className="text-gray-800">{event.additionalInfo}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2B5329] mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-[#2B5329]" />
            Organizador
          </h2>
          <p className="text-gray-800">{event.organizer}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2B5329] mb-4 flex items-center gap-2">
            <Phone className="h-6 w-6 text-[#2B5329]" />
            Contato
          </h2>
          <p className="text-gray-800">{event.contact}</p>
        </section>

        <div className="flex justify-center mt-8">
          <Link href="/eventos">
            <button className="bg-[#2B5329] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#1e4321] transition-colors">
              Voltar para a Lista de Eventos
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
