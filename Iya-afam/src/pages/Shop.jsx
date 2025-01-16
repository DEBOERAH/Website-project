import { useState } from "react";
import { products } from "../assets/data.js";

const Shop = () => {
    const [sortOption, setSortOption] = useState("top"); // Track selected sorting option
    const [selectedCategories, setSelectedCategories] = useState([]); // Track selected categories
    const [searchQuery, setSearchQuery] = useState(""); // Track search input
    const [filteredProducts, setFilteredProducts] = useState(products); // Filtered and sorted products

    // Handle sorting logic
    const handleSort = (option) => {
        setSortOption(option);
        updateFilteredProducts(selectedCategories, option, searchQuery);
    };

    // Handle category selection
    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
        updateFilteredProducts(updatedCategories, sortOption, searchQuery);
    };

    // Handle search input
    const handleSearch = (query) => {
        setSearchQuery(query);
        updateFilteredProducts(selectedCategories, sortOption, query);
    };

    // Filter and sort products dynamically
    const updateFilteredProducts = (categories, sortOption, searchQuery) => {
        let updatedProducts = products;

        // Filter by selected categories
        if (categories.length > 0) {
            updatedProducts = updatedProducts.filter((product) =>
                categories.includes(product.category)
            );
        }

        // Filter by search query
        if (searchQuery) {
            updatedProducts = updatedProducts.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply sorting
        if (sortOption === "discount") {
            updatedProducts.sort((a, b) => b.price - a.price); // Example: Sort by price descending
        } else if (sortOption === "top") {
            updatedProducts.sort((a, b) => (b.popular ? 1 : -1)); // Example: Sort by popularity
        }

        setFilteredProducts(updatedProducts);
    };

    return (
        <div className="max-padd-container !px-0">
            <div className="flex flex-col sm:flex-row gap-8 mb-16">
                {/* Filters */}
                <div className="min-w-72 bg-gray-100 p-4 mt-8 pl-6 lg:pl-12">
                    {/* Search */}
                    <div className="mb-4">
                        <h5>Search</h5>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="mt-2 w-full border rounded px-2 py-1"
                        />
                    </div>
                    {/* Categories */}
                    <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
                        <h5 className="h5 mb-4">Categories</h5>
                        <div className="flex flex-col gap-2 text-sm font-light">
                            {["SoftDrink", "FrozenFood", "Kerosene", "Water"].map((cat) => (
                                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                                    <input
                                        type="checkbox"
                                        value={cat}
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="w-3"
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Sort By */}
                    <div className="mt-4">
                        <h5>Sort By</h5>
                        <select
                            value={sortOption}
                            onChange={(e) => handleSort(e.target.value)}
                            className="mt-2 border rounded px-2 py-1"
                        >
                            <option value="">Select</option>
                            <option value="discount">Discount</option>
                            <option value="top">Top Selling</option>
                        </select>
                    </div>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-4">
                    {filteredProducts.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <img
                                src={item.img}
                                alt="Products"
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold text-center">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
