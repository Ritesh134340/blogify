import React from 'react'
import axios from "axios"

const SearchResult = ({data}) => {
    console.log(data)
  return (
    <div className="mt-[120px]">SearchResult</div>
  )
}


export async function getServerSideProps({ req, res, params, query }) {
    let searchQuery = "";
  
    if (query.q) {
      searchQuery = query.q;
    }
    const response = await axios.get(`http://localhost:3000/api/article/search?q=${searchQuery}`);
  
    const data = response.data.articles;
   
    return {
      props: { data },
    };
  }
export default SearchResult