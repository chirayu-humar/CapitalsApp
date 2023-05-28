// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl, category} = details

  return (
    <li id={appId} className="outer">
      <div>
        <img className="image" alt={appName} src={imageUrl} />
      </div>
      <div>
        <p>{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
