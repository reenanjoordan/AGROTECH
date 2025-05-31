import { DonationCard } from "@/components/donation-card";

const donationPoints = [
  {
    id: 1,
    name: "Casa de Apoio São José",
    image:
      "https://st.depositphotos.com/1035121/2948/i/600/depositphotos_29486705-stock-photo-house-of-paper-in-hand.jpg",
    address: "Rua Exemplo, 123 - Centro, São Paulo",
    phone: "(11) 1234-5678",
    hours: "Segunda a Sexta: 8h às 18h",
    items: [
      "Roupas em bom estado",
      "Cobertores",
      "Alimentos não perecíveis",
      "Produtos de higiene",
    ],
    bankInfo: {
      bank: "XXX",
      agency: "0000",
      account: "00000-0",
      pix: "00.000.000/0001-00",
    },
  },
  {
    id: 2,
    name: "Instituto do Bem",
    image:
      "https://st.depositphotos.com/1823785/2402/i/600/depositphotos_24022669-stock-photo-family-with-house-of-hands.jpg",
    address: "Avenida Exemplo, 456 - Centro, Rio de Janeiro",
    phone: "(21) 9876-5432",
    hours: "Segunda a Sábado: 9h às 17h",
    items: [
      "Alimentos não perecíveis",
      "Roupas e calçados",
      "Brinquedos",
      "Produtos de limpeza",
    ],
    bankInfo: {
      bank: "YYY",
      agency: "1111",
      account: "22222-2",
      pix: "11.111.111/1111-11",
    },
  },
  {
    id: 3,
    name: "Lar da Esperança",
    image:
      "https://st2.depositphotos.com/16122460/50575/i/600/depositphotos_505758714-stock-photo-woman-holding-house-figure-green.jpg",
    address: "Rua Solidariedade, 789 - Centro, Belo Horizonte",
    phone: "(31) 3456-7890",
    hours: "Terça a Domingo: 10h às 16h",
    items: [
      "Alimentos não perecíveis",
      "Roupas e cobertores",
      "Produtos de higiene pessoal",
      "Livros e materiais escolares",
    ],
    bankInfo: {
      bank: "ZZZ",
      agency: "2222",
      account: "33333-3",
      pix: "22.222.222/2222-22",
    },
  },
];

export default function DonationsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="bg-[#2B5329] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold ">Pontos de Doação</h1>
          <p className="text-xl">Conheça os locais que precisam da sua ajuda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {donationPoints.map((point) => (
            <DonationCard key={point.id} {...point} />
          ))}
        </div>
      </div>
    </main>
  );
}
