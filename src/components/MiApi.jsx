import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Buscador from './Buscador'

const MiApi = () => {
    const [cats, setCats] = useState([])
    const [search, setSearch] = useState('');
    const url = 'https://huachitos.cl/api/animales/tipo/gato';

    const getData = async () =>{
        try {
            const response = await fetch(url)
            const data = await response.json()
            setCats(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getData()
    }, []);
    
    let results = []
    if (!search){
        results = cats
    } else{
        results = cats.filter((cat) => cat.genero.includes(search));
    }

    return (
        <>
            <Buscador search={search} setSearch={setSearch}/>
            <div className='container'>
            {results.map((cat) => (
                <Card key={cat.id} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={cat.imagen} className='img'/>
                <Card.Body className='card'>
                    <Card.Title>{cat.nombre}</Card.Title>
                    <Card.Text>
                        <li>Edad: {cat.edad}</li>
                        <li>Genero: {cat.genero}</li>
                        <li>Ubicación: {cat.comuna} ({cat.region})</li>
                    </Card.Text>
                    <Button variant="primary"><a href={cat.url}>Ver mas</a></Button>
                </Card.Body>
                </Card>
            ))}
            </div>
        </>
    )
}

export default MiApi
