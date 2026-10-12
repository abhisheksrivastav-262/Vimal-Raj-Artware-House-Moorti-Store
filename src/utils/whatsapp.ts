import { BUSINESS } from "../config/business";

export function waNumber(num?: string): string {
  const n = (num ?? BUSINESS.defaultWhatsApp).replace(/\D/g, "");
  return n.startsWith("91") ? n : `91${n}`;
}

export function waLink(message: string, num?: string): string {
  return `https://wa.me/${waNumber(num)}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string, quantity?: string, requirement?: string): string {
  let msg = `Hello ${BUSINESS.name}, I am interested in [${productName}]. Please share the price, specifications, and availability.`;
  if (quantity?.trim()) msg += ` Quantity required: ${quantity.trim()}.`;
  if (requirement?.trim()) msg += ` Requirement: ${requirement.trim()}`;
  return msg;
}

export function bulkEnquiryMessage(fields: {
  name: string; company?: string; category: string; quantity: string; country?: string; details: string;
}): string {
  return (
    `Hello ${BUSINESS.name} (${BUSINESS.brand}), I want to place a bulk / wholesale enquiry.\n` +
    `Name: ${fields.name}\n` +
    (fields.company ? `Company: ${fields.company}\n` : "") +
    `Product Category: ${fields.category}\n` +
    `Approximate Quantity: ${fields.quantity}\n` +
    (fields.country ? `Country: ${fields.country}\n` : "") +
    `Requirement Details: ${fields.details}`
  );
}

export function telLink(phone: string): string {
  return `tel:+91${phone.replace(/\D/g, "").slice(-10)}`;
}
