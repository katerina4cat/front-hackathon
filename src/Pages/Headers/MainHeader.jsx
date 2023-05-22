import React from 'react'
import cl from "./MainHeader.module.scss"
import {ReactComponent as BurgerIcon} from '../../Assets/Icons/burgerDot.svg'


function MainHeader() {
  return (
    <div className={cl.MainHeader}>
        <div className={cl.MoscowHeader}>
          <div className={cl.GlobalTitle}>
            <img className={cl.Embleme} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Coat_of_Arms_of_Moscow.svg/300px-Coat_of_Arms_of_Moscow.svg.png'/>
            <div className={cl.Title}>Правительство москвы</div>
          </div>
        </div>

        <div className={cl.ButtonsHeader}>
          <BurgerIcon className={cl.BurgerIcon}/>
        </div>
    </div>
  )
}

export default MainHeader