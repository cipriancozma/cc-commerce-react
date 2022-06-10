import Title from '../title/title';
import './category.scss';

const Category = ({ image, title }) => {
    return  (
        <div className='category-wrapper'>
            <div className='background-image' style={{
                backgroundImage: `url(${image})`
            }} />
            <div className='category-body'>
                <Title title={title} />
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Category;