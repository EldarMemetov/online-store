import leaves from "../imgBlog/blog1.png";
import tomato from "../imgBlog/blog2.png";
import carrot from "../imgBlog/blog3.png";
import man from "../imgBlog/blog4.png";
import girl from "../imgBlog/blog5.png";
import garbage from "../imgBlog/blog6.png";
import styles from "./BlogList.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export function BlogList() {
  const blogs = [
    {
      image: leaves,
      author: "By Rachi Card",
      title: "The Benefits of Vitamin D & How to Get It",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: tomato,
      author: "By Rachi Card",
      title: "Our Favorite Summertime Tomato",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: carrot,
      author: "By Rachi Card",
      title: "Benefits of Vitamin C & How to Get It",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: man,
      author: "By Rachi Card",
      title: "Research More Organic Foods",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: girl,
      author: "By Rachi Card",
      title: "Everyday Fresh Fruits",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: garbage,
      author: "By Rachi Card",
      title: "Don’t Use Plastic Product! It’s Killing Nature",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  return (
    <section className={styles.sectionBlog}>
      <div className={styles.blogListContainer}>
        <ul className={styles.blogList}>
          {blogs.map((blog, index) => (
            <li key={index} className={styles.blogItem}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>
                <p className={styles.blogAuthor}>{blog.author}</p>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogDescription}>{blog.description}</p>
                <button className={styles.blogButton}>
                  Read More <FaRegArrowAltCircleRight />
                </button>
              </div>
              <div className={styles.blogOverlay}></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
