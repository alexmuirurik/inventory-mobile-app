import HomeView from '@/src/modules/home/home.view'
import { useState } from 'react'

const IndexScreen = () => {
    const [search, setSearch] = useState('')
    return <HomeView search={search} setSearch={setSearch} />
}

export default IndexScreen
