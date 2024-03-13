import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Bloogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = (time, id) =>{
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);

        // remove the read blog from bookmark
        // console.log('remove bookmark', id)
        const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id )
        setBookmarks(remainingBookMarks)


  }

  

  const handleAddToBookmark = blog =>{
      const newBookMark = [...bookmarks, blog];
      setBookmarks(newBookMark);
  }

  return (
    <>
     <Header />
      <div className='md:flex max-w-6xl mx-auto'>
            <Blogs handleAddToBookmark={handleAddToBookmark}
             handleMarkAsRead={handleMarkAsRead}
           
            />
            <BookMarks bookmarks={bookmarks}
            readingTime={readingTime}
            />
      </div>
      
      
    </>
  )
  }

export default App
