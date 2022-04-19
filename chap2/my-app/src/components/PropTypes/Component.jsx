import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props) {
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "Jimmy",
    age: 8
}

PropComponent.propTypes = {
    name: PropTypes.string,
    age: function(props, propName, componentName) {
    if (!/7/.test(props[propName])) {
      return new Error(
        '어어? 경고를 띄웠어? 감히? ㅋㅋ'
      );
    }
  },
}
export default function Component() {
    return (
        <div>
            <PropComponent />
        </div>
    )
}
