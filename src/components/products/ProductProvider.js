import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

// This component establishes what data can be used.
export const ProductProvider = (props) => {
    //define a variable that holds the state of the component, and a function that updates it
    const [products, setProducts] = useState([])
    
    const [ searchTerms, setSearchTerms ] = useState("")

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://localhost:8088/products/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    // const releaseAnimal = animalId => {
    //     return fetch(`http://localhost:8088/animals/${animalId}`, {
    //         method: "DELETE"
    //     })
    //         .then(getAnimals)
    // }

    // const updateAnimal = animal => {
    //     return fetch(`http://localhost:8088/animals/${animal.id}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(animal)
    //     })
    //       .then(getAnimals)
    //   }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct, getProductById
            // releaseAnimal, updateAnimal, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}