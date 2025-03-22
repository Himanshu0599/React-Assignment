import { useEffect } from "react";
import { fetchPosts } from "../webapp/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "../App.css";

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const { items = [] } = useSelector((state) => state.post || {});

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchPosts());
        }
    }, [dispatch, items.length]);

    // Find the current post by ID
    const post = items.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details-container">
            <h1 className="details-title">Post Details</h1>
            
            <div className="card">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-user-id">User ID: <span>{post.id}</span></p>
                <p className="card-content">{post.body}</p>

                <Link to="/" className="back-link">← Back to Posts</Link>
            </div>
        </div>
    );
};

export default PostDetail;
