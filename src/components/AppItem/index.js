// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl, category} = details

  return (
    <li id={appId} className="outer">
      <img className="image" alt={appName} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
