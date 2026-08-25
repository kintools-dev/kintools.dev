import { createContext, useContext } from "react";

// Lets a `<CodeGroup>` know it's nested inside a `<SideBySide>` that has
// gone fullscreen, so it can lay every tab out side by side instead of
// switching between them.
const SideBySideContext = createContext(false);

export const SideBySideProvider = SideBySideContext.Provider;

export function useSideBySideFullscreen(): boolean {
  return useContext(SideBySideContext);
}
