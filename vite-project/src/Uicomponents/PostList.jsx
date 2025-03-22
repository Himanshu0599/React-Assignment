import { useEffect, useState } from "react";
import { fetchPosts } from "../webapp/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";  

const PostList = () => {
    const dispatch = useDispatch();
    const { items = [] } = useSelector((state) => state.post || {});

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // Filter the posts based on the search term
    const filteredPosts = items.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Displaying the count: total count or filtered count
    const displayCount = searchTerm ? filteredPosts.length : items.length;

    return (
        <div className="container">
            <h1 className="title">Post List</h1>

            {/* Search and Count in Parallel */}
            <div className="search-count-container">
                <div className="count-info">
                    {searchTerm
                        ? `Total posts: ${filteredPosts.length}`
                        : `Total posts: ${items.length}`
                    } 
                 
                </div>

                <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            </div>

            {/* Post List */}
            <ul className="post-list">
                {paginatedPosts.map((post) => (
                    <li key={post.id} className="post-item">
                        <Link to={`/post/${post.id}`} className="post-link">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Pagination */}
            <div className="pagination-container">
                {currentPage > 1 && (
                    <button
                        onClick={handlePrev}
                        className="pagination-btn"
                    >
                        Previous
                    </button>
                )}

                <span className="pagination-text">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostList;
