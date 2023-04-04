import React from "react";
import classes from "./Blog.module.scss";
import Card from "../ui-components/Card";
import blog1 from "../Images/blog-image-1.jpg";
import blog2 from "../Images/blog-image-2.jpg";
import blog3 from "../Images/blog-image-3.jpg";
import blog4 from "../Images/blog-image-4.jpg";
import blog5 from "../Images/blog-image-5.jpg";
import { OutlineButton } from "../ui-components/Button";
import { CgCalendarDates } from "react-icons/cg";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const PostTime = function () {
  return (
    <time>
      <CgCalendarDates></CgCalendarDates>
      <span>03 Mar, 2023</span>
    </time>
  );
};

function Blog() {
  return (
    <section id="blogs" className={classes["section-blog"]}>
      <h2 className="heading-secondary">Blog</h2>
      <div className={classes.blogsContainer}>
        <div className={classes["section-blog-container"]}>
          <article className={classes.acticles}>
            <article className={classes.blog}>
              <Card image={blog1}>
                <p className={classes["article-title"]}>
                  real estate, analysis
                </p>
                <div className={classes["article-details"]}>
                  <PostTime />{" "}
                  <p className={classes["article-author"]}>By Admin</p>
                </div>
                <h3>Guide for personal property Buying </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quam suscipit quibusdam beatae a debitis.
                </p>
                <OutlineButton>View More</OutlineButton>
              </Card>
            </article>
            <article className={classes.blog}>
              <Card image={blog2}>
                <p className={classes["article-title"]}>
                  real estate, analysis
                </p>
                <div className={classes["article-details"]}>
                  <PostTime />
                  <p className={classes["article-author"]}>By Admin</p>
                </div>
                <h3>Guide for personal property Buying </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quam suscipit quibusdam beatae a debitis.
                </p>
                <OutlineButton>View More</OutlineButton>
              </Card>
            </article>
            <article className={classes.blog}>
              <Card image={blog3}>
                <p className={classes["article-title"]}>
                  real estate, analysis
                </p>
                <div className={classes["article-details"]}>
                  <PostTime />
                  <p className={classes["article-author"]}>By Admin</p>
                </div>
                <h3>Guide for personal property Buying </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quam suscipit quibusdam beatae a debitis.
                </p>
                <OutlineButton>View More</OutlineButton>
              </Card>
            </article>
            <article className={classes.blog}>
              <Card image={blog4}>
                <p className={classes["article-title"]}>
                  real estate, analysis
                </p>
                <div className={classes["article-details"]}>
                  <PostTime />
                  <p className={classes["article-author"]}>By Admin</p>
                </div>
                <h3>Guide for personal property Buying </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quam suscipit quibusdam beatae a debitis.
                </p>
                <OutlineButton>View More</OutlineButton>
              </Card>
            </article>
            <article className={classes.blog}>
              <Card image={blog5}>
                <p className={classes["article-title"]}>
                  real estate, analysis
                </p>
                <div className={classes["article-details"]}>
                  <PostTime />
                  <p className={classes["article-author"]}>By Admin</p>
                </div>
                <h3>Guide for personal property Buying </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quam suscipit quibusdam beatae a debitis.
                </p>
                <OutlineButton>View More</OutlineButton>
              </Card>
            </article>
          </article>
          {/* <FiChevronLeft className={classes.left}></FiChevronLeft>
        <FiChevronRight className={classes.right}></FiChevronRight> */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
