
import {ObjectId} from 'bson';

class Usuario{

    
    constructor(
    {
        nome,
        id = new ObjectId(),
        particao,
        telefone,

    })
    {
        this._id = id;
        this._nome = nome;
        this._particao = particao;
        this._telefone = telefone;
    }

    static schema = {
        name: "Usuario",
        properties:
        {
            _id: 'objectId',
            _nome: 'string',
            _telefone: 'string',
            _particao: 'string'
        },
        primaryKey: '_id'
    };
}

export {Usuario};