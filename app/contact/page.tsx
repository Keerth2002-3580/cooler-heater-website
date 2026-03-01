import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need a quote? We&apos;re here to help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
              <a href="tel:+442012345678" className="text-primary font-medium hover:underline">
                +44 20 1234 5678
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us your inquiries</p>
              <a href="mailto:info@raviqueclimate.co.uk" className="text-primary font-medium hover:underline">
                info@raviqueclimate.co.uk
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-600">
                123 Climate Street<br />
                London, SW1A 1AA<br />
                United Kingdom
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl shadow-md p-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-6 text-gray-100">
            Chat with us on WhatsApp for instant support and quick quotes
          </p>
          <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-secondary transition-all shadow-lg inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
