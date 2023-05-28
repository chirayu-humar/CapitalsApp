// Write your code here
import './index.css'

const TabItem = props => {
  const {details, selectedTabId, onTabChange} = props
  const {tabId, displayText} = details
  const isActive = tabId === selectedTabId
  const buttonClass = isActive ? 'ActiveClass' : ''

  return (
    <li>
      <button
        onClick={onTabChange}
        className={buttonClass}
        id={tabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
