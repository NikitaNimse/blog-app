
import "./BlogView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";



function BlogView() {

    const {id} = useParams()
   
    const selectedBlog = blogs.find((blogObject)=> blogObject.id == id)
      
    return(<>
    <div className="blog-card" >
        <h1 className="title-blog">{selectedBlog.title}</h1>
        <img src={selectedBlog.author.avtar} alt="'author"  className="poster"/>
        <p className="info1"> {selectedBlog.author.name} | {selectedBlog.Date} </p>
        <p className="info1"> {selectedBlog.content} </p>
        </div>
        </>
    )
}

export default BlogView
