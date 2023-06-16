
// Crie uma lista de produtos

// 1. Alista produtos deve conter os seguintes produtos: Computador,
// Telefone, Mouse, Teclado. Exiba essa lista no console quando abrir o
// index.html.

let list = [ "Computador","Telefone", "Mouse", "Teclado" ];
    console.log( list );

// 2. Mostre no console quantos produtos tem nessa lista.

    console.log( list.length );

// 3. Retire o produto Mouse da lista e retorne no console a lista com os
// produtos restantes.

    let newList = list.filter( list => list !== "Mouse");
        console.log( newList );

// 4. Faça uma busca na sua lista por algum produto, por exemplo procure por
// Computador e caso exista esse produto na sua lista exiba um console
// falando que este produto existe e mostre tambem o nome deste produto
// caso não exista mostre uma mensagem avisão que o produto não foi
// encontrado.

    let searchedProduct = "Computador";
    let productFound = list.some( product => product===searchedProduct );
        if (productFound) {
            console.log(`Este produto existe: ${searchedProduct}`) 
        } else {
            console.log('Este produto não foi encontrado.')
        };

// 5. Remova o segundo item da sua lista.
    let splicedList = [...list];
    splicedList.splice(1, 1);
    console.log(splicedList);