import React from "react";
import './simple-page.scss'

const  SimplePage = ({pageClass = "", children, containerClasses = ""}) => {
    return (
      <main className={pageClass}>
        <div className="container-xl simple-page-container">
          <div className={`col-md-12 simple-page-column rounded-lg p-3 ${containerClasses}`} >
          {children}
          </div>
        </div>
      </main>
    )
}

export default SimplePage