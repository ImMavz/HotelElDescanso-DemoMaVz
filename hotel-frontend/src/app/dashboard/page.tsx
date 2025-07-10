"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  Calendar,
  Settings,
  LogOut,
  Phone,
  Mail,
  Bed,
  Clock,
  Star,
  Waves,
  Coffee,
  Car,
  Utensils,
  Dumbbell,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
} from "lucide-react"
import "./dashboard.css"

type SectionType = "profile" | "services" | "extend"

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<SectionType>("profile")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [contractedServices, setContractedServices] = useState<string[]>([])

  // Datos simulados del usuario
  const userData = {
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+1 (555) 123-4567",
    memberSince: "Enero 2023",
    currentReservation: {
      room: "Suite Presidencial",
      checkIn: "15 Dic 2024",
      checkOut: "20 Dic 2024",
      days: 5,
      guests: 2,
    },
    contractedServices: ["WiFi Premium", "Room Service", "Valet Parking"],
  }

  const availableServices = [
    {
      id: "spa",
      name: "Spa & Wellness",
      description: "Acceso completo al spa con masajes y tratamientos",
      price: "$150/día",
      icon: Waves,
      popular: true,
    },
    {
      id: "pool",
      name: "Piscina Privada",
      description: "Acceso exclusivo a piscina privada en la azotea",
      price: "$80/día",
      icon: Waves,
      popular: false,
    },
    {
      id: "bar",
      name: "Bar Premium",
      description: "Bebidas premium ilimitadas y cocteles exclusivos",
      price: "$120/día",
      icon: Coffee,
      popular: true,
    },
    {
      id: "gym",
      name: "Gimnasio Personal",
      description: "Entrenador personal y acceso 24/7 al gimnasio",
      price: "$100/día",
      icon: Dumbbell,
      popular: false,
    },
    {
      id: "dining",
      name: "Cena Gourmet",
      description: "Menú degustación del chef con maridaje de vinos",
      price: "$200/noche",
      icon: Utensils,
      popular: true,
    },
    {
      id: "transport",
      name: "Transporte VIP",
      description: "Servicio de chofer privado y vehículo de lujo",
      price: "$300/día",
      icon: Car,
      popular: false,
    },
  ]

  const toggleService = (serviceId: string) => {
    setContractedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const generateCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const isDateSelected = (date: Date | null) => {
    if (!date) return false
    return selectedDates.some((selectedDate) => selectedDate.toDateString() === date.toDateString())
  }

  const toggleDateSelection = (date: Date) => {
    setSelectedDates((prev) => {
      const isSelected = prev.some((selectedDate) => selectedDate.toDateString() === date.toDateString())
      if (isSelected) {
        return prev.filter((selectedDate) => selectedDate.toDateString() !== date.toDateString())
      } else {
        return [...prev, date]
      }
    })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const renderProfileSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Mi Perfil</h2>
        <p>Información personal y reservas actuales</p>
      </div>

      <div className="profile-grid">
        {/* User Info Card */}
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">
              <User />
            </div>
          </div>
          <div className="profile-info">
            <h3>{userData.name}</h3>
            <p className="member-since">Miembro desde {userData.memberSince}</p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail />
                <span>{userData.email}</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Reservation Card */}
        <div className="reservation-card">
          <div className="card-header">
            <h3>Reserva Actual</h3>
            <div className="status-badge active">Activa</div>
          </div>
          <div className="reservation-details">
            <div className="detail-item">
              <Bed />
              <div>
                <span className="label">Habitación</span>
                <span className="value">{userData.currentReservation.room}</span>
              </div>
            </div>
            <div className="detail-item">
              <Calendar />
              <div>
                <span className="label">Check-in</span>
                <span className="value">{userData.currentReservation.checkIn}</span>
              </div>
            </div>
            <div className="detail-item">
              <Calendar />
              <div>
                <span className="label">Check-out</span>
                <span className="value">{userData.currentReservation.checkOut}</span>
              </div>
            </div>
            <div className="detail-item">
              <Clock />
              <div>
                <span className="label">Duración</span>
                <span className="value">{userData.currentReservation.days} días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Card */}
        <div className="services-card">
          <div className="card-header">
            <h3>Servicios Contratados</h3>
          </div>
          <div className="services-list">
            {userData.contractedServices.map((service, index) => (
              <div key={index} className="service-item">
                <Check />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderServicesSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Servicios Adicionales</h2>
        <p>Mejora tu experiencia con nuestros servicios premium</p>
      </div>

      <div className="services-grid">
        {availableServices.map((service) => (
          <div key={service.id} className={`service-card ${contractedServices.includes(service.id) ? "selected" : ""}`}>
            {service.popular && <div className="popular-badge">Popular</div>}
            <div className="service-icon">
              <service.icon />
            </div>
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
            <button
              onClick={() => toggleService(service.id)}
              className={`service-button ${contractedServices.includes(service.id) ? "contracted" : ""}`}
            >
              {contractedServices.includes(service.id) ? (
                <>
                  <Check />
                  Contratado
                </>
              ) : (
                <>
                  <Plus />
                  Contratar
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {contractedServices.length > 0 && (
        <div className="contracted-summary">
          <h3>Resumen de Servicios Contratados</h3>
          <div className="summary-list">
            {contractedServices.map((serviceId) => {
              const service = availableServices.find((s) => s.id === serviceId)
              return (
                <div key={serviceId} className="summary-item">
                  <span>{service?.name}</span>
                  <span>{service?.price}</span>
                </div>
              )
            })}
          </div>
          <button className="confirm-button">Confirmar Servicios</button>
        </div>
      )}
    </div>
  )

  const renderExtendSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Extender Reserva</h2>
        <p>Selecciona las fechas adicionales para tu estadía</p>
      </div>

      <div className="extend-grid">
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={() => navigateMonth("prev")} className="nav-button">
              <ChevronLeft />
            </button>
            <h3>
              {currentDate.toLocaleDateString("es-ES", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button onClick={() => navigateMonth("next")} className="nav-button">
              <ChevronRight />
            </button>
          </div>

          <div className="calendar-grid">
            <div className="weekdays">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
            </div>
            <div className="days-grid">
              {generateCalendar().map((date, index) => (
                <div
                  key={index}
                  className={`calendar-day ${date ? "available" : "empty"} ${
                    date && isDateSelected(date) ? "selected" : ""
                  }`}
                  onClick={() => date && toggleDateSelection(date)}
                >
                  {date?.getDate()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="extension-summary">
          <h3>Resumen de Extensión</h3>
          <div className="current-stay">
            <h4>Estadía Actual</h4>
            <p>
              {userData.currentReservation.checkIn} - {userData.currentReservation.checkOut}
            </p>
            <p>{userData.currentReservation.days} días</p>
          </div>

          {selectedDates.length > 0 && (
            <div className="extension-details">
              <h4>Días Adicionales</h4>
              <div className="selected-dates">
                {selectedDates
                  .sort((a, b) => a.getTime() - b.getTime())
                  .map((date, index) => (
                    <div key={index} className="selected-date">
                      {date.toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                  ))}
              </div>
              <div className="extension-cost">
                <div className="cost-item">
                  <span>Días adicionales: {selectedDates.length}</span>
                  <span>${selectedDates.length * 299}</span>
                </div>
                <div className="cost-total">
                  <span>Total</span>
                  <span>${selectedDates.length * 299}</span>
                </div>
              </div>
              <button className="extend-button">Confirmar Extensión</button>
            </div>
          )}

          {selectedDates.length === 0 && (
            <div className="no-selection">
              <p>Selecciona las fechas en el calendario para extender tu reserva</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-text-dashboard">
              <h1>Hotel El Descanso</h1>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => setActiveSection("profile")}
            className={`nav-item ${activeSection === "profile" ? "active" : ""}`}
          >
            <User />
            <span>Mi Perfil</span>
          </button>
          <button
            onClick={() => setActiveSection("services")}
            className={`nav-item ${activeSection === "services" ? "active" : ""}`}
          >
            <Star />
            <span>Servicios</span>
          </button>
          <button
            onClick={() => setActiveSection("extend")}
            className={`nav-item ${activeSection === "extend" ? "active" : ""}`}
          >
            <Calendar />
            <span>Extender Reserva</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Settings />
            <span>Configuración</span>
          </button>
          <Link href="/" className="nav-item">
            <LogOut />
            <span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {activeSection === "profile" && renderProfileSection()}
          {activeSection === "services" && renderServicesSection()}
          {activeSection === "extend" && renderExtendSection()}
        </div>
      </main>
    </div>
  )
}
