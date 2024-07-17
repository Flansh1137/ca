import React from 'react';
import logo from '../../assets/images/logo.png'
import BLOGimg2 from '../../assets/images/BLOGimg2.jpg'
import BLOGimg3 from '../../assets/images/BLOGimg3.jpg'
import BLOGimg4 from '../../assets/images/BLOGimg4.jpg'
import BLOGimg5 from '../../assets/images/BLOGimg5.jpg'
import BLOGimg6 from '../../assets/images/BLOGimg6.jpg'
import BLOGimg7 from '../../assets/images/BLOGimg7.jpg'


const BlogPage = () => {
    const posts = [
        {
            title: 'Understanding Tax Reforms in the UK',
            date: 'July 17, 2024',
            excerpt: 'An in-depth look at the recent tax reforms and how they affect individuals and businesses in the UK.',
            link: '#',
            image: BLOGimg2
        },
        {
            title: 'Tips for Efficient Financial Planning',
            date: 'July 10, 2024',
            excerpt: 'Learn how to plan your finances effectively with our comprehensive guide.',
            link: '#',
            image: BLOGimg3
        },
        {
            title: 'Navigating Corporate Tax Rates',
            date: 'July 5, 2024',
            excerpt: 'A guide to understanding and navigating corporate tax rates in the UK.',
            link: '#',
            image: BLOGimg4
        },
        {
            title: 'The Importance of Financial Audits',
            date: 'June 28, 2024',
            excerpt: 'Discover why regular financial audits are essential for your business.',
            link: '#',
            image: BLOGimg5
        },
        {
            title: 'Effective Strategies for Reducing Tax Liabilities',
            date: 'June 20, 2024',
            excerpt: 'Explore strategies to minimize your tax liabilities and save money.',
            link: '#',
            image: BLOGimg6
        },
        {
            title: 'The Future of Accounting: Trends to Watch',
            date: 'June 10, 2024',
            excerpt: 'Stay ahead of the curve with these emerging trends in accounting.',
            link: '#',
            image: BLOGimg7
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-5">
                <div className="bg-white p-6 rounded-lg shadow-md mb-10">
                    <img src={logo} alt="Featured Post" className="w-full h-64 object-cover rounded-md mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Understanding Tax Reforms in the UK</h3>
                    <p className="text-gray-600 mb-4">July 17, 2024</p>
                    <p className="text-gray-800 mb-6">An in-depth look at the recent tax reforms and how they affect individuals and businesses in the UK.</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700">Read more</a>
                </div>

                <h2 className="text-4xl font-bold text-center mb-10">Recent Posts</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.date}</p>
                            <p className="text-gray-800 mb-6">{post.excerpt}</p>
                            <a href={post.link} className="text-blue-500 hover:text-blue-700">Read more</a>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600">Previous</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
