export function joinBase(basePath: string, path: string): string {
  const normalizedBase = `${basePath.replace(/\/+$/, '')}/`;
  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
}
