import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(each => {
      const {changeRating, activeRating} = props
      const ratingClassName = each.ratingId === activeRating ? '' : ''
      const onClickRatingItem = () => changeRating(each.ratingId)

      return (
        <li
          key={each.ratingId}
          className="rating-item"
          onClick={onClickRatingItem}
        >
          <img
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
            className="img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }
  const renderRatingsFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changeCategory, activeCategory} = props
      const onClickCategoryItem = () => changeCategory(each.categoryId)
      const isActive = each.categoryId === activeCategory

      const categoryClassName = isActive ? 'active' : 'normal'

      return (
        <li
          key={each.categoryId}
          onClick={onClickCategoryItem}
          className="rating-item"
        >
          <p className={categoryClassName}>{each.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          placeholder="search-input"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
