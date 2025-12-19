export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Projeto: React + Tailwind (Exemplo)</h1>
        <p className="text-gray-600">Este é um template inicial para a atividade de UI com Tailwind.</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded">Card 1</div>
          <div className="p-4 bg-gray-100 rounded">Card 2</div>
        </div>
      </div>
    </main>
  )
}
