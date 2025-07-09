"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import backgroundImage from "../../assets/landing.webp" // Adjust the path as necessary
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Phone } from "lucide-react"
import "./auth.css"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const mode = searchParams.get("mode")
    if (mode === "signup") {
      setIsLogin(false)
    }
  }, [searchParams])

  const toggleMode = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsLogin(!isLogin)
      setIsAnimating(false)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log(isLogin ? "Login submitted" : "Signup submitted")
  }

  return (
    <div className="auth-container">
      {/* Background Image */}
      <div className="auth-background">
        <Image
          src={backgroundImage}
          alt="Hotel El Descanso"
          fill
          className="object-cover"
          priority
        />
        <div className="auth-overlay"></div>
      </div>

      {/* Back to Home Button */}
      <Link href="/" className="back-button">
        <ArrowLeft />
        <span>Volver al inicio</span>
      </Link>

      {/* Auth Card */}
      <div className="auth-card">
        {/* Logo Section */}
        <div className="auth-logo">
          <div className="logo-text">
            <h1>Hotel El Descanso</h1>
            <p>Tu refugio perfecto</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          <div className={`form-wrapper ${isAnimating ? "animating" : ""}`}>
            {/* Login Form */}
            <div className={`auth-form ${isLogin ? "active" : "inactive"}`}>
              <div className="form-header">
                <h2>Iniciar Sesión</h2>
                <p>Bienvenido de vuelta a tu refugio perfecto</p>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input type="email" placeholder="Correo electrónico" required className="input-field" />
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      required
                      className="input-field"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Recordarme
                  </label>
                  <Link href="/forgot-password" className="forgot-link">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button type="submit" className="submit-button">
                  Iniciar Sesión
                </button>
              </form>

              <div className="form-footer">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <button onClick={toggleMode} className="toggle-button">
                    Regístrate aquí
                  </button>
                </p>
              </div>
            </div>

            {/* Signup Form */}
            <div className={`auth-form ${!isLogin ? "active" : "inactive"}`}>
              <div className="form-header">
                <h2>Crear Cuenta</h2>
                <p>Únete a nosotros y disfruta de experiencias únicas</p>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="input-row">
                  <div className="input-group">
                    <div className="input-wrapper">
                      <User className="input-icon" />
                      <input type="text" placeholder="Nombre" required className="input-field" />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-wrapper">
                      <User className="input-icon" />
                      <input type="text" placeholder="Apellido" required className="input-field" />
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input type="email" placeholder="Correo electrónico" required className="input-field" />
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Phone className="input-icon" />
                    <input type="tel" placeholder="Teléfono" required className="input-field" />
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña"
                      required
                      className="input-field"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirmar contraseña"
                      required
                      className="input-field"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="password-toggle"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    Acepto los{" "}
                    <Link href="/terms" className="terms-link">
                      términos y condiciones
                    </Link>
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Crear Cuenta
                </button>
              </form>

              <div className="form-footer">
                <p>
                  ¿Ya tienes una cuenta?{" "}
                  <button onClick={toggleMode} className="toggle-button">
                    Inicia sesión aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <div className="divider">
            <span>O continúa con</span>
          </div>
          <div className="social-buttons">
            <button className="social-button google">
              <span>Google</span>
            </button>
            <button className="social-button facebook">
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
