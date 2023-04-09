"components": {
	"schema": {
		"usuario": {
			"type": "object",
			"properties": {
                "nome": {"type": "string"},
                "email": {"type": "string"},
                "senha": {"type": "string",}, 
                "imagem": {"type": "string"},
                "enderecos": {
                    "type": "array",
                    "items": {
                        {
                            "logradouro": {"type": "string"},
                            "numero": {"type": "number"},
                            "complemento": {"type": "string"},
                            "cep": {"type": "string"},
                            "createdAt": {"type": "string"}
                        }
                    }
                },
                "produtos_fav": {
                    "type": "array",
                    "items": {   
                        "properties": {     
                            {
                                "_id": {"type": "string"},
                                "createdAt": {"type": "string"}
                            }
                        }
                    }
                },
                "admin": {"type": "boolean"},
                "createdAt": {"type": "string"}
            }
        }
    }
}







