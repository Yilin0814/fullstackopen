const Filter =(props)=>{
    const filterName = props.filterName
    const setFilterName = props.setFilterName
  
    const handleFilterNameChange = (event) => {
      console.log('handleFilterNameChange: ',event.target.value)
      setFilterName(event.target.value)
    }
  
    return (
      <div>
        <p style={{ display: 'inline'}}>filter shown with: </p>
        <input
          value={filterName}
          onChange={handleFilterNameChange}
        />
      </div>
    )
  }
  export default Filter