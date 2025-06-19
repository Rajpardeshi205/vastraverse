import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaChevronUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "Shop",
      links: [
        "Women's Clothing",
        "Men's Clothing",
        "Kids & Baby",
        "Accessories",
        "Shoes",
        "New Arrivals",
        "Sale",
        "Best Sellers",
      ],
    },
    {
      title: "Customer Care",
      links: [
        "Contact Us",
        "Size Guide",
        "Shipping Info",
        "Returns & Exchanges",
        "Track Your Order",
        "FAQs",
        "Gift Cards",
        "Customer Reviews",
      ],
    },
    {
      title: "About VastraVerse",
      links: [
        "Our Story",
        "Careers",
        "Press",
        "Sustainability",
        "Privacy Policy",
        "Terms of Service",
        "Affiliate Program",
        "Store Locator",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  const features = [
    { icon: FaTruck, title: "Free Shipping", desc: "On orders over ₹999" },
    { icon: FaUndo, title: "Easy Returns", desc: "30-day return policy" },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      desc: "100% secure checkout",
    },
    {
      icon: FaCreditCard,
      title: "Multiple Payment",
      desc: "Various payment options",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-blue-600 p-4 rounded-full mb-3 group-hover:bg-blue-500 transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  VastraVerse
                </h2>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Discover the latest fashion trends and timeless classics.
                  VastraVerse brings you premium quality clothing for every
                  occasion, style, and personality.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-lg">Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to get exclusive offers and new arrivals
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-r-lg transition-colors duration-300 hover:scale-105 transform"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300 hover:scale-110 transform hover:bg-gray-700`}
                      aria-label={social.label}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="hidden md:block">
                <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${
                            sectionIndex * 0.1 + linkIndex * 0.05
                          }s both`,
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="md:hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex justify-between items-center w-full py-3 font-semibold text-lg border-b border-gray-800"
                >
                  {section.title}
                  <FaChevronUp
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === section.title && (
                  <ul
                    className="space-y-3 mt-4 pb-4"
                    style={{ animation: "slideDown 0.3s ease-out" }}
                  >
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block py-1"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">+91 1800-123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">support@vastraverse.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 VastraVerse. Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in India. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-3">
                {["Visa", "MC", "AMEX", "UPI"].map((payment) => (
                  <span
                    key={payment}
                    className="bg-gray-800 px-3 py-1 rounded text-xs font-semibold text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                  >
                    {payment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
