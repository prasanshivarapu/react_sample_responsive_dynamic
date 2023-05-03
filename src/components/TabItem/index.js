import './index.css'

const TabItem = props => {
  const {tabDetails, todoId, isActive} = props
  const {displayText, tabId} = tabDetails

  const btn = () => {
    todoId(tabId)
    console.log(tabId)
  }
  const atr = isActive ? 'a' : ''
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${atr}`} onClick={btn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
