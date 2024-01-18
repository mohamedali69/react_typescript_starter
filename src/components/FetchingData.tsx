import React, { useEffect, useState } from 'react';
import DataDisplay from './DataDisplay';

type PostProps = {
    id: number;
    title: string;
    body: string;
};

const FetchingData: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts  = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <DataDisplay key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default FetchingData;
