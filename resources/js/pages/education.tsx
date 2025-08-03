import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { LiveChatWidget } from '@/components/live-chat-widget';

interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
    lessons: number;
    students: number;
    rating: number;
    price: string;
    image: string;
}

interface Tutorial {
    id: number;
    title: string;
    description: string;
    category: string;
    duration: string;
    type: 'Video' | 'Article' | 'Interactive';
    image: string;
}

export default function Education() {
    const { auth } = usePage<SharedData>().props;
    const [activeCategory, setActiveCategory] = useState('All');

    const courses: Course[] = [
        {
            id: 1,
            title: "Tax Planning Fundamentals",
            description: "Master the basics of tax planning for individuals and small businesses. Learn essential strategies to minimize tax liability.",
            instructor: "David Thompson",
            duration: "6 weeks",
            level: "Beginner",
            category: "Tax",
            lessons: 24,
            students: 1250,
            rating: 4.8,
            price: "Free",
            image: "📚"
        },
        {
            id: 2,
            title: "Investment Portfolio Management",
            description: "Learn how to build, manage, and optimize investment portfolios for long-term wealth creation.",
            instructor: "Emily Rodriguez",
            duration: "8 weeks",
            level: "Intermediate",
            category: "Investment",
            lessons: 32,
            students: 890,
            rating: 4.9,
            price: "$199",
            image: "📈"
        },
        {
            id: 3,
            title: "Economic Analysis for Business",
            description: "Understand economic indicators and their impact on business decisions and market strategies.",
            instructor: "Michael Chen",
            duration: "10 weeks",
            level: "Advanced",
            category: "Economics",
            lessons: 40,
            students: 560,
            rating: 4.7,
            price: "$299",
            image: "📊"
        },
        {
            id: 4,
            title: "Small Business Financial Management",
            description: "Essential financial management skills for entrepreneurs and small business owners.",
            instructor: "Sarah Johnson",
            duration: "4 weeks",
            level: "Beginner",
            category: "Business",
            lessons: 16,
            students: 2100,
            rating: 4.6,
            price: "Free",
            image: "💼"
        },
        {
            id: 5,
            title: "Advanced Tax Strategies",
            description: "Complex tax planning strategies for high-net-worth individuals and corporations.",
            instructor: "David Thompson",
            duration: "12 weeks",
            level: "Advanced",
            category: "Tax",
            lessons: 48,
            students: 340,
            rating: 4.9,
            price: "$499",
            image: "🎯"
        },
        {
            id: 6,
            title: "Cryptocurrency and Digital Assets",
            description: "Navigate the world of digital currencies, blockchain technology, and crypto investments.",
            instructor: "Emily Rodriguez",
            duration: "6 weeks",
            level: "Intermediate",
            category: "Investment",
            lessons: 28,
            students: 780,
            rating: 4.5,
            price: "$249",
            image: "💎"
        }
    ];

    const tutorials: Tutorial[] = [
        {
            id: 1,
            title: "Understanding Capital Gains Tax",
            description: "Quick guide to calculating and minimizing capital gains tax on your investments.",
            category: "Tax",
            duration: "15 min",
            type: "Video",
            image: "🎥"
        },
        {
            id: 2,
            title: "Reading Financial Statements",
            description: "Learn to analyze balance sheets, income statements, and cash flow statements.",
            category: "Business",
            duration: "20 min",
            type: "Interactive",
            image: "📋"
        },
        {
            id: 3,
            title: "Diversification Strategies",
            description: "Explore different approaches to diversifying your investment portfolio.",
            category: "Investment",
            duration: "12 min",
            type: "Article",
            image: "📖"
        },
        {
            id: 4,
            title: "Economic Indicators Explained",
            description: "Understand key economic indicators and their market implications.",
            category: "Economics",
            duration: "18 min",
            type: "Video",
            image: "🎥"
        }
    ];

    const categories = ['All', 'Tax', 'Investment', 'Economics', 'Business'];

    const filteredCourses = activeCategory === 'All' 
        ? courses 
        : courses.filter(course => course.category === activeCategory);

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Video':
                return '🎥';
            case 'Article':
                return '📖';
            case 'Interactive':
                return '⚡';
            default:
                return '📚';
        }
    };

    return (
        <>
            <Head title="Education Center - FinanceHub Pro" />
            
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
                {/* Navigation */}
                <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="text-2xl">💰</div>
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">FinanceHub Pro</span>
                                </Link>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">Home</Link>
                                <Link href="/news" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">📰 News</Link>
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">🎓 Education</span>
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

                {/* Header */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                🎓 Education Center
                            </h1>
                            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                                Advance your financial knowledge with our comprehensive courses, tutorials, and educational resources.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <div className="text-3xl font-bold">50+</div>
                                    <div className="text-purple-100">Courses</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <div className="text-3xl font-bold">5K+</div>
                                    <div className="text-purple-100">Students</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                                    <div className="text-3xl font-bold">4.8⭐</div>
                                    <div className="text-purple-100">Average Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                        category === activeCategory
                                            ? "bg-blue-600 text-white"
                                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                📚 Featured Courses
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                Comprehensive courses designed by industry experts
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course) => (
                                <div key={course.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                                                {course.level}
                                            </span>
                                            <div className="text-3xl">{course.image}</div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                            {course.title}
                                        </h3>
                                        
                                        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                                            {course.description}
                                        </p>
                                        
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div className="text-lg">
                                                    {course.instructor === 'Sarah Johnson' ? '👩‍💼' :
                                                     course.instructor === 'Michael Chen' ? '👨‍💻' :
                                                     course.instructor === 'Emily Rodriguez' ? '👩‍💻' : '👨‍💼'}
                                                </div>
                                                <span className="text-sm text-slate-600 dark:text-slate-300">{course.instructor}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                                            <span>📚 {course.lessons} lessons</span>
                                            <span>👥 {course.students.toLocaleString()} students</span>
                                            <span>⭐ {course.rating}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                {course.price}
                                            </div>
                                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                                {course.price === 'Free' ? 'Start Free' : 'Enroll Now'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Tutorials */}
                <section className="py-16 bg-white dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                ⚡ Quick Tutorials
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                Bite-sized lessons you can complete in minutes
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tutorials.map((tutorial) => (
                                <div key={tutorial.id} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-3xl">{tutorial.image}</div>
                                        <span className="text-2xl">{getTypeIcon(tutorial.type)}</span>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {tutorial.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                        {tutorial.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{tutorial.duration}</span>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                            tutorial.category === 'Tax' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                            tutorial.category === 'Economics' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                            tutorial.category === 'Investment' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                        }`}>
                                            {tutorial.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning Paths */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                🛤️ Structured Learning Paths
                            </h2>
                            <p className="text-xl text-blue-100 mb-12">
                                Follow our curated learning paths to master specific areas of finance
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                    <div className="text-4xl mb-4">🎯</div>
                                    <h3 className="text-xl font-bold mb-4">Tax Professional</h3>
                                    <p className="text-blue-100 mb-6">
                                        Complete certification path for tax professionals and advisors
                                    </p>
                                    <div className="text-sm text-blue-200">
                                        6 courses • 24 weeks • Certificate included
                                    </div>
                                </div>
                                
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                    <div className="text-4xl mb-4">📈</div>
                                    <h3 className="text-xl font-bold mb-4">Investment Analyst</h3>
                                    <p className="text-blue-100 mb-6">
                                        Comprehensive training for investment analysis and portfolio management
                                    </p>
                                    <div className="text-sm text-blue-200">
                                        8 courses • 32 weeks • Certificate included
                                    </div>
                                </div>
                                
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                    <div className="text-4xl mb-4">🏢</div>
                                    <h3 className="text-xl font-bold mb-4">Business Finance</h3>
                                    <p className="text-blue-100 mb-6">
                                        Essential financial skills for business owners and managers
                                    </p>
                                    <div className="text-sm text-blue-200">
                                        5 courses • 20 weeks • Certificate included
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            🚀 Ready to Start Learning?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                            Join thousands of professionals advancing their careers with FinanceHub Pro
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                href={route('register')}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Get Started Free 🎓
                            </Link>
                            <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Browse Catalog 📚
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <div className="text-2xl">💰</div>
                                <span className="text-xl font-bold">FinanceHub Pro</span>
                            </div>
                            <p className="text-slate-400 mb-4">
                                Empowering your financial education journey.
                            </p>
                            <div className="flex justify-center space-x-6">
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                                <Link href="/news" className="text-slate-400 hover:text-white transition-colors">News</Link>
                                <span className="text-blue-400">Education</span>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Live Chat Widget */}
                <LiveChatWidget />
            </div>
        </>
    );
}