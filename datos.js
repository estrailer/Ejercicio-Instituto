const datos = {
  1: {
    nombre: "Vitrina 1",
    apartados: {
      1: {
        nombre: "Invertebrados",
        imagen: "img/invertebrados.jpg",
        cajones: {
          1: { nombre: "Moluscos", animales: { 1: { nombre: "Caracol", 
            info: `Un caracol es un nombre común para una especie de molusco. El término se usa para un gasterópodo con una carcasa enrollada. 
              Sus registros fósiles se extienden hacia el período carbonífero. El término 'caracol' también se usa a veces para gasterópodos acuáticos en forma de caracol, 
              que generalmente tienen branquias. En realidad, la mayoría de las especies de caracoles son caracoles marinos. Hay más especies de ellas, y son mucho mayores en el número. 
              También se pueden encontrar muchos tipos de caracoles en hábitats de agua dulce.La mayoría de los caracoles y las babosas son herbívoros. Los caracoles y babosas acuáticas suelen ser omnívoros o carnívoros depredadores.`, 
            imagen: "img/caracol.png" },
            2: { nombre: "Pulpo", 
            info: `El pulpo o Octopus vulgaris es un molusco cefalópodo (pies en la cabeza), octópodo (ocho pies), perteneciente a la familia Octopodiae. Vive en fondos rocosos en las zonas litorales, entre rocas y piedras y a veces en guaridas.
              Su dieta consiste principalmente en pequeños crustáceos como cangrejos, así como en bivalvos y peces.
              Es un animal que se mimetiza con su entorno, haciendo difícil verlo, incluso arruga su piel para hacer parecer una roca con algas y es capaz de esconderse en espacios 10 veces más pequeños que ellos debido a su flexibilidad.
              Su cuerpo presenta una apariencia robusta y musculosa, aunque relativamente pequeña en comparación con su cabeza, que está claramente definida. A diferencia de los cefalópodos decápodos, sepia y calamar, carece de pluma interna o concha.
              De la cabeza salen ocho brazos, situados alrededor de la boca, localizada en el centro, con un «pico» similar en forma al de un loro, que le permite capturar a sus presas.
              Los ocho brazos del pulpo son fuertes y cuentan con dos filas de ventosas pegajosas, están situados alrededor de la boca unidos entre sí por una membrana, siendo su primer par más corto que el resto, y estos últimos miden aproximadamente el doble que el cuerpo.`, 
            imagen: "img/pulpo.jpg" } } },

          2: { nombre: "Artrópodos", animales: { 1: { nombre: "Araña", 
            info: `Las arañas están en todo nuestro planeta tierra, desde las selvas, pasando por los desiertos y polos hasta llegar a las grandes ciudades. 
              Las arañas son seres que poseen herramientas especiales para poder sobrevivir. Por eso es que ellas son tejedoras expertas, producen una sustancia especial que les permite 
              hacer telarañas grandes o pequeñas, sea para cazar sus presas, transportarse o para que sus huevos estén protegidos dentro de un saco que ella misma fabrica. 
              Las glándulas que están situadas en la parte superior de su abdomen controlan el líquido que se solidifica al estar en contacto con el aire convirtiéndose en la fibra pegajosa 
              con la que fabrica su tela. Las arañas tienen un tamaño pequeño, pero también las hay grandes. El color depende de la especie. Por ejemplo las exóticas, con sus colores son 
              brillantes; otras lo cambian como camuflaje de depredadores o dependiendo el lugar en el que se encuentren. La mayoría de arañas tienen un promedio de vida de un año. 
              Sin embargo, hay especies que pueden vivir alrededor de 8 o 10 años. Las tarántulas por ejemplo, pueden alcanzar los 30 años.`, 
            imagen: "img/arana.png" } } },

          3: { nombre: "Insectos", animales: { 1: { nombre: "Mariposa", 
            info: `Las mariposas, que son de algún modo los insectos más vistosos, llaman nuestra atención. Como tienen las alas cubiertas de escamas, 
              forman parte del orden de los lepidópteros, y este es uno de los primeros datos que debemos tener en cuenta para su clasificación.
              Colombia es el segundo país en biodiversidad en el mundo. Cuenta con el mayor número de mariposas diurnas del mundo (3.500 especies). 
              Estas se diferencian de las nocturnas por su forma y colores. Las mariposas diurnas vuelan mucho, y mientras lo hacen muestran sus vistosos colores. 
              En cambio, los colores de las nocturnas son más apagados y se camuflan muy fácil. Las mariposas diurnas descansan con las alas juntas, plegadas sobre el cuerpo, 
              que a su vez es delgado. Las mariposas nocturnas descansan con las alas planas encima del cuerpo. Son gruesas y a menudo su cuerpo está recubierto de pelo.`, 
            imagen: "img/mariposa.jpg" } } },
          4: { nombre: "Crustáceos", animales: { 1: { nombre: "Cangrejo", info: "..." } } },
          5: { nombre: "Otros", animales: { 1: { nombre: "Esponja", info: "..." } } }
        }
      },
      2: {
        nombre: "Anfibios",
        imagen: "img/anfibios.jpg",
        cajones: {
          1: { nombre: "Ranas", animales: { 1: { nombre: "Rana verde", info: "..." } } },
          2: { nombre: "Sapos", animales: { 1: { nombre: "Sapo común", info: "..." } } },
          3: { nombre: "Salamandras", animales: { 1: { nombre: "Salamandra", info: "..." } } },
          4: { nombre: "Tritones", animales: { 1: { nombre: "Tritón", info: "..." } } },
          5: { nombre: "Otros", animales: { 1: { nombre: "Ajolote", info: "..." } } }
        }
      }
    }
  },

  2: {
    nombre: "Vitrina 2",
    apartados: {
      3: {
        nombre: "Peces",
        imagen: "img/peces.jpg",
        cajones: { 1:{nombre:"1"},2:{nombre:"2"},3:{nombre:"3"},4:{nombre:"4"},5:{nombre:"5"} }
      },
      4: {
        nombre: "Aves",
        imagen: "img/aves.jpg",
        cajones: { 1:{nombre:"1"},2:{nombre:"2"},3:{nombre:"3"},4:{nombre:"4"},5:{nombre:"5"} }
      }
    }
  },

  3: {
    nombre: "Vitrina 3",
    apartados: {
      5: {
        nombre: "Reptiles",
        imagen: "img/reptiles.jpg",
        cajones: { 1:{},2:{},3:{},4:{},5:{} }
      },
      6: {
        nombre: "Mamíferos",
        imagen: "img/mamiferos.jpg",
        cajones: { 1:{},2:{},3:{},4:{},5:{} }
      }
    }
  },

  4: {
    nombre: "Vitrina 4",
    apartados: {
      7: {
        nombre: "Insectos",
        imagen: "img/insectos.jpg",
        cajones: { 1:{},2:{},3:{},4:{},5:{} }
      },
      8: {
        nombre: "Otros",
        imagen: "img/otros.jpg",
        cajones: { 1:{},2:{},3:{},4:{},5:{} }
      }
    }
  }
};
