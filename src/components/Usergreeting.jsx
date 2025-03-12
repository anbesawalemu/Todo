import React from 'react';
import PropTypes from 'prop-types'

function Usergreeting(props) {
    
   return(
    props.isloggedin ? <h2 className='log'>well come to{props.username}</h2> :
                        <h2 className='login'>please to log in to continue</h2>
   )
}
Usergreeting.propTypes = {
    isloggedin: PropTypes.bool,
    username: PropTypes.string,
}
Usergreeting.defaultpProps = {
    isloggedin: true,
    username: "Guest",
}

export default Usergreeting;
