class ProductManager {
    constructor (){
        this.products = []
    }
    static id = 0

    addProduct(title, description, price, thumbnail, stock ,code){
        for(let i = 0 ; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`el codigo ${code} esta repetido`)
                break
            }
        }
        const newProduct ={title, description, price, thumbnail, stock ,code}
         if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct, id:ProductManager.id});
         }else{
            console.log("todos los campos son requeridos")
         }


        
    }
    getProduct(){
        return this.products;
    }
    existe (id){
        return this.products.find((prodcuto) => prodcuto.id === id)
    }
    getProductById(id){
      !this.existe(id) ? console.log("Not Found") : console.log( this.existe(id));
        }
    }


const productos = new ProductManager ;

productos.addProduct("producto prueba1", "Este es un producto prueba1", 200, "sin imagen1", 25 , "abc123") ;
productos.addProduct("producto prueba2", "Este es un producto prueba2", 200, "sin imagen2", 25 , "abc1234") ;
productos.addProduct("producto prueba3", "Este es un producto prueba3", 200, "sin imagen3", 25 , "adc123") ;
productos.addProduct("producto prueba4", "Este es un producto prueba4", 200, "sin imagen", 25 , ) ;
console.log (productos.getProduct());
productos.getProductById(2)
productos.getProductById(5)