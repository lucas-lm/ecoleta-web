import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import Dropzone from '../../components/Dropzone'

import api, { ibge } from '../../services/api'

import logo from '../../assets/logo.svg'
import './styles.css'

interface Item {
  id: number
  title: string
  image_url: string
}

interface IBGEUF {
  sigla: string
}

interface IBGECity {
  nome: string
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([])
  const [ufs, setUfs] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])

  const [selectedFile, setSelectedFile] = useState<File>()

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ])
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ])

  const [selectedUf, setSelectedUf] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const [textInputData, setTextInputData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })

  const history = useHistory()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setInitialPosition([latitude, longitude])
    })
  }, [])

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await api.get('/items')
      setItems(data)
    }
    fetchItems()
  }, [])

  useEffect(() => {
    const fetchUfs = async () => {
      const { data } = await ibge.get<IBGEUF[]>('/localidades/estados')
      const ufInitials = data.map((uf) => uf.sigla)
      setUfs(ufInitials)
    }
    fetchUfs()
  }, [])

  useEffect(() => {
    const fetchCities = async () => {
      const { data } = await ibge.get<IBGECity[]>(
        `/localidades/estados/${selectedUf}/municipios`
      )
      const cityNames = data.map((city) => city.nome)
      setCities(cityNames)
    }
    if (selectedUf) fetchCities()
  }, [selectedUf])

  const handleSelectUf = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUf(event.target.value)
  }

  const handleSelectCity = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng
    setSelectedPosition([lat, lng])
  }

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTextInputData({ ...textInputData, [name]: value })
  }

  const handleSelectItem = (itemId: number) => () => {
    selectedItems.includes(itemId)
      ? setSelectedItems([...selectedItems.filter((item) => item !== itemId)])
      : setSelectedItems([...selectedItems, itemId])
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const [latitude, longitude] = selectedPosition
    if (!selectedFile) {
      alert('Você precisa de uma foto!')
      return
    }

    const formData = new FormData()

    const data: any = {
      ...textInputData,
      city: selectedCity,
      uf: selectedUf,
      items: selectedItems.join(','),
      photo: selectedFile,
      latitude: String(latitude),
      longitude: String(longitude),
    }

    for (const key in data) {
      formData.append(key, data[key])
    }

    const { status } = await api.post('/points', formData)
    if (status === 201) history.push('/')
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <Dropzone onFileUpload={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleTextInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">e-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleTextInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleTextInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={14} onclick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="">Selecione uma UF</option>
                {ufs.map((uf) => (
                  <option value={uf} key={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                onChange={handleSelectCity}
                value={selectedCity}
              >
                <option value="">Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={handleSelectItem(item.id)}
                className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  )
}

export default CreatePoint
