const getAll = (req, res) => {
    res.send('[API] Se recuperan los productos');
};

const create = (req, res) => {
    res.send('[API] Se crea un producto');
}

const update = (req, res) => {
    res.send('[API] Se actualiza un producto');
}

const deleteProduct = (req, res) => {
    res.send('[API] Se borra un producto');
}

module.exports = {
    getAll, create, update, deleteProduct
};