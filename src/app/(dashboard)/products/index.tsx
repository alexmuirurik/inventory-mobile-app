import { useState } from 'react'
import ProductsView from '@/src/modules/products/index/products.view'

const IndexScreen = () => {
    const [search, setSearch] = useState('')
    return <ProductsView search={search} setSearch={setSearch} />
}

export default IndexScreen
