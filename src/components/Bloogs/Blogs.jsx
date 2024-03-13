import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
          fetch('blogs.json')
          .then(res=>res.json())
          .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
               <h2 className="text-2xl font-bold mt-5">Blogs:{blogs.length}</h2>
               <div>
                  {
                    blogs.map(blog=> <Blog
                      key={blog.id}
                      blog={blog}
                      handleAddToBookmark={handleAddToBookmark}
                      handleMarkAsRead={handleMarkAsRead}
                    ></Blog> )
                  }
               </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}

export default Blogs;