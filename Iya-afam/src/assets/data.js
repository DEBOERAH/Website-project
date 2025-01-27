import coke from "./Images/Coke.jpg";
import pepsi from "./Images/Pepsi.jpg";
import chicken from "./Images/chicken.jpeg";
import pulpy from "./Images/pulpy.jpeg";
import Croka from "./Images/Croka.jpeg";
import titus from "./Images/titus.jpg";
import Hake from "./Images/Hake.jpeg";

export const products = [
    {
        id: 1,
        img: [coke],  // Standardize img to an array
        name: "Coca Cola",
        aosDelay: 0,
        search: "Coca Cola",
        category: "SoftDrink",
        price: 500,
        popular: true,
        subCategory: "Discount",
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 2,
        img: [pepsi], // Standardize img to an array
        name: "Pepsi",
        aosDelay: 200,
        search: "Pepsi",
        category: "SoftDrink",
        price: 450,
        popular: true,
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 3,
        img: [chicken], // Standardize img to an array
        name: "Chicken",
        aosDelay: 400,
        search: "Chicken",
        category: "FrozenFood",
        price: 2500,
        popular: true,
        quantity: ["5KG", "10KG", "20KG"], // Default quantity
        description: "Best quality frozen foods you can get with ensured freshness like they were freshly caught"
    },
    {
        id: 4,
        img: [pulpy], // Standardize img to an array
        name: "5Alive Pulpy",
        aosDelay: 600,
        search: "5Alive Pulpy",
        category: "SoftDrink",
        price: 1200,
        popular: false,
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 5,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: true,
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 6,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: true,
        subCategory: "Discount",
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 7,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: true,
        subCategory: "Bestseller",
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 8,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: false,
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 9,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: false,
        subCategory: "Discount",
        quantity: ["1 pack"], // Default quantity
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town..."
    },
    {
        id: 10,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: false,
        subCategory: "Bestseller",
        description: "Get your favourite consumed soft drinks at wholesale or retail for the best prices in town...",
        quantity: ["1 pack"] // Default quantity
    },
    {
        id: 11,
        img: [coke], // Standardize img to an array
        name: "Table Water",
        aosDelay: 800,
        search: "Table Water",
        category: "Water",
        price: 200,
        popular: false,
        subCategory: "Discount",
        quantity: ["1 pack"], // Default quantity
        description: ""
    },
    {
        id: 12,
        img: [Hake], // Standardize img to an array
        name: "Hake Fish",
        search: "Hake ",
        category: "FrozenFood",
        price: 200,
        quantity: ["5KG", "10KG", "20KG"], // Default quantity
        description: "Best quality frozen foods you can get with ensured freshness like they were freshly caught",
        subCategory: "Discount"
    },
    {
        id: 13,
        img: [Croka], // Standardize img to an array
        name: "Croker Fish",
        search: "Croker ",
        category: "FrozenFood",
        price: 200,
        quantity: ["5KG", "10KG", "20KG"], // Default quantity
        description: "Best quality frozen foods you can get with ensured freshness like they were freshly caught",
        subCategory: "Discount"
    }
];
