import CategoriesItem from "../categories-item/categories-item";
import './directory-style.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
            return <CategoriesItem key={category.id} category={category} />;
            })}
        </div>
    )
}


export default Directory;