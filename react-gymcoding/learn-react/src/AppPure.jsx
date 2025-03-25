import './App.css'
import PullUppure from './components/PullUppure'
function AppPure(props) {
  return (
    <div>
      <PullUppure counter={11}/>
      <PullUppure counter={11}/>
      <PullUppure counter={11}/>
    </div>
  )
}

export default AppPure