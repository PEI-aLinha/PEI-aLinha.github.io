import { base } from 'astro:config/client';

export function url(path: string): string {
  return `${base}${path.replace(/^\//, '')}`;
}
