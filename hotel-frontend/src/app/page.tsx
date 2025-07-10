import { Star, Wifi, Car, Coffee, Utensils, Waves, MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import landingpage from "../assets/landing.webp"
import presidencial from "../assets/suitePresidencial.jpg"
import deluxe from "../assets/habitacionDeluxe.jpg"
import standard from "../assets/habitacionEstandar.jpg"
import "./hotel-landing.css"

export default function HotelLanding() {
  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <div className="logo-text">
                <h1>Hotel El Descanso</h1>
                <p>Tu refugio perfecto</p>
              </div>
            </div>

            <nav className="nav-menu">
              <Link href="#habitaciones">Habitaciones</Link>
              <Link href="#servicios">Servicios</Link>
              <Link href="#contacto">Contacto</Link>
            </nav>

            <div className="auth-buttons">
              <Link href="/auth" className="btn btn-outline">
                Iniciar Sesión
              </Link>
              <Link href="/auth?mode=signup" className="btn btn-primary">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Image
          src={landingpage}
          alt="Hotel El Descanso - Vista principal"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-content">
          <div className="badge hero-badge">⭐ Hotel 5 Estrellas</div>
          <h1 className="hero-title">Hotel El Descanso</h1>
          <p className="hero-description">
            Donde cada momento se convierte en un recuerdo inolvidable. Experimenta el lujo y la comodidad en las afueras
            de la ciudad.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-lg btn-primary">Reservar Ahora</button>
            <button className="btn btn-lg btn-white-outline">Ver Habitaciones</button>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section id="servicios" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Servicios de Lujo</h2>
            <p className="section-description">
              Disfruta de amenidades de clase mundial diseñadas para tu máximo confort y relajación
            </p>
          </div>

          <div className="services-grid">
            {[
              { icon: Wifi, title: "WiFi Premium", desc: "Internet de alta velocidad en todas las áreas" },
              { icon: Car, title: "Valet Parking", desc: "Servicio de aparcacoches las 24 horas" },
              { icon: Coffee, title: "Room Service", desc: "Servicio a la habitación disponible 24/7" },
              { icon: Utensils, title: "Restaurante Gourmet", desc: "Cocina internacional de alta calidad" },
              { icon: Waves, title: "Spa & Wellness", desc: "Centro de relajación y tratamientos" },
              { icon: Clock, title: "Concierge", desc: "Asistencia personalizada para huéspedes" },
            ].map((service, index) => (
              <div key={index} className="card service-card">
                <div className="service-content">
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitaciones */}
      <section id="habitaciones" className="rooms-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestras Habitaciones</h2>
            <p className="section-description">
              Espacios elegantes y confortables diseñados para brindarte la mejor experiencia de descanso
            </p>
          </div>

          <div className="rooms-grid">
            {[
              {
                name: "Suite Presidencial",
                price: "$120",
                image: presidencial,
                features: ["Vista panorámica", "Jacuzzi privado", "Sala de estar"],
              },
              {
                name: "Habitación Deluxe",
                price: "$60",
                image: deluxe,
                features: ["Cama King Size", "Balcón privado", "Minibar"],
              },
              {
                name: "Habitación Estándar",
                price: "$20",
                image: standard,
                features: ["Cama Queen", "WiFi gratuito", "TV Smart"],
              },
            ].map((room, index) => (
              <div key={index} className="card room-card">
                <div className="room-image">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  <div className="badge room-price">{room.price}/noche</div>
                </div>
                <div className="room-content">
                  <h3 className="room-title">{room.name}</h3>
                  <ul className="room-features">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="room-feature">
                        <Star />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary w-full">Reservar Ahora</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lo Que Dicen Nuestros Huéspedes</h2>
            <p className="section-description">Experiencias reales de quienes han vivido la magia de El Descanso</p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "María González",
                rating: 5,
                comment:
                  "Una experiencia increíble. El servicio es excepcional y las instalaciones de primera clase. Definitivamente regresaré.",
              },
              {
                name: "Carlos Rodríguez",
                rating: 5,
                comment:
                  "El hotel superó todas mis expectativas. La atención al detalle y la hospitalidad del personal son incomparables.",
              },
              {
                name: "Ana Martínez",
                rating: 5,
                comment:
                  "Perfecto para una escapada romántica. Las habitaciones son elegantes y la vista es espectacular.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="card testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.comment}"</p>
                  <p className="testimonial-author">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">¿Listo para tu Escape Perfecto?</h2>
          <p className="cta-description">
            Reserva ahora y vive una experiencia única en Hotel El Descanso. Tu momento de relajación te está esperando.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-lg btn-white">Reservar Ahora</button>
            <button className="btn btn-lg btn-white-outline">Llamar Ahora</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span>Hotel El Descanso</span>
              </div>
              <p className="footer-description">
                Tu refugio perfecto en el corazón de la ciudad, donde cada detalle está pensado para tu comodidad.
              </p>
            </div>

            <div className="footer-section">
              <h3>Contacto</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <MapPin />
                  <span>Av. Principal 123, Ciudad</span>
                </div>
                <div className="footer-contact-item">
                  <Phone />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <Mail />
                  <span>info@hoteldescanso.com</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <div className="footer-links">
                <Link href="#">Habitaciones</Link>
                <Link href="#">Servicios</Link>
                <Link href="#">Ofertas Especiales</Link>
                <Link href="#">Eventos</Link>
              </div>
            </div>

            <div className="footer-section">
              <h3>Síguenos</h3>
              <p className="footer-description">Mantente al día con nuestras ofertas y novedades</p>
              <div className="footer-social">
                <button className="btn btn-sm">Facebook</button>
                <button className="btn btn-sm">Instagram</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Hotel El Descanso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
