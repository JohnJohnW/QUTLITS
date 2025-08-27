import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Users, Award, Lightbulb, Calendar, ExternalLink, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "../components/Navigation";

const MEMBERSHIP_BENEFITS = [
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals and fellow students",
    color: "primary"
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Access to workshops, seminars, and skill-building events",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Stay ahead of emerging trends in legal technology",
    color: "purple"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Exclusive access to society events and activities",
    color: "orange"
  }
];

const MEMBERSHIP_TIERS = [
  {
    name: "Student Member",
    price: "Free",
    description: "For current QUT students",
    features: [
      "Access to all society events",
      "Networking opportunities",
      "Workshop participation",
      "Industry connections",
      "Newsletter subscription"
    ],
    popular: false
  },
  {
    name: "Associate Member",
    price: "$25/year",
    description: "For QUT alumni and industry professionals",
    features: [
      "All student member benefits",
      "Mentorship opportunities",
      "Event hosting privileges",
      "Priority access to premium events",
      "Committee participation eligibility"
    ],
    popular: true
  }
];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "qutlits@qut.edu.au", href: "mailto:qutlits@qut.edu.au" },
  { icon: Phone, label: "Phone", value: "+61 7 3138 2000", href: "tel:+61731382000" },
  { icon: MapPin, label: "Location", value: "QUT Gardens Point, Brisbane", href: "#" }
];



function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-purple to-dark-blue"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-tomorrow">
            Join QUT LITS
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-montserrat leading-relaxed">
            Become part of Queensland University of Technology's premier society 
            for law, innovation, and technology enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-purple/30 to-dark-blue/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-tomorrow">Why Join QUT LITS?</h2>
          <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
            Discover the unique advantages of being part of our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEMBERSHIP_BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group text-center p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${benefit.color}/20 to-${benefit.color}/10 border border-${benefit.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`h-10 w-10 text-${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-rubik">{benefit.title}</h3>
              <p className="text-white/80 font-montserrat leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipTiersSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-tomorrow">Membership Options</h2>
          <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
            Choose the membership tier that's right for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? "bg-gradient-to-br from-primary/20 to-purple/20 border-primary/40 shadow-2xl"
                  : "bg-white/5 border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-purple text-white px-4 py-2 rounded-full text-sm font-semibold font-rubik">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-tomorrow">{tier.name}</h3>
                <div className="text-4xl font-bold text-white mb-2 font-tomorrow">{tier.price}</div>
                <p className="text-white/80 font-montserrat">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 font-montserrat">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href="#application-form"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple text-white px-8 py-3 rounded-xl font-semibold hover:from-primary/90 hover:to-purple/90 transition-all duration-300 shadow-lg w-full justify-center font-rubik hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    degreeProgram: '',
    message: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="application-form" className="py-24 bg-gradient-to-br from-dark-purple/20 to-dark-blue/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6 font-tomorrow">Ready to Apply?</h2>
          <p className="text-xl text-white/80 font-montserrat max-w-3xl mx-auto">
            Complete your membership application to join QUT LITS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="liquid-glass-strong rounded-3xl p-10 border border-white/20 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-tomorrow">Application Process</h3>
            <p className="text-white/80 mb-6 font-montserrat">
              To join QUT LITS, please complete our membership application form. 
              The application will be reviewed by our executive team.
            </p>
            
            <div className="bg-gradient-to-r from-primary/20 to-purple/20 rounded-2xl p-6 border border-primary/30">
              <h4 className="text-lg font-semibold text-white mb-3 font-rubik">Important Note</h4>
              <p className="text-white/80 mb-4 font-montserrat">
                All applications are reviewed according to our membership criteria and rubric. 
                Please ensure you meet the requirements before applying.
              </p>
              <a
                href="/membership-rubric.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold font-rubik"
              >
                View Membership Rubric <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2 font-rubik">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-montserrat"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2 font-rubik">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-montserrat"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2 font-rubik">
                QUT Student Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-montserrat"
                placeholder="your.name@qut.edu.au"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2 font-rubik">
                Student ID *
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-montserrat"
                placeholder="Enter your QUT student ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2 font-rubik">
                Degree Program *
              </label>
              <select
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-montserrat"
              >
                <option value="">Select your degree program</option>
                <option value="law">Bachelor of Laws</option>
                <option value="it">Bachelor of Information Technology</option>
                <option value="law-it">Bachelor of Laws / Bachelor of Information Technology</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2 font-rubik">
                Why do you want to join QUT LITS? *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-purple/30 border border-primary/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-montserrat"
                placeholder="Tell us about your interest in law and technology..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="w-4 h-4 text-primary bg-dark-purple/30 border-primary/20 rounded focus:ring-primary"
              />
              <label className="text-sm text-white/80 font-montserrat">
                I agree to the QUT LITS constitution and code of conduct *
              </label>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-primary/90 hover:to-purple/90 transition-all duration-300 shadow-lg font-rubik hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass-strong rounded-3xl p-16 border border-white/20 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6 font-tomorrow">
            Questions About Joining?
          </h2>
          <p className="text-xl text-white/80 mb-10 font-montserrat max-w-2xl mx-auto leading-relaxed">
            Our executive team is here to help with any questions about membership.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {CONTACT_INFO.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple/20 border border-primary/30 flex items-center justify-center">
                  <contact.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-rubik">{contact.label}</h3>
                <a
                  href={contact.href}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-montserrat"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:qutlits@qut.edu.au"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-primary/90 hover:to-purple/90 transition-all duration-300 shadow-lg font-rubik hover:scale-105"
            >
              Contact Us
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm font-rubik hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-dark-purple to-dark-blue">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <MembershipTiersSection />
      <ApplicationFormSection />
      <ContactSection />
    </div>
  );
}

export default Join;
