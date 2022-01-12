import React from 'react';

function BtnDisplayComponent(props) {

    return (
        <div>
            {(props.status === 0) ?
                <button onClick={props.start}>start</button> : ""
            }

            {(props.status === 1) ?
                <div>
                    <button onClick={props.stop}>stop</button>
                    <button onClick={props.reset}>Reset</button>
                </div>
                : ""
            }

            {(props.status === 2) ?
                <div>
                    <button onClick={props.resume}>Resume</button>
                    <button onClick={props.reset}>Reset</button>
                </div>
                : ""
            }
        </div>
    )
}

export default BtnDisplayComponent;