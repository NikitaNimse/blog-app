import "./Home.css";
import blogs from "./../../data";
import Blogcard from "./../../components/Blogcard/Blogcard"
function Home () {
    console.log(blogs)
    return (<>
     {
        blogs.map((blogObject,i)=> {
        const {
            id,
            title,
            content,
            author,
            Date,
            Languages

        } = blogObject
        return (
            <Blogcard
            key={i}
            id={id}
            title={title}
            content={content}
            author={author}
            Date={Date}
            Languages={Languages}
            />
         )
        })
    }
    
    </>)
}
export default Home