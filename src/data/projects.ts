import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Barber & Co.",
    category: "Landing page",
    description:
      "Página para una barbería: servicios, cortes y estilos, especialistas y reserva de citas.",
    tags: ["Agenda de citas", "Lista de precios", "Botón de WhatsApp"],
    image: "/barberco.webp",
    kind: "conceptual",
  },
  {
    title: "TitanGym",
    category: "Landing page",
    description:
      "Página para un gimnasio: disciplinas, membresías, instalaciones y coaches, con inscripción por WhatsApp.",
    tags: ["Inscripción por WhatsApp", "Membresías", "Botón de WhatsApp"],
    image: "/titangym.webp",
    kind: "conceptual",
  },
  {
    title: "Kinesia",
    category: "Sitio informativo",
    description:
      "Sitio para un centro de fisioterapia: servicios, estudio ecográfico, casos de éxito y ubicación con horarios.",
    tags: ["Agenda de citas", "Ubicación y horarios", "Contacto por WhatsApp"],
    image: "/kinesia.webp",
    kind: "conceptual",
  },
  {
    title: "Adoptapets",
    category: "Sitio informativo",
    description:
      "Sitio para un refugio de mascotas: perros disponibles con filtros, proceso de adopción y llamada a donar.",
    tags: ["Filtros por tamaño y edad", "Donaciones por WhatsApp", "Formulario de contacto"],
    image: "/adoptapets.webp",
    kind: "conceptual",
  },
  {
    title: "Aurora Arts",
    category: "Porfolio",
    description: "Porfolio para la exposición personal de una artista y sus obras.",
    tags: ["Galería con filtros", "Comisiones de obra"],
    image: "/auroraarts.webp",
    kind: "conceptual",
  },
  {
    title: "Verecp",
    category: "Sitio informativo",
    description:
      "Sitio para una consultoría de pymes: servicios, calculadora de ROI, casos de éxito y preguntas frecuentes.",
    tags: ["Calculadora de ROI", "Diagnóstico gratuito", "Preguntas frecuentes"],
    image: "/verecp.webp",
    kind: "conceptual",
  },
];