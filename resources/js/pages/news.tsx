import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { LiveChatWidget } from '@/components/live-chat-widget';

interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    category: string;
    publishedAt: string;
    readTime: string;
    image: string;
}

export default function News() {
    const { auth } = usePage<SharedData>().props;

    const featuredArticle: NewsArticle = {
        id: 1,
        title: "2024 Tax Code Changes: What Businesses Need to Know",
        excerpt: "Comprehensive analysis of the latest tax legislation and its impact on corporate tax planning strategies.",
        content: "The latest tax code changes introduce significant modifications that will affect how businesses approach their tax planning...",
        author: "Sarah Johnson",
        category: "Tax",
        publishedAt: "2024-01-15",
        readTime: "8 min read",
        image: "📊"
    };

    const articles: NewsArticle[] = [
        {
            id: 2,
            title: "Federal Reserve Policy Update: Interest Rate Implications",
            excerpt: "Breaking down the latest Fed decisions and their impact on investment strategies and economic outlook.",
            content: "",
            author: "Michael Chen",
            category: "Economics",
            publishedAt: "2024-01-12",
            readTime: "6 min read",
            image: "📈"
        },
        {
            id: 3,
            title: "Q4 2023 Investment Market Review",
            excerpt: "Comprehensive analysis of market performance and investment opportunities heading into 2024.",
            content: "",
            author: "Emily Rodriguez",
            category: "Investment",
            publishedAt: "2024-01-10",
            readTime: "10 min read",
            image: "💼"
        },
        {
            id: 4,
            title: "Small Business Tax Deductions You Might Be Missing",
            excerpt: "Discover overlooked tax deductions that could significantly reduce your business tax liability.",
            content: "",
            author: "David Thompson",
            category: "Tax",
            publishedAt: "2024-01-08",
            readTime: "5 min read",
            image: "💰"
        },
        {
            id: 5,
            title: "Economic Indicators to Watch in 2024",
            excerpt: "Key economic metrics that will shape business decisions and investment strategies this year.",
            content: "",
            author: "Michael Chen",
            category: "Economics",
            publishedAt: "2024-01-05",
            readTime: "7 min read",
            image: "📊"
        },
        {
            id: 6,
            title: "Sustainable Investment Trends: ESG Focus",
            excerpt: "How environmental, social, and governance factors are reshaping investment portfolios.",
            content: "",
            author: "Emily Rodriguez",
            category: "Investment",
            publishedAt: "2024-01-03",
            readTime: "9 min read",
            image: "🌱"
        }
    ];

    const categories = ["All", "Tax", "Economics", "Investment", "Business"];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="News & Insights - FinanceHub Pro" />
            
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
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">📰 News</span>
                                <Link href="/education" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">🎓 Education</Link>
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
                <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                📰 News & Insights
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                Stay informed with the latest developments in tax, economics, business, and investment from our expert team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Article */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                            <div className="lg:grid lg:grid-cols-2">
                                <div className="p-8 lg:p-12">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </span>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                                            {featuredArticle.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-2xl">👩‍💼</div>
                                            <div>
                                                <div className="text-sm font-semibold text-slate-900 dark:text-white">{featuredArticle.author}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">{formatDate(featuredArticle.publishedAt)}</div>
                                            </div>
                                        </div>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">{featuredArticle.readTime}</span>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 p-12 flex items-center justify-center">
                                    <div className="text-8xl">{featuredArticle.image}</div>
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
                                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                        category === "All"
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

                {/* Articles Grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <article key={article.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                article.category === 'Tax' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                article.category === 'Economics' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                article.category === 'Investment' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                                                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                            }`}>
                                                {article.category}
                                            </span>
                                            <div className="text-3xl">{article.image}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                                            <div className="flex items-center space-x-2">
                                                <div className="text-lg">
                                                    {article.author === 'Sarah Johnson' ? '👩‍💼' :
                                                     article.author === 'Michael Chen' ? '👨‍💻' :
                                                     article.author === 'Emily Rodriguez' ? '👩‍💻' : '👨‍💼'}
                                                </div>
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <span>{formatDate(article.publishedAt)}</span>
                                                <span>•</span>
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-16 bg-blue-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            📧 Stay Updated
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Get the latest financial insights and market updates delivered to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
                            />
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                                Subscribe 🚀
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
                                Your trusted source for financial news and insights.
                            </p>
                            <div className="flex justify-center space-x-6">
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                                <span className="text-blue-400">News</span>
                                <Link href="/education" className="text-slate-400 hover:text-white transition-colors">Education</Link>
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