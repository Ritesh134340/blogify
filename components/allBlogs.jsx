import React from 'react'
import BlogList from './blogList'

export async function getServerSideProps({ req, res, params, query }) {
   

    return {
        props: {},
    }
}


const AllBlogs = () => {
  return (
      <div>
        <BlogList/>
      </div>
  )
}

export default AllBlogs