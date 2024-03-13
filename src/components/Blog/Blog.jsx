import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa"

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
     const {title,cover_photo, reading_time, author,id, author_img, posted_date,hashtag} = blog;
    return (
        <div className='mb-20 space-y-4'>
              <img className='w-full mb-8' src={cover_photo} alt={`Cover Picture of the title ${title}`} />
              <div className='flex justify-between items-center  mb-4'>
                    <div className='flex items-center gap-3'>
                        <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                        <div>
                             <h3 className='text-2xl'>{author} </h3> 
                             <p>{posted_date}</p> 
                        </div>
                    </div>
                    <div className='space-x-4 flex items-center'>
                         <span>{reading_time} min read</span>
                         <button onClick={()=>handleAddToBookmark(blog)} className='text-red-700 text-2xl' ><FaBookmark /></button>
                    </div>
              </div>
              <h2 className='text-4xl'>{title}</h2>
              <p>
                {
                    hashtag.map((hash, idx)=> <span key={idx}> <a href="">#{hash} </a> </span> )
                }
              </p>
              <button
                 onClick={()=>handleMarkAsRead(reading_time, id)}
              className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}
export default Blog;