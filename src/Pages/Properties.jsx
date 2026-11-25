
import { useState } from 'react'
import properties from '../Data/properties.js'
import './Properties.css'

function Properties() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [propertyType, setPropertyType] = useState('All')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('All')
    const [sortOrder, setSortOrder] = useState('default')

    const formatPrice = (price, purpose) => {
        if (purpose === 'Rent') {
            return `₹${price.toLocaleString('en-IN')}/month`
        }

        if (price >= 10000000) {
            return `₹${(price / 10000000).toFixed(2)} Cr`
        }

        return `₹${(price / 100000).toFixed(0)} Lakh`
    }

    const filteredProperties = properties
        .filter((property) => {
            const matchesPurpose =
                activeFilter === 'All' || property.purpose === activeFilter

            const matchesSearch =
                property.title.toLowerCase().includes(search.toLowerCase()) ||
                property.location.toLowerCase().includes(search.toLowerCase()) ||
                property.city.toLowerCase().includes(search.toLowerCase())

            const matchesType =
                propertyType === 'All' || property.type === propertyType

            const matchesMinPrice =
                minPrice === '' || property.price >= Number(minPrice)

            const matchesMaxPrice =
                maxPrice === '' || property.price <= Number(maxPrice)

            const matchesBedrooms =
                bedrooms === 'All' ||
                (bedrooms === '4+' ? property.bedrooms >= 4 : property.bedrooms === Number(bedrooms))

            return (
                matchesPurpose &&
                matchesSearch &&
                matchesType &&
                matchesMinPrice &&
                matchesMaxPrice &&
                matchesBedrooms
            )
        })
        .sort((a, b) => {
            if (sortOrder === 'low-high') return a.price - b.price
            if (sortOrder === 'high-low') return b.price - a.price
            return 0
        })

    const clearFilters = () => {
        setActiveFilter('All')
        setSearch('')
        setPropertyType('All')
        setMinPrice('')
        setMaxPrice('')
        setBedrooms('All')
        setSortOrder('default')
    }

    return (
        <main className="properties-page">

            <section className="properties-heading">
                <span className="properties-tag">EXPLORE PROPERTIES</span>
                <h1>Find Your Perfect <span>Property</span></h1>
                <p>
                    Explore carefully selected homes and properties
                    that match your lifestyle.
                </p>
            </section>

            <section className="properties-content">

                <div className="properties-toolbar">
                    <div>
                        <h2>Available Properties</h2>
                        <p>{filteredProperties.length} properties found</p>
                    </div>

                    <div className="property-filters">
                        {['All', 'Buy', 'Rent'].map((filter) => (
                            <button
                                key={filter}
                                className={activeFilter === filter ? 'active' : ''}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="property-search-panel">

                    <div className="filter-field search-field">
                        <label>Search Location or Property</label>
                        <input
                            type="text"
                            placeholder="Enter property name or city..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="filter-field">
                        <label>Property Type</label>
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="All">All Types</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Studio">Studio</option>
                            <option value="Independent House">Independent House</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>

                    <div className="filter-field">
                        <label>Bedrooms</label>
                        <select
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                        >
                            <option value="All">Any Bedrooms</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4+">4+ Bedrooms</option>
                        </select>
                    </div>

                    <div className="filter-field">
                        <label>Minimum Price (₹)</label>
                        <input
                            type="number"
                            placeholder="Minimum"
                            min="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </div>

                    <div className="filter-field">
                        <label>Maximum Price (₹)</label>
                        <input
                            type="number"
                            placeholder="Maximum"
                            min="0"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>

                    <div className="filter-field">
                        <label>Sort By Price</label>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="low-high">Low to High</option>
                            <option value="high-low">High to Low</option>
                        </select>
                    </div>

                    <button className="clear-filters-btn" onClick={clearFilters}>
                        Clear Filters
                    </button>

                </div>

                <div className="properties-grid">

                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <article className="property-card" key={property.id}>

                                <div className="property-image">
                                    <img
                                        src={`${property.image}?auto=format&fit=crop&w=700&q=65`}
                                        alt={property.title}
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <span className="property-purpose">
                                        For {property.purpose}
                                    </span>

                                    {property.featured && (
                                        <span className="property-featured">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <div className="property-details">
                                    <h3>{property.title}</h3>

                                    <p className="property-location">
                                        <span>⌖</span> {property.location}
                                    </p>

                                    <h2 className="property-price">
                                        {formatPrice(property.price, property.purpose)}
                                    </h2>

                                    <div className="property-info">
                                        {property.bedrooms > 0 && (
                                            <span>🛏 {property.bedrooms} Beds</span>
                                        )}
                                        <span>🛁 {property.bathrooms} Baths</span>
                                        <span>▱ {property.area} Sq.Ft.</span>
                                    </div>

                                    <div className="property-card-footer">
                                        <span>{property.type}</span>
                                        <button
                                            onClick={() =>
                                                alert(`You selected: ${property.title}`)
                                            }
                                        >
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="no-properties">
                            <h3>No Properties Found</h3>
                            <p>Try changing your search or filters.</p>
                            <button onClick={clearFilters}>Clear Filters</button>
                        </div>
                    )}

                </div>

                <p className="property-disclaimer">
                    Note: These are sample property listings for demonstration purposes.
                </p>

            </section>
        </main>
    )
}

export default Properties
