export const WHATSAPP_NUMBER = "522722846688";

export const whatsappLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CONTACT_LIMITS = {
  fullnameMin: 2,
  fullnameMax: 80,
  messageMin: 10,
  messageMax: 500,
} as const;

export const TYPE_PROJECTS = [
  "Landing page",
  "Sitio web informativo",
  "Porfolio",
  "Otro",
] as const;

