const handleGetServiceFromLocal = () => {
    const services = localStorage.getItem('bookedService');
//    console.log(services);
    if (services) {
        const cartProducts = JSON.parse(services);
        // console.log(cartProducts);
        return cartProducts;
    } else {
        const cartProducts = [];
        // console.log(cartProducts);
        return cartProducts;
    }
}

// set 
const handleSetServiceToLocal = (service) => {
    const cartService = handleGetServiceFromLocal();
    cartService.push(service)
    // console.log(cartProducts);
    localStorage.setItem('bookedService', JSON.stringify(cartService));
    toast.success("Successfully added to the cart list.", {
        position: 'top-center'
    })

}

export {handleGetServiceFromLocal, handleSetServiceToLocal}