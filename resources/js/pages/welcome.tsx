import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { LiveChatWidget } from '@/components/live-chat-widget';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

interface Service {
    title: string;
    description: string;
    icon: string;
}

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const services: Service[] = [
        {
            title: "Tax Advisory",
            description: "Expert guidance on tax planning, compliance, and optimization strategies for individuals and businesses.",
            icon: "📊"
        },
        {
            title: "Economic Analysis",
            description: "In-depth market research and economic forecasting to help you make informed business decisions.",
            icon: "📈"
        },
        {
            title: "Investment Consulting",
            description: "Professional investment advice and portfolio management tailored to your financial goals.",
            icon: "💼"
        },
        {
            title: "Business Strategy",
            description: "Strategic planning and consulting services to drive your business growth and success.",
            icon: "🎯"
        }
    ];

    const teamMembers: TeamMember[] = [
        {
            name: "Sarah Johnson",
            role: "Chief Executive Officer",
            image: "👩‍💼",
            bio: "15+ years in financial services with expertise in tax law and business strategy."
        },
        {
            name: "Michael Chen",
            role: "Head of Economics",
            image: "👨‍💻",
            bio: "Former economic analyst with deep knowledge in market trends and forecasting."
        },
        {
            name: "Emily Rodriguez",
            role: "Investment Director",
            image: "👩‍💻",
            bio: "Certified financial planner specializing in investment strategies and wealth management."
        },
        {
            name: "David Thompson",
            role: "Tax Specialist",
            image: "👨‍💼",
            bio: "CPA with extensive experience in corporate tax planning and compliance."
        }
    ];

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This would typically submit to a backend endpoint
        alert('Thank you for your inquiry! We will get back to you soon.');
        setContactForm({ name: '', email: '', company: '', message: '' });
    };

    return (
        <>
            <Head title="FinanceHub Pro - Tax, Economics, Business & Investment Platform">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                {/* Navigation */}
                <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 dark:bg-slate-900/95 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="text-2xl">💰</div>
                                <span className="text-xl font-bold text-slate-900 dark:text-white">FinanceHub Pro</span>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <a href="#about" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">About</a>
                                <a href="#services" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Services</a>
                                <a href="#team" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Team</a>
                                <a href="#contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Contact</a>
                                
                                <div className="flex items-center space-x-3">
                                    <Link
                                        href="/news"
                                        className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                                    >
                                        📰 News
                                    </Link>
                                    <Link
                                        href="/education"
                                        className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                                    >
                                        🎓 Education
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                                Your Trusted Partner in{' '}
                                <span className="text-blue-600 dark:text-blue-400">Financial Excellence</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                                Navigate the complex world of tax, economics, business, and investment with our expert guidance and cutting-edge insights.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <a
                                    href="#services"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Explore Services 🚀
                                </a>
                                <a
                                    href="#contact"
                                    className="border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Get in Touch 💬
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Introduction */}
                <section id="about" className="py-20 bg-white dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                    About FinanceHub Pro 🏢
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                    Founded with a mission to democratize access to professional financial expertise, FinanceHub Pro has been at the forefront of delivering comprehensive solutions in tax advisory, economic analysis, business strategy, and investment consulting.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                                    Our platform combines decades of industry experience with innovative technology to provide our clients with actionable insights and strategic guidance that drive real results.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                                        <div className="text-slate-600 dark:text-slate-300">Happy Clients</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                                        <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission 🎯</h3>
                                <p className="text-slate-700 dark:text-slate-300 mb-6">
                                    To empower individuals and businesses with the knowledge, tools, and strategies needed to achieve financial success and sustainable growth.
                                </p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision 🌟</h3>
                                <p className="text-slate-700 dark:text-slate-300">
                                    To be the leading digital platform that bridges the gap between complex financial concepts and practical, actionable solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Our Services 💼
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                Comprehensive financial solutions tailored to meet your unique needs and objectives.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section id="team" className="py-20 bg-white dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Meet Our Expert Team 👥
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                Our team of seasoned professionals brings decades of combined experience in finance, economics, and business strategy.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-6xl mb-4">{member.image}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                Get in Touch 📞
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                Ready to take your financial strategy to the next level? We'd love to hear from you.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📍</span>
                                        <span className="text-slate-600 dark:text-slate-300">123 Finance Street, Business District, NY 10001</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <span className="text-slate-600 dark:text-slate-300">hello@financehubpro.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">📱</span>
                                        <span className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">🕒</span>
                                        <span className="text-slate-600 dark:text-slate-300">Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
                                <form onSubmit={handleContactSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={contactForm.name}
                                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={contactForm.email}
                                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            value={contactForm.company}
                                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={contactForm.message}
                                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Send Message 🚀
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="text-2xl">💰</div>
                                    <span className="text-xl font-bold">FinanceHub Pro</span>
                                </div>
                                <p className="text-slate-400">
                                    Your trusted partner in financial excellence, providing expert guidance in tax, economics, business, and investment.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Services</h4>
                                <ul className="space-y-2 text-slate-400">
                                    <li>Tax Advisory</li>
                                    <li>Economic Analysis</li>
                                    <li>Investment Consulting</li>
                                    <li>Business Strategy</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2 text-slate-400">
                                    <li><Link href="/news" className="hover:text-white transition-colors">📰 News & Insights</Link></li>
                                    <li><Link href="/education" className="hover:text-white transition-colors">🎓 Educational Content</Link></li>
                                    <li>📊 Market Reports</li>
                                    <li>📈 Research Papers</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                                <ul className="space-y-2 text-slate-400">
                                    <li>📧 hello@financehubpro.com</li>
                                    <li>📱 +1 (555) 123-4567</li>
                                    <li>🔗 LinkedIn</li>
                                    <li>🐦 Twitter</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400">
                            <p>&copy; 2024 FinanceHub Pro. All rights reserved. Built with expertise and passion. 💼</p>
                        </div>
                    </div>
                </footer>

                {/* Live Chat Widget */}
                <LiveChatWidget />
            </div>
        </>
    );
}