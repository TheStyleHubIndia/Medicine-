// GitHub Pages / production auth storage.
// The old editor-preview broker is intentionally removed: production auth
// must use the browser's own localStorage and never depend on an editor frame.
export function brokeredPreviewStorage() {
  if (typeof window === "undefined") return undefined;
  return window.localStorage;
}
