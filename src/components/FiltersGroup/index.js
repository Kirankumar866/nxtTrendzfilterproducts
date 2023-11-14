import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onCategorySelect,
    onRatingSelect,
    onchangingtext,
    onSearchClick,
  } = props

  const onClickCategory = categoryId => {
    onCategorySelect(categoryId)
  }
  const onClickRating = ratingId => {
    onRatingSelect(ratingId)
  }
  const onChangeInput = event => {
    onchangingtext(event.target.value)
  }
  const searchClick = () => {
    onSearchClick()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={onChangeInput} />
        <button className="search-icon" onClick={searchClick} type="button">
          Search
        </button>
      </div>
      <div className="categories-container">
        <h1>Category</h1>
        <ul className="list-container">
          {categoryOptions.map(each => (
            <li
              key={each.categoryId}
              className="list"
              onClick={() => onClickCategory(each.categoryId)}
            >
              {each.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="ratinglist-container">
        <h1>Rating</h1>
        <ul className="list-container">
          {ratingsList.map(each => (
            <li
              className="list"
              key={each.ratingId}
              onClick={() => onClickRating(each.ratingId)}
            >
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="imagesize"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FiltersGroup
