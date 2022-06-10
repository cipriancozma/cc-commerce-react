import "./directory.scss"
import Category from "../category/category"

const Directory = ({categories}) => {
    return (
        <div className='categories'>
        {
          categories.map(({title, id, image}) => (
            <Category key={id} title={title} image={image}/>
          ))}
    </div>
    )
}

export default Directory