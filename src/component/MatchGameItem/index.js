import './index.css'

const MatchGameItem = props => {
  const {imagesUrl, onImages} = props
  const {thumbnailUrl, id} = imagesUrl
  const thumbnailId = () => {
    onImages(id)
  }
  return (
    <li>
      <button type="button" className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail"
          onClick={thumbnailId}
        />
      </button>
    </li>
  )
}
export default MatchGameItem
