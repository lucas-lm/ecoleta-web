# Ecoleta

O Ecoleta tem o obetivo de mapear pontos de coleta de resíduos que não podem ser descartados de qualquer maneira, como pilhas e lixo eletrônico.
Um ponto de coleta pode ser cadastrado pelo aplicativo web, e os dados de localização deste ponto de coleta ficam disponíveis na API pública do ecoleta.
Os pontos de coleta cadastrados podem ser visualizados através do aplicativo ecoleta, disponível para Android na Play Store.
Este projeto foi idealizado pela Rocketseat na primeira edição da Next Level Week (NLW), durante a semana do meio ambiente de 2020.

---
![](https://imgur.com/WvKt6CG.gif)
---

## API

URL base: BASE_URL

### Endpoints

| Endpoint             | Método | O que ele faz?                   | O que ele retorna?                    |
| -------------------- | ------ | -------------------------------- | ------------------------------------- |
| /points              | POST   | Registra um novo ponto de coleta | -                                     |
| /points              | GET    | -                                | Todos os pontos de coleta registrados |
| /points/`<point_id>` | GET    | -                                | Um ponto de coleta específico         |
| /items               | GET    | -                                | Todos os items aceitos                |

O endpoint /points pode aceitar opcionalmente os seguintes parâmetros:

| Parâmetro | Valor                              | Exemplo      |
| --------- | ---------------------------------- | ------------ |
| city      | Nome de uma cidade                 | Taquaritinga |
| uf        | Sigla para um estado               | SP           |
| items     | IDs de items separados por vírgula | 1,2,6        |

Uma requisição para pontos de coleta que colete os items 1, 2 e 6 em Taquaritinga/SP seria:

```
BASE_URL/points?city=Taquaritinga&uf=SP&items=1,2,6
```

Em caso de sucesso, o status da requisição retornado é 2xx.


## Web
### Features
## Nativo
### Features
