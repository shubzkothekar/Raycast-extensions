//
//  search-docs.tsx
//  Supernova.io Raycast Extension
//
//  Created by Jiri Trecak <Supernova.io>
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { AuthLock } from "./ui/setup/onboarding/auth-lock"
import { DocSearch } from "./ui/search-docs/doc-search"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Definitions

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Main UI Component

export default function Command() {
  // ----- Render
  return <AuthLock authenticatedChild={<DocSearch />} />
}
