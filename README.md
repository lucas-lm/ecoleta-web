# :recycle: Ecoleta :recycle:

![GitHub last commit](https://img.shields.io/github/last-commit/lucas-lm/ecoleta-web)
![GitHub](https://img.shields.io/github/license/lucas-lm/ecoleta-web)

O Ecoleta tem o obetivo de mapear pontos de coleta de resíduos que não podem ser descartados de qualquer maneira, como pilhas e lixo eletrônico.
Um ponto de coleta pode ser cadastrado pelo aplicativo web, e os dados de localização deste ponto de coleta ficam disponíveis na API pública do ecoleta.
Os pontos de coleta cadastrados podem ser visualizados através do aplicativo ecoleta, disponível para Android na Play Store.
Este projeto foi idealizado pela Rocketseat na primeira edição da Next Level Week (NLW), durante a semana do meio ambiente de 2020.

---

## ![](https://imgur.com/WvKt6CG.gif)

## Como funciona?

1. Um dono de um estabelecimento que colete resíduos especiais para descarte se cadastra na [plataforma](https://lucas-lm.github.io/ecoleta-web/).
2. Os dados sobre este estabelecimento como itens que coleta, localização, nome e endereço ficam disponíveis na nossa base de dados e pode ser acessado publicamente através da nossa API. Você pode até mesmo usar estes dados em seu próprio site/serviço/app ou criar um client personalizado :smirk:
3. Uma pessoa em busca de um local para descartar seus resíduos especiais entra no app e encontra os pontos de coleta que deseja. Por baixo dos panos o app busca os dados dos pontos de coleta na nossa API pública.
4. A partir do app a pessoa pode escolher entrar em contato com o estabelecimento escolhido ou ir até lá para fazer o descarte.
5. O estabelecimento cuida para que o descarte seja feito adequadamente e o meio ambiente agradece :seedling: :evergreen_tree: :deciduous_tree:

## Aplicação Web

A aplicação web fornece uma interface gráfica amigável para registrar um novo ponto de coleta na base de dados do ecoleta.
Você pode acessar a aplicação web [clicando aqui](https://lucas-lm.github.io/ecoleta-web/), ou se preferir copiar a URL: https://lucas-lm.github.io/ecoleta-web/

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

## Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/) - Interpretador de JavaScript assíncrono
- [TypeScript](https://www.typescriptlang.org/) - Um superset do javascript com tipagem estática que compila para javascript limpo
- [ReactJS](https://reactjs.org/) - Uma biblioteca declarativa e flexível para criação de interfaces do usuário
- [Axios](https://github.com/axios/axios) - Cliente HTTP baseado em Promises para o Browser e NodeJS
- [React Dropzone](https://react-dropzone.js.org/) - Um simples componente de upload de arquivos do tipo arrasta e solta com ReactJS
- [Leaflet](https://leafletjs.com/) - Uma biblioteca open-source para mapas mobile-friendly interativos
- [React leaflet](https://github.com/PaulLeCam/react-leaflet) - Componentes React para o Leaflet

## Veja também

- Repositório da app nativo: https://github.com/lucas-lm/ecoleta-native
- Repositório da API: https://github.com/lucas-lm/ecoleta-api

## Autor

Feito com :heart: e :coffee: por:

[<img src="https://avatars3.githubusercontent.com/u/29049644?s=460&u=6fcf78abdf0e007afa9b2a31beaf686d79fa9173&v=4" width=115><br><sub>@lucas-lm</sub>](https://github.com/lucas-lm)
