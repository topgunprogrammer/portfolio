import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaBook, FaCode, FaTimes } from "react-icons/fa";
import blogData from "../../data/blog.json";
import "./Blog.css";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);

  // Get popular tags (tags that appear in multiple posts)
  const popularTags = useMemo(() => {
    const tagCount = {};
    blogData.blogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCount)
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, []);

  // Filter blog posts based on search query, category, and tags
  const filteredPosts = blogData.blogPosts.filter((post) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.category.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((selectedTag) => post.tags.includes(selectedTag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTags([]);
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Tutorial":
        return <FaBook />;
      case "Technical":
        return <FaCode />;
      case "Personal":
        return <FaRocket />;
      default:
        return <FaBook />;
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Tutorial":
        return "#667eea";
      case "Technical":
        return "#4ecdc4";
      case "Personal":
        return "#feca57";
      default:
        return "#667eea";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "All" || selectedTags.length > 0;

  return (
    <>
      <motion.section
        id="blog"
        className="portfolio-section blog-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-container">
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">
              Insights, tips, and stories from my developer journey
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div className="blog-search-wrapper" variants={itemVariants}>
            <div className="blog-search-container">
              <svg
                className="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Compact Single-Line Filter */}
            <div className="compact-filter-bar">
              {/* Category Pills */}
              <div className="category-pills">
                {["All", "Tutorial", "Technical"].map((category) => (
                  <motion.button
                    key={category}
                    className={`category-pill ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? "All" : category
                      )
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category !== "All" && (
                      <span className="pill-icon">
                        {getCategoryIcon(category)}
                      </span>
                    )}
                    <span>{category}</span>
                  </motion.button>
                ))}
              </div>

              {/* Clear Button */}
              {hasActiveFilters && (
                <motion.button
                  className="compact-clear-btn"
                  onClick={clearAllFilters}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Clear all filters"
                >
                  <FaTimes />
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div className="blog-grid" variants={containerVariants}>
            <AnimatePresence mode="wait">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    custom={index}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      to={`/blog/${post.routeName}`}
                      className="blog-card"
                      style={{
                        "--card-accent": post.accentColor,
                      }}
                    >
                      <div className="blog-card-content">
                        {/* Category Badge */}
                        <div
                          className="category-badge"
                          style={{
                            background: `linear-gradient(135deg, ${getCategoryColor(
                              post.category
                            )}40, ${getCategoryColor(post.category)}60)`,
                          }}
                        >
                          {getCategoryIcon(post.category)}
                          <span>{post.category}</span>
                        </div>

                        <h3
                          className="blog-card-title"
                          style={{ color: post.accentColor }}
                        >
                          {post.title}
                        </h3>
                        <p className="blog-card-summary">{post.summary}</p>
                        <p className="blog-card-meta">
                          {post.date} &middot; {post.author} &middot;{" "}
                          {post.readTime} min read
                        </p>
                        <div className="blog-card-tags">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span className="blog-card-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 4 && (
                            <span className="blog-card-tag more-tags">
                              +{post.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p>No articles found matching "{searchQuery}"</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Blog;
