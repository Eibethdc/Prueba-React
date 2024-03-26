function Buscador({search, setSearch}) {

    const handleSearch = async (e) =>{
        setSearch(e.target.value)
    }
    
    return (
        <div className='buscador'>
            <input 
                type="text"
                placeholder='Filtra por genero'
                className='form-control w-25'
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Buscador
