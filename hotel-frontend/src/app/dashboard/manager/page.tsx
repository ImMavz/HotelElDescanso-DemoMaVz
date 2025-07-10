"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  BarChart3,
  TrendingUp,
  Settings,
  LogOut,
  Phone,
  Mail,
  Users,
  Bed,
  DollarSign,
  Star,
  Calendar,
  Award,
  Activity,
} from "lucide-react"
import "./manager.css"

type SectionType = "profile" | "analytics"

export default function ManagerDashboard() {
  const [activeSection, setActiveSection] = useState<SectionType>("profile")
  const [chartType, setChartType] = useState<"line" | "bar">("line")

  // Datos simulados del gerente
  const managerData = {
    name: "Joseph Herrera",
    role: "Gerente General",
    email: "joseph.herrera@hoteldescanso.com",
    phone: "+1 (555) 100-2000",
    employeeId: "MGR-001",
    department: "Administración General",
    startDate: "Enero 2020",
  }

  // Datos simulados para gráficas y estadísticas
  const analyticsData = {
    occupancy: {
      current: 85,
      target: 90,
      trend: "+5%",
    },
    revenue: {
      monthly: 125000,
      target: 120000,
      trend: "+4.2%",
    },
    satisfaction: {
      score: 4.7,
      reviews: 156,
      trend: "+0.3",
    },
    services: [
      { name: "Spa & Wellness", usage: 65, revenue: 15600 },
      { name: "Room Service", usage: 78, revenue: 12400 },
      { name: "Bar Premium", usage: 45, revenue: 8900 },
      { name: "Valet Parking", usage: 82, revenue: 6200 },
      { name: "Cena Gourmet", usage: 38, revenue: 11800 },
      { name: "Gimnasio Personal", usage: 25, revenue: 4500 },
    ],
    roomTypes: [
      { type: "Suite Presidencial", occupied: 8, total: 10, revenue: 45000 },
      { type: "Habitación Deluxe", occupied: 15, total: 20, revenue: 35000 },
      { type: "Habitación Estándar", occupied: 22, total: 30, revenue: 25000 },
    ],
    monthlyRevenue: [
      { month: "Ene", revenue: 98000 },
      { month: "Feb", revenue: 105000 },
      { month: "Mar", revenue: 112000 },
      { month: "Abr", revenue: 108000 },
      { month: "May", revenue: 118000 },
      { month: "Jun", revenue: 125000 },
    ],
  }

  const renderProfileSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Panel de Control</h2>
        <p>Resumen ejecutivo y métricas principales</p>
      </div>

      <div className="manager-grid">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle manager">
              <User />
            </div>
          </div>
          <div className="profile-info">
            <h3>{managerData.name}</h3>
            <div className="role-badge manager">{managerData.role}</div>
            <p className="employee-id">ID: {managerData.employeeId}</p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail />
                <span>{managerData.email}</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>{managerData.phone}</span>
              </div>
              <div className="contact-item">
                <Award />
                <span>{managerData.department}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card occupancy">
            <div className="kpi-header">
              <div className="kpi-icon">
                <Bed />
              </div>
              <div className="kpi-trend positive">{analyticsData.occupancy.trend}</div>
            </div>
            <div className="kpi-content">
              <h3>{analyticsData.occupancy.current}%</h3>
              <p>Ocupación Actual</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${analyticsData.occupancy.current}%` }}></div>
              </div>
            </div>
          </div>

          <div className="kpi-card revenue">
            <div className="kpi-header">
              <div className="kpi-icon">
                <DollarSign />
              </div>
              <div className="kpi-trend positive">{analyticsData.revenue.trend}</div>
            </div>
            <div className="kpi-content">
              <h3>${analyticsData.revenue.monthly.toLocaleString()}</h3>
              <p>Ingresos Mensuales</p>
              <div className="target-info">Meta: ${analyticsData.revenue.target.toLocaleString()}</div>
            </div>
          </div>

          <div className="kpi-card satisfaction">
            <div className="kpi-header">
              <div className="kpi-icon">
                <Star />
              </div>
              <div className="kpi-trend positive">{analyticsData.satisfaction.trend}</div>
            </div>
            <div className="kpi-content">
              <h3>{analyticsData.satisfaction.score}/5</h3>
              <p>Satisfacción Cliente</p>
              <div className="reviews-info">{analyticsData.satisfaction.reviews} reseñas</div>
            </div>
          </div>

          <div className="kpi-card guests">
            <div className="kpi-header">
              <div className="kpi-icon">
                <Users />
              </div>
              <div className="kpi-trend positive">+12%</div>
            </div>
            <div className="kpi-content">
              <h3>47</h3>
              <p>Huéspedes Activos</p>
              <div className="capacity-info">Capacidad: 60 huéspedes</div>
            </div>
          </div>
        </div>

        <div className="quick-stats">
          <h3>Resumen del Día</h3>
          <div className="stats-list">
            <div className="stat-item">
              <Calendar />
              <div>
                <span className="stat-value">8</span>
                <span className="stat-label">Check-ins programados</span>
              </div>
            </div>
            <div className="stat-item">
              <Activity />
              <div>
                <span className="stat-value">6</span>
                <span className="stat-label">Check-outs programados</span>
              </div>
            </div>
            <div className="stat-item">
              <Award />
              <div>
                <span className="stat-value">3</span>
                <span className="stat-label">Servicios VIP activos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsSection = () => (
    <div className="section-content">
      <div className="section-header">
        <h2>Análisis y Reportes</h2>
        <p>Métricas detalladas y tendencias del negocio</p>
      </div>

      <div className="analytics-grid">
        {/* Revenue Chart */}
        <div className="chart-card revenue-chart">
          <div className="chart-header">
            <h3>Ingresos Mensuales</h3>
            <div className="chart-controls">
              <button
                className={`chart-toggle ${chartType === "line" ? "active" : ""}`}
                onClick={() => setChartType("line")}
              >
                Líneas
              </button>
              <button
                className={`chart-toggle ${chartType === "bar" ? "active" : ""}`}
                onClick={() => setChartType("bar")}
              >
                Barras
              </button>
            </div>
          </div>
          <div className="chart-container">
            {chartType === "line" ? (
              <div className="line-chart">
                <div className="chart-grid">
                  {/* Grid lines */}
                  <div className="grid-lines">
                    {[0, 25, 50, 75, 100].map((line, index) => (
                      <div key={index} className="grid-line" style={{ bottom: `${line}%` }}>
                        <span className="grid-label">${(line * 1250).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Line path */}
                  <svg className="line-svg" viewBox="0 0 300 200">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
                        <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
                      </linearGradient>
                    </defs>

                    {/* Area under the line */}
                    <path
                      d={`M 25 ${200 - (analyticsData.monthlyRevenue[0].revenue / 125000) * 180} 
                         L 75 ${200 - (analyticsData.monthlyRevenue[1].revenue / 125000) * 180}
                         L 125 ${200 - (analyticsData.monthlyRevenue[2].revenue / 125000) * 180}
                         L 175 ${200 - (analyticsData.monthlyRevenue[3].revenue / 125000) * 180}
                         L 225 ${200 - (analyticsData.monthlyRevenue[4].revenue / 125000) * 180}
                         L 275 ${200 - (analyticsData.monthlyRevenue[5].revenue / 125000) * 180}
                         L 275 200 L 25 200 Z`}
                      fill="url(#areaGradient)"
                      className="area-path"
                    />

                    {/* Main line */}
                    <path
                      d={`M 25 ${200 - (analyticsData.monthlyRevenue[0].revenue / 125000) * 180} 
                         L 75 ${200 - (analyticsData.monthlyRevenue[1].revenue / 125000) * 180}
                         L 125 ${200 - (analyticsData.monthlyRevenue[2].revenue / 125000) * 180}
                         L 175 ${200 - (analyticsData.monthlyRevenue[3].revenue / 125000) * 180}
                         L 225 ${200 - (analyticsData.monthlyRevenue[4].revenue / 125000) * 180}
                         L 275 ${200 - (analyticsData.monthlyRevenue[5].revenue / 125000) * 180}`}
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="line-path"
                    />

                    {/* Data points */}
                    {analyticsData.monthlyRevenue.map((data, index) => (
                      <g key={index}>
                        <circle
                          cx={25 + index * 50}
                          cy={200 - (data.revenue / 125000) * 180}
                          r="6"
                          fill="#f59e0b"
                          stroke="white"
                          strokeWidth="3"
                          className="data-point"
                          data-value={data.revenue}
                          data-month={data.month}
                        />
                        <circle
                          cx={25 + index * 50}
                          cy={200 - (data.revenue / 125000) * 180}
                          r="12"
                          fill="transparent"
                          className="data-point-hover"
                          data-value={data.revenue}
                          data-month={data.month}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* X-axis labels */}
                  <div className="x-axis">
                    {analyticsData.monthlyRevenue.map((data, index) => (
                      <span key={index} className="x-label">
                        {data.month}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bar-chart-improved">
                {analyticsData.monthlyRevenue.map((data, index) => (
                  <div key={index} className="bar-item-improved">
                    <div className="bar-container">
                      <div
                        className="bar-improved"
                        style={{
                          height: `${(data.revenue / 125000) * 100}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                        data-value={data.revenue}
                      >
                        <div className="bar-glow"></div>
                      </div>
                    </div>
                    <span className="bar-label-improved">{data.month}</span>
                    <span className="bar-value-improved">${(data.revenue / 1000).toFixed(0)}K</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Services Usage */}
        <div className="chart-card services-chart">
          <div className="chart-header">
            <h3>Servicios Más Utilizados</h3>
            <div className="chart-period">Este mes</div>
          </div>
          <div className="services-list">
            {analyticsData.services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-info">
                  <span className="service-name">{service.name}</span>
                  <span className="service-revenue">${service.revenue.toLocaleString()}</span>
                </div>
                <div className="service-bar">
                  <div className="service-fill" style={{ width: `${service.usage}%` }}></div>
                </div>
                <span className="service-percentage">{service.usage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Room Types Distribution */}
        <div className="chart-card rooms-chart">
          <div className="chart-header">
            <h3>Ocupación por Tipo de Habitación</h3>
            <div className="chart-period">Tiempo real</div>
          </div>
          <div className="rooms-grid">
            {analyticsData.roomTypes.map((room, index) => (
              <div key={index} className="room-card">
                <div className="room-header">
                  <h4>{room.type}</h4>
                  <div className="occupancy-badge">
                    {room.occupied}/{room.total}
                  </div>
                </div>
                <div className="room-progress">
                  <div className="room-fill" style={{ width: `${(room.occupied / room.total) * 100}%` }}></div>
                </div>
                <div className="room-stats">
                  <span className="occupancy-rate">{Math.round((room.occupied / room.total) * 100)}% ocupado</span>
                  <span className="room-revenue">${room.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="chart-card metrics-card">
          <div className="chart-header">
            <h3>Métricas de Rendimiento</h3>
            <div className="chart-period">Comparación mensual</div>
          </div>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-icon">
                <TrendingUp />
              </div>
              <div className="metric-content">
                <h4>Tasa de Conversión</h4>
                <div className="metric-value">73.5%</div>
                <div className="metric-change positive">+2.1%</div>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <Users />
              </div>
              <div className="metric-content">
                <h4>Huéspedes Recurrentes</h4>
                <div className="metric-value">42%</div>
                <div className="metric-change positive">+5.3%</div>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <Star />
              </div>
              <div className="metric-content">
                <h4>Puntuación NPS</h4>
                <div className="metric-value">68</div>
                <div className="metric-change positive">+4</div>
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-icon">
                <DollarSign />
              </div>
              <div className="metric-content">
                <h4>Ingreso por Habitación</h4>
                <div className="metric-value">$245</div>
                <div className="metric-change positive">+8.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar manager">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-text-dashboard">
              <h1>Hotel El Descanso</h1>
              <p>Panel Gerencial</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => setActiveSection("profile")}
            className={`nav-item ${activeSection === "profile" ? "active" : ""}`}
          >
            <User />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveSection("analytics")}
            className={`nav-item ${activeSection === "analytics" ? "active" : ""}`}
          >
            <BarChart3 />
            <span>Análisis</span>
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
          {activeSection === "analytics" && renderAnalyticsSection()}
        </div>
      </main>
    </div>
  )
}
