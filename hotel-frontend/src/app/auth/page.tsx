// src/app/auth/page.tsx
"use client"

import React, { Suspense } from "react"
import AuthPage from "./authPage"

export default function AuthPageWrapper() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AuthPage />
    </Suspense>
  )
}
