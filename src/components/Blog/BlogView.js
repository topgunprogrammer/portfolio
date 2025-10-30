import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FaClock,
  FaCalendar,
  FaUser,
  FaComments,
  FaArrowRight,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import blogData from "../../data/blog.json";
import "./BlogView.css";

function BlogView() {
  const { blogRouteName } = useParams();
  const navigate = useNavigate();
  const post = blogData.blogPosts.find((p) => p.routeName === blogRouteName);

  // Comment form state
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Set dynamic CSS custom properties for this article's colors
  React.useEffect(() => {
    if (post && post.accentColor) {
      document.documentElement.style.setProperty(
        "--article-accent",
        post.accentColor
      );
    }
    if (post && post.gradientColors && post.gradientColors.length >= 3) {
      document.documentElement.style.setProperty(
        "--gradient-1",
        post.gradientColors[0]
      );
      document.documentElement.style.setProperty(
        "--gradient-2",
        post.gradientColors[1]
      );
      document.documentElement.style.setProperty(
        "--gradient-3",
        post.gradientColors[2]
      );
    }
  }, [post]);

  if (!post) {
    return (
      <div className="smashing-blog-page">
        <div className="blog-not-found">
          <h2>Blog post not found</h2>
          <button
            onClick={() => navigate("/blog")}
            className="smashing-btn-primary"
          >
            Go Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Get related posts based on shared tags
  const relatedPosts = blogData.blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Render content based on type
  const renderContent = (block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="smashing-paragraph"
            dangerouslySetInnerHTML={{
              __html: formatText(block.text),
            }}
          />
        );

      case "heading":
        const HeadingTag = `h${block.level}`;
        return (
          <HeadingTag key={index} className={`smashing-heading-${block.level}`}>
            {block.text}
          </HeadingTag>
        );

      case "list":
        return (
          <ul key={index} className="smashing-list">
            {block.items.map((item, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{
                  __html: formatText(item),
                }}
              />
            ))}
          </ul>
        );

      case "code":
        return (
          <div key={index} className="smashing-code-block">
            <div className="smashing-code-header">
              <div className="smashing-code-language">
                {block.language || "Code"}
              </div>
            </div>
            <div className="smashing-code-container">
              <SyntaxHighlighter
                language={block.language || "javascript"}
                style={atomDark}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem 2rem",
                  background: "rgba(0, 0, 0, 0.4)",
                  borderRadius: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
                showLineNumbers={true}
                lineNumberStyle={{
                  color: "rgba(255, 255, 255, 0.3)",
                  paddingRight: "1.5rem",
                  minWidth: "3rem",
                  fontSize: "0.85rem",
                }}
              >
                {block.text}
              </SyntaxHighlighter>
            </div>
          </div>
        );

      case "image":
        return (
          <figure key={index} className="smashing-image-container">
            <img
              src={block.src}
              alt={block.alt}
              className="smashing-content-image"
            />
            {block.caption && (
              <figcaption className="smashing-image-caption">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );

      case "quote":
        return (
          <blockquote key={index} className="smashing-quote">
            <p>{block.text}</p>
            {block.author && <cite>— {block.author}</cite>}
          </blockquote>
        );

      default:
        return null;
    }
  };

  // Format text with bold, italic, underline
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/__(.*?)__/g, "<u>$1</u>")
      .replace(/`(.*?)`/g, "<code>$1</code>");
  };

  // Comment form handlers
  const handleCommentChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value,
    });
  };

  const triggerSuccessConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d73953", "#ff6b6b", "#4ecdc4", "#45b7d1"],
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Construct mailto URL with comment
      const subject = `Comment on: ${post.title}`;
      const body = `Name: ${commentForm.name}%0D%0AEmail: ${commentForm.email}%0D%0A%0D%0AComment:%0D%0A${commentForm.comment}`;
      window.open(
        `mailto:mohanram.management@gmail.com?subject=${subject}&body=${body}`,
        "_blank"
      );

      setSubmitStatus("success");
      triggerSuccessConfetti();
      setCommentForm({ name: "", email: "", comment: "" });
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("Comment error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="smashing-blog-page">
      {/* Article Navigation Bar - Desktop Only */}
      <nav className="smashing-article-nav">
        <div className="smashing-article-nav-container">
          {blogData.blogPosts.map((article) => (
            <button
              key={article.id}
              onClick={() => navigate(`/blog/${article.routeName}`)}
              className={`smashing-article-nav-item ${
                article.id === post.id ? "active" : ""
              }`}
            >
              {article.title}
            </button>
          ))}
          <button
            onClick={() => navigate("/blog")}
            className="smashing-article-nav-item smashing-nav-all"
          >
            Jump to all articles ↬
          </button>
        </div>
      </nav>

      <div className="smashing-container">
        {/* Main Article Area */}
        <div className="smashing-main-content">
          {/* Author/Date at Top - Smashing Magazine Style */}
          <motion.header
            className="smashing-article-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="smashing-top-meta">
              <a href="/contact">{post.author}</a>
              <span className="meta-separator">/</span>
              {formatDate(post.date)}
            </div>

            {/* Colorful Title */}
            <h1 className="smashing-title-gradient">{post.title}</h1>

            {/* Meta Information */}
            <div className="smashing-meta-bar">
              <span className="smashing-meta-item">
                <FaUser /> {post.author}
              </span>
              <span className="smashing-meta-divider">•</span>
              <span className="smashing-meta-item">
                <FaCalendar /> {formatDate(post.date)}
              </span>
              <span className="smashing-meta-divider">•</span>
              <span className="smashing-meta-item">
                <FaClock /> {post.readTime} min read
              </span>
              <span className="smashing-meta-divider">•</span>
              <span className="smashing-meta-item">
                <FaComments /> Leave a comment
              </span>
            </div>
          </motion.header>

          {/* Quick Summary */}
          <motion.div
            className="smashing-summary-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="smashing-summary-title">Quick Summary ↬</h3>
            <p className="smashing-summary-text">{post.summary}</p>
          </motion.div>

          {/* Main Article Content */}
          <motion.article
            className="smashing-article-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.content.map((block, index) => renderContent(block, index))}
          </motion.article>

          {/* Useful Resources Section */}
          {post.usefulResources && post.usefulResources.length > 0 && (
            <motion.div
              className="smashing-resources-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="smashing-section-title">Useful Resources</h3>
              <ul className="smashing-resources-list">
                {post.usefulResources.map((resource, index) => (
                  <li key={index} className="smashing-resource-item">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="smashing-resource-link"
                    >
                      <FaArrowRight className="resource-icon" />
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <motion.div
              className="smashing-related-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="smashing-section-title">Related Articles</h3>
              <div className="smashing-related-grid">
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    className="smashing-related-card"
                    whileHover={{ y: -5 }}
                    onClick={() => navigate(`/blog/${relatedPost.routeName}`)}
                  >
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="smashing-related-image"
                    />
                    <div className="smashing-related-content">
                      <h4 className="smashing-related-title">
                        {relatedPost.title}
                      </h4>
                      <p className="smashing-related-desc">
                        {relatedPost.description}
                      </p>
                      <div className="smashing-related-tags">
                        {relatedPost.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="smashing-related-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Leave a Comment Section */}
          <motion.div
            className="smashing-comment-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="smashing-section-title">Leave a Comment</h3>
            <p className="smashing-comment-intro">
              Have thoughts on this article? I'd love to hear from you! Drop a
              comment below and let's discuss.
            </p>

            <form
              onSubmit={handleCommentSubmit}
              className="smashing-comment-form"
            >
              <div className="smashing-form-row">
                <div className="smashing-form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={commentForm.name}
                    onChange={handleCommentChange}
                    required
                    className="smashing-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="smashing-form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={commentForm.email}
                    onChange={handleCommentChange}
                    required
                    className="smashing-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="smashing-form-group">
                <label htmlFor="comment">Comment *</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={commentForm.comment}
                  onChange={handleCommentChange}
                  required
                  rows="6"
                  className="smashing-textarea"
                  placeholder="Share your thoughts..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`smashing-submit-btn ${
                  isSubmitting ? "submitting" : ""
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Post Comment"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  className="smashing-form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Thank you! Your comment has been sent.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="smashing-form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✕ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Sidebar - Author Bio */}
        <aside className="smashing-sidebar">
          <motion.div
            className="smashing-author-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="smashing-sidebar-title">About The Author</h3>
            <img
              src="/images/profile.png"
              alt={post.authorBio.name}
              className="smashing-author-image"
            />
            <h4 className="smashing-author-name">{post.authorBio.name}</h4>
            <p className="smashing-author-title">{post.authorBio.title}</p>
            <p className="smashing-author-bio">{post.authorBio.bio}</p>

            <button
              onClick={() => navigate("/contact")}
              className="smashing-btn-contact"
            >
              <FaEnvelope /> Get in Touch
            </button>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="smashing-tags-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="smashing-sidebar-title">Tags</h3>
            <div className="smashing-sidebar-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="smashing-sidebar-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

export default BlogView;
