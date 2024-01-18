"use client";

type PostTypes ={
    key: number;
    title: string;
    body: string;
}

const DataDisplay = (post:PostTypes) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default DataDisplay;
