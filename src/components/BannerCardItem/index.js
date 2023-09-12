// Write your code here.
import './index.css'

const CardList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={`banner-card-item ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardList
