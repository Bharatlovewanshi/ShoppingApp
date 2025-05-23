import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";    
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            //console.log(data);
            setPosts(data);
        } catch (error) {
            console.error("Error aa gaya:", error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className='grid xs:grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto spacce-y-10 space-x-5 min-h-[80vh]'>
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />  
                    ))}
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <p>Data Not Found</p>
                </div>
            )}
        </div>
    );
};

export default Home;
