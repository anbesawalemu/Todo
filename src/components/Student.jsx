import React from 'react';
import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className='student'>
      <p>Name:{props.name}</p>
      <p>age:{props.age}</p>
      <p>student:{props.isstudent ? "yes":"No"}</p>
    </div>
  );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isstudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Biniam",
    age: 28,
    isstudent: false,
  };

export default Student;
