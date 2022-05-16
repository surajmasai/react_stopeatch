
import './App.css';
import DisplayComponent from './components/DisplayComponent';
import BtnComponent from './components/BtnDisplaycomponent';
import { useState, useEffect } from 'react';



function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  const [interv, setInterv] = useState();

  const [status, setStatus] = useState(0);

  const [laping, setLaping] = useState([])

  const start = () => {
    run();
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;

    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setLaping([])


  }

  const resume = () => start();

  const lap = () => {
    setLaping([...laping, time])

  }
  useEffect(() => {
    // console.log(laping)
  }, [laping])

  // console.log(laping);

  var contlap = {
    // border: "2px solid black",
    width: "15%",
    margin: "auto",
    marginTop: "30px",
    height: "160px",
    overflow: "auto"
  }


  return (
    <div className="App">
      <h1 className="heading">STOPWATCH</h1>

      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent status={status} stop={stop} reset={reset} resume={resume} start={start} lap={lap} />
        </div>
        {laping.length > 0 ?
          <div className="cont_lap" style={contlap}>
            {
              laping.map((e, i) => {
                return (
                  <>
                    <div key={i} className="lap">
                      <span>{i + 1}.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>{(e.h >= 10) ? e.h : "0" + e.h}</span>&nbsp;:&nbsp;
                      <span>{(e.m >= 10) ? e.m : "0" + e.m}</span>&nbsp;:&nbsp;
                      <span>{(e.s >= 10) ? e.s : "0" + e.s}</span>&nbsp;:&nbsp;
                      <span>{(e.ms >= 10) ? e.ms : "0" + e.ms}</span>&nbsp;&nbsp;
                    </div>
                    <hr />
                  </>
                )
              })
            }
          </div> : ""
        }
      </div>
    </div>
  );
}

export default App;

