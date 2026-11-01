import { z } from 'astro/zod';
import { CONTACT_LIMITS, TYPE_PROJECTS } from "@/constants/contact";

const LINK_REGEX = /(https?:\/\/|www\.)/i;
const NAME_ALLOWED_REGEX = /^[\p{L}\p{M} ]+$/u;
const EMOJI_OR_INVISIBLE_REGEX =
  /[\p{Extended_Pictographic}\p{Emoji_Modifier}\p{Regional_Indicator}\p{Cf}\uFE0F\u20E3]/u;

export const fullNameSchema = z
  .string({ error: "El nombre completo es requerido" })
  .trim()
  .min(CONTACT_LIMITS.fullnameMin, { error: `El nombre debe tener al menos ${CONTACT_LIMITS.fullnameMin} caracteres`})
  .max(CONTACT_LIMITS.fullnameMax, { error: "El nombre es demasiado largo"})
  .refine((name) => NAME_ALLOWED_REGEX.test(name), {
    error: "El nombre solo puede tener letras y espacios",
  })
  .refine((value) => !EMOJI_OR_INVISIBLE_REGEX.test(value), {
    error: "No se permiten emojis ni caracteres especiales",
  })


export const typeProjectSchema = z.enum(TYPE_PROJECTS, {error: "Elije un tipo de projecto"})

export const messageSchema = z
.string({ error: "El mensaje es requerido" })
.trim()
.min(CONTACT_LIMITS.messageMin, {error: `El mensaje debe tener al menos ${CONTACT_LIMITS.messageMin} caracteres`})
.max(CONTACT_LIMITS.messageMax, { error: "El mensaje es demasiado largo" })
.refine((message) => !LINK_REGEX.test(message), {
  error: "No se permiten enlaces en el mensaje",
})
.refine((value) => !EMOJI_OR_INVISIBLE_REGEX.test(value), {
    error: "No se permiten emojis ni caracteres especiales",
  })

export const contactSchema = z.object({
    fullname: fullNameSchema,
    type_project: typeProjectSchema,
    message: messageSchema
});