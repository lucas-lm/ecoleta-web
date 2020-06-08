# Ecoleta

O Ecoleta tem o obetivo de mapear pontos de coleta de resíduos que não podem ser descartados de qualquer maneira, como pilhas e lixo eletrônico.
Um ponto de coleta pode ser cadastrado pelo aplicativo web, e os dados de localização deste ponto de coleta ficam disponíveis na API pública do ecoleta.
Os pontos de coleta cadastrados podem ser visualizados através do aplicativo ecoleta, disponível para Android na Play Store.
Este projeto foi idealizado pela Rocketseat na primeira edição da Next Level Week (NLW), durante a semana do meio ambiente de 2020.

---
![](https://imgur.com/WvKt6CG.gif)
---

## API

A API do ecoleta fornece acesso a uma base de dados com informações sobre pontos de coleta de resíduos que não podem ser descartados no meio ambiente.
A URL base para acessar essas informações é https://ecoleta-279615.rj.r.appspot.com/ e os endpoints disponíveis estão todos documentados aqui.

### Experimente

Todos os endpoints da API são abertos quase todos utilizam o método GET para trazer dados da API.
Desta forma, você pode experimentar a API diretamente do seu navegador.
[Clicando aqui](https://ecoleta-279615.rj.r.appspot.com/items), por exemplo, você tem acesso aos itens que podem ser coletados. Alternativamente você também pode colar esta URL https://ecoleta-279615.rj.r.appspot.com/items diretamente no seu navegador.

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
https://ecoleta-279615.rj.r.appspot.com/points?city=Taquaritinga&uf=SP&items=1,2,6
```

Em caso de sucesso, o status da requisição retornado é 2xx.


## Aplicação Web

A aplicação web fornece uma interface gráfica amigável para registrar um novo ponto de coleta na base de dados do ecoleta.

### Funcionalidades

- Upload de imagem do ponto de coleta
  - Você pode escolher uma imagem para o seu ponto de coleta
  - Imagens aceitas apenas nos formatos JPG, PNG e GIF
  - Tamanho máximo da imagem de 2 MB
- Integração com mapas
  - Você pode selecionar no mapa a localização exata do seu ponto de coleta
  - Você pode 
- Geolocalização
- Opções para cidade/estado sincronizada com base de dados do IBGE

## App Mobile

O app mobile fornece uma interface gráfica onde é possível visualizar pontos de coleta pelo mapa

### Funcionalidades

- Visualização de detalhes dos pontos de coleta
  - Itens que o ponto de coleta aceita
  - Whatsapp
  - E-mail
  - Nome do ponto de coleta
  - Endereço do ponto de coleta
- Geolocalização
  - Abre o mapa centralizado na região em que você se encontra
  - Exibe pontos de coleta próximos de você
- Integração com mapas padrão do smartphone
  - Você pode visualizar pontos de coleta no mapa
- Integração com whatsapp
  - Você pode enviar mensagem via whatsapp para o ponto de coleta diretamente do app
- Integração com aplicativo de email
  - Você pode enviar mensagem via e-mail para o ponto de coleta diretamente do app