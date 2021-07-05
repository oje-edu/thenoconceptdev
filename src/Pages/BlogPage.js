import React from 'react'
import Title from '../Components/Title'
import allBlogs from '../Components/allBlogs'

function BlogPage () {
  return (
    <div>
      <div className='b-title'>
        <Title title='Ähnliche Artikel' span='Ähnliche Artikel' />
      </div>
      <div className='BlogPage'>
        {
          allBlogs.map((blog) => {
            return (
              <div className='blog' key={blog.id}>
                <div className='blog-content'>
                  <img src={blog.image} alt='' />
                  <a href={blog.link} className='blog-link'>
                    {blog.title}
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BlogPage
