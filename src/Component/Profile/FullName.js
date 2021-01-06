import React from 'react'
const firstname="Rchid";
const lastname="Baccouchi"
function FullName() {
    return (
        <div className="fullname">
            <h2>Hi, my name is {firstname+" "+lastname}.</h2>
        </div>
    )
}

export default FullName
