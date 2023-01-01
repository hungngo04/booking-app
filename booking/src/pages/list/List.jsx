import React from 'react'
import Header from '../../components/header/Header'
import './list.css'

const List = () => {
  return (
    <div>
      <Header type="list"></Header>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder='Madrid'/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <input type="date" placeholder='Madrid'/>
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsItemOptions">
                <div className="lsItemOption">
                  <label htmlFor="">Min price (per night)</label>
                  <input type="text" />
                </div> 
                <div className="lsItemOption">
                  <label htmlFor="">Max price (per night)</label>
                  <input type="text" />
                </div>
                <div className="lsItemOption">
                  <label htmlFor="">Adult</label>
                  <input type="text" placeholder='1'/>
                </div>
                <div className="lsItemOption">
                  <label htmlFor="">Children</label>
                  <input type="text" placeholder='2'/>
                </div>
                <div className="lsItemOption">
                  <label htmlFor="">Room</label>
                  <input type="text" placeholder='1'/>
                </div>
              </div>
            </div>
            <button className="search">Search</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List