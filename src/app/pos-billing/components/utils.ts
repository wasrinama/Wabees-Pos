// src/app/pos-billing/components/ui/utils.ts

// Utility function to combine class names conditionally
export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
