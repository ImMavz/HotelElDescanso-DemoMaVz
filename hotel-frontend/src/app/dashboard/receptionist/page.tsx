"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  Search,
  Calendar,
  Settings,
  LogOut,
  Phone,
  Mail,
  Bed,
  Clock,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
  Users,
  CreditCard,
} from "lucide-react"
import "./receptionist.css"

type SectionType = "profile" | "reservations"

export default function ReceptionistDashboard() {
  const [activeSection, setActiveSection] = useState<SectionType>("profile")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedReservation, setSelectedReservation] = useState<string | null>(null)

  // Datos simulados del recepcionista
  const receptionistData = {
    name: "Ana Martínez",
    role: "Recepcionista",
    email: "ana.martinez@hoteldescanso.com",
    phone: "+1 (555) 987-6543",
    employeeId: "REC-001",
    shift: "Turno Mañana (6:00 AM - 2:00 PM)",
    startDate: "Marzo 2023",
  }

  // Datos simulados de reservaciones
  const reservationsData = [
    {
      id: "RES-001",
      guestName: "Carlos Rodríguez",
      guestId: "12345678",
      email: "carlos@email.com",
      phone: "+1 (555) 111-2222",
      room: "Suite Presidencial",
      roomNumber: "301",
      checkIn: "2024-12-15",
      checkOut: "2024-12-20",
      guests: 2,
      status: "confirmed",
      totalAmount: 1495,
      services: ["Spa & Wellness", "Room Service"],
    },
    {
      id: "RES-002",
      guestName: "María González",
      guestId: "87654321",
      email: "maria@email.com",
      phone: "+1 (555) 333-4444",
      room: "Habitación Deluxe",
      roomNumber: "205",
      checkIn: "2024-12-18",
      checkOut: "2024-12-22",
      guests: 1,
      status: "checked-in",
      totalAmount: 796,
      services: ["WiFi Premium", "Valet Parking"],
    },
    {
      id: "RES-003",
      guestName: "Juan Pérez",
      guestId: "11223344",
      email: "juan@email.com",
      phone: "+1 (555) 555-6666",
      room: "Habitación Estándar",
      roomNumber: "102",
      checkIn: "2024-12-20",
      checkOut: "2024-12-23",
      guests: 2,
      status: "pending",
      totalAmount: 387,
      services: ["WiFi Premium"],
    },
    {
      id: "RES-004",
      guestName: "Laura Silva",
      guestId: "99887766",
      email: "laura@email.com",
      phone: "+1 (555) 777-8888",
      room: "Suite Presidencial",
      roomNumber: "302",
      checkIn: "2024-12-16",
      checkOut: "2024-12-19",
      guests: 3,
      status: "checked-out",
      totalAmount: 897,
      services: ["Bar Premium", "Cena Gourmet"],
    },
  ]

  const filteredReservations = reservationsData.filter(
    (reservation) =>
      reservation.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.guestId.includes(searchTerm) ||
      reservation.roomNumber.includes(searchTerm),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed"
      case "checked-in":
        return "status-checked-in"
      case "pending":
        return "status-pending"
      case "checked-out":
        return "status-checked-out"
      default:
        return "status-pending"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada"
      case "checked-in":
        return "Hospedado"
      case "pending":
        return "Pendiente"
      case "checked-out":
        return "Finalizada"
      default:
        return "Pendiente"
    }
  }

  const renderProfileSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Mi Perfil</h2>
        <p>Información del empleado y turno actual</p>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle receptionist">
              <User />
            </div>
          </div>
          <div className="profile-info">
            <h3>{receptionistData.name}</h3>
            <div className="role-badge receptionist">{receptionistData.role}</div>
            <p className="employee-id">ID: {receptionistData.employeeId}</p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail />
                <span>{receptionistData.email}</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>{receptionistData.phone}</span>
              </div>
              <div className="contact-item">
                <Clock />
                <span>{receptionistData.shift}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <Users />
            </div>
            <div className="stat-info">
              <h3>24</h3>
              <p>Huéspedes Activos</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Bed />
            </div>
            <div className="stat-info">
              <h3>18</h3>
              <p>Habitaciones Ocupadas</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Calendar />
            </div>
            <div className="stat-info">
              <h3>7</h3>
              <p>Check-ins Hoy</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <CheckCircle />
            </div>
            <div className="stat-info">
              <h3>5</h3>
              <p>Check-outs Hoy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReservationsSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Gestión de Reservaciones</h2>
        <p>Buscar, crear y modificar reservaciones de huéspedes</p>
      </div>

      <div className="reservations-controls">
        <div className="search-container">
          <Search />
          <input
            type="text"
            placeholder="Buscar por nombre, cédula o habitación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="add-reservation-btn">
          <Plus />
          Nueva Reservación
        </button>
      </div>

      <div className="reservations-grid">
        {filteredReservations.map((reservation) => (
          <div
            key={reservation.id}
            className={`reservation-card ${selectedReservation === reservation.id ? "selected" : ""}`}
            onClick={() => setSelectedReservation(reservation.id)}
          >
            <div className="reservation-header">
              <div className="guest-info">
                <h3>{reservation.guestName}</h3>
                <p>Cédula: {reservation.guestId}</p>
              </div>
              <div className={`status-badge ${getStatusColor(reservation.status)}`}>
                {getStatusText(reservation.status)}
              </div>
            </div>

            <div className="reservation-details">
              <div className="detail-row">
                <div className="detail-item">
                  <Bed />
                  <div>
                    <span className="label">Habitación</span>
                    <span className="value">
                      {reservation.room} - {reservation.roomNumber}
                    </span>
                  </div>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-item">
                  <Calendar />
                  <div>
                    <span className="label">Check-in</span>
                    <span className="value">{reservation.checkIn}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <Calendar />
                  <div>
                    <span className="label">Check-out</span>
                    <span className="value">{reservation.checkOut}</span>
                  </div>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-item">
                  <Users />
                  <div>
                    <span className="label">Huéspedes</span>
                    <span className="value">{reservation.guests}</span>
                  </div>
                </div>
                <div className="detail-item">
                  <CreditCard />
                  <div>
                    <span className="label">Total</span>
                    <span className="value">${reservation.totalAmount}</span>
                  </div>
                </div>
              </div>

              {reservation.services.length > 0 && (
                <div className="services-list">
                  <span className="services-label">Servicios:</span>
                  <div className="services-tags">
                    {reservation.services.map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="reservation-actions">
              <button className="action-btn edit">
                <Edit />
                Editar
              </button>
              <button className="action-btn delete">
                <Trash2 />
                Cancelar
              </button>
              {reservation.status === "confirmed" && (
                <button className="action-btn checkin">
                  <CheckCircle />
                  Check-in
                </button>
              )}
              {reservation.status === "checked-in" && (
                <button className="action-btn checkout">
                  <XCircle />
                  Check-out
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredReservations.length === 0 && (
        <div className="no-results">
          <p>No se encontraron reservaciones que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  )

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar receptionist">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-text-dashboard">
              <h1>Hotel El Descanso</h1>
              <p>Panel Recepcionista</p>
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
            onClick={() => setActiveSection("reservations")}
            className={`nav-item ${activeSection === "reservations" ? "active" : ""}`}
          >
            <Calendar />
            <span>Reservaciones</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Settings />
            <span>Configuración</span>
          </button>
          <Link href="/auth" className="nav-item">
            <LogOut />
            <span>Cerrar Sesión</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {activeSection === "profile" && renderProfileSection()}
          {activeSection === "reservations" && renderReservationsSection()}
        </div>
      </main>
    </div>
  )
}
