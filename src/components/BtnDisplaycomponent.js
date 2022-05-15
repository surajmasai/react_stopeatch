import React from 'react';

function BtnDisplayComponent(props) {

    return (
        <div>
            {(props.status === 0) ?
                <button className="button" onClick={props.start}>start</button> : ""
            }

            {(props.status === 1) ?
                <div>
                    <button className="button" onClick={props.stop}>stop</button>
                    <button className="button" onClick={props.reset}>Reset</button>
                    <button className="button" onClick={props.lap}>Lap</button>
                </div>
                : ""
            }

            {(props.status === 2) ?
                <div>
                    <button className="button" onClick={props.resume}>Resume</button>
                    <button className="button" onClick={props.reset}>Reset</button>
                </div>
                : ""
            }
        </div>
    )
}

export default BtnDisplayComponent;