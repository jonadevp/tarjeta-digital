export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Contacto directo",
    description:
      "Botón de WhatsApp y formulario con protección anti-spam para que te escriban como prefieran.",
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  },
  {
    title: "Se adapta a todo",
    description:
      "Se ve bien en celular, tablet y computadora, con modo claro y oscuro.",
    icon: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  },
  {
    title: "Visible en buscadores",
    description:
      "Tu sitio registrado en Google y Bing, con metaetiquetas para que se vea bien al compartirlo.",
    icon: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  },
  {
    title: "Demo en vivo sin costo",
    description: "Ves cómo queda tu página, en vivo, antes de decidir.",
    icon: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5Z"/>',
  },
  {
    title: "1 mes de mantenimiento",
    description: "Cambios menores incluidos después de publicar.",
    icon: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.6-.6-.6-2.6Z"/>',
  },
  {
    title: "Estadísticas de visitas",
    description: "Consulta cuánta gente visita tu página y qué botones toca.",
    icon: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  },
];