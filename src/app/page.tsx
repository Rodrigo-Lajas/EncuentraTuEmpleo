import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center p-8">

      <h1 className="text-3xl font-bold text-center">Este sitio se encuentra en construcción</h1>
      <h3 className="text-lg text-center my-4">¡Pronto habrá novedades!</h3>

      <Image
        src="/pagina-en-construccion.webp"
        alt="Work"
        width={500}
        height={500}
      />

      <footer className="flex flex-col items-center justify-center text-center my-4">
        <p className="text-sm text-gray-500">Para más información, ponerse en contacto con el desarrollador:</p>
        <a
          className="text-sm text-gray-500 hover:text-gray-700 my-4"
          href="https://www.rodrigolajas.com.ar"
        >
          Rodrigo Lajas
        </a>
      </footer>
    </div>
  );
}
