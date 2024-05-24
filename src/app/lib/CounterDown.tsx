export type CounterDownProps = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

const CounterDown = (props: CounterDownProps): JSX.Element => {
  const {days, hours, minutes, seconds} = props


  return <div className="grid grid-flow-col gap-5 text-center auto-cols-max md:pl-12">
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": days} as React.CSSProperties}></span>
    </span>
      days
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": hours} as React.CSSProperties}></span>
    </span>
      hours
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": minutes} as React.CSSProperties}></span>
    </span>
      min
    </div>
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": seconds} as React.CSSProperties}></span>
    </span>
      sec
    </div>
  </div>
}


export default CounterDown