const StatesAndCities = ({ id, name, data = [], onChange = () => { } }) => {
  return (
    <select
      id={id || name}
      name={name || id}
      className='select-field'
      onChange={onChange}>
      {data.map(({ label, value }) => {
        return (
          <option key={value} value={value}>{label}</option>
        )
      })}
    </select>
  )
}

export default StatesAndCities