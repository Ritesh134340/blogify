import React from 'react'
import { useRouter } from 'next/router'

const ArticleDetails = () => {
    const router = useRouter()
    const {slug}=router.query
    
  return (
    <div>ArticleDetails</div>
  )
}

export default ArticleDetails