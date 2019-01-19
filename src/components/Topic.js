import React from 'react';

const Topic = props => {
    return (
        <div>
            <p>{props.match.params.topicId}</p>

        </div>
    )
}

export default Topic