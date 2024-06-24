
import "./BlogCard.css";
import {Link} from 'react-router-dom';



function BlogCard({id,title, content,author,Date,Languages}) {
  return (
    
   
   
   <Link className="card-container" to={`/blog/${id}`}>
        
       <h1 className="title">{title}</h1> 
        <h5 className="contentpre">{content.substring(0,80)}... </h5>
     <div className="author-card">
          <img src={author.avtar} alt="author" className="author-avtar"/>
          <span className="name">{author.name}</span>
         
          <span className="date">Date: {Date}</span>
      </div>
         { Languages.map((Languages , i)=>{
         return <span key={i} className="category-badge">{Languages}</span>})} 
    </Link>
   
  )
}

export default BlogCard