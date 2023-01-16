import Title from '@Atoms/Title'
import AuthorDetail from '@Molecules/AuthorDetail'
import BlogContent from '@Molecules/BlogContent'
import React from 'react'

const BlogContainer = () => {
  return (
    <div>
      <Title />
      <AuthorDetail />
      <BlogContent />
    </div>
  )
}

export default BlogContainer
