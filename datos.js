const datos = {
  1: {
    nombre: "Vitrina 1",
    apartados: {
      1: {
        nombre: "Invertebrados",
        imagen: "img/invertebrados.jpg",
        cajones: {
          1: { nombre: "Moluscos", animales: { 
            1: { nombre: "Caracol", 
            info: `Un caracol es un nombre común para una especie de molusco. El término se usa para un gasterópodo con una carcasa enrollada. 
              Sus registros fósiles se extienden hacia el período carbonífero. El término 'caracol' también se usa a veces para gasterópodos acuáticos en forma de caracol, 
              que generalmente tienen branquias. En realidad, la mayoría de las especies de caracoles son caracoles marinos. Hay más especies de ellas, y son mucho mayores en el número. 
              También se pueden encontrar muchos tipos de caracoles en hábitats de agua dulce.La mayoría de los caracoles y las babosas son herbívoros. Los caracoles y babosas acuáticas suelen ser omnívoros o carnívoros depredadores.`, 
            imagen: "img/caracol.png",
            galeria: ["img/caracol2.jpg", "img/caracol3.jpg", "img/caracol4.jpg", "img/caracol5.jpg", "img/caracol6.jpg"] },
            2: { nombre: "Pulpo", 
            info: `El pulpo o Octopus vulgaris es un molusco cefalópodo (pies en la cabeza), octópodo (ocho pies), perteneciente a la familia Octopodiae. Vive en fondos rocosos en las zonas litorales, entre rocas y piedras y a veces en guaridas.
              Su dieta consiste principalmente en pequeños crustáceos como cangrejos, así como en bivalvos y peces.
              Es un animal que se mimetiza con su entorno, haciendo difícil verlo, incluso arruga su piel para hacer parecer una roca con algas y es capaz de esconderse en espacios 10 veces más pequeños que ellos debido a su flexibilidad.
              Su cuerpo presenta una apariencia robusta y musculosa, aunque relativamente pequeña en comparación con su cabeza, que está claramente definida. A diferencia de los cefalópodos decápodos, sepia y calamar, carece de pluma interna o concha.
              De la cabeza salen ocho brazos, situados alrededor de la boca, localizada en el centro, con un «pico» similar en forma al de un loro, que le permite capturar a sus presas.
              Los ocho brazos del pulpo son fuertes y cuentan con dos filas de ventosas pegajosas, están situados alrededor de la boca unidos entre sí por una membrana, siendo su primer par más corto que el resto, y estos últimos miden aproximadamente el doble que el cuerpo.`, 
            imagen: "img/pulpo.jpg",
            galeria: ["img/pulpo2.jpg", "img/pulpo3.jpg", "img/pulpo4.jpg", "img/pulpo5.jpg", "img/pulpo6.jpg"] }
          }
          },

          2: { nombre: "Artrópodos", animales: { 1: { nombre: "Araña", 
            info: `Las arañas están en todo nuestro planeta tierra, desde las selvas, pasando por los desiertos y polos hasta llegar a las grandes ciudades. 
              Las arañas son seres que poseen herramientas especiales para poder sobrevivir. Por eso es que ellas son tejedoras expertas, producen una sustancia especial que les permite 
              hacer telarañas grandes o pequeñas, sea para cazar sus presas, transportarse o para que sus huevos estén protegidos dentro de un saco que ella misma fabrica. 
              Las glándulas que están situadas en la parte superior de su abdomen controlan el líquido que se solidifica al estar en contacto con el aire convirtiéndose en la fibra pegajosa 
              con la que fabrica su tela. Las arañas tienen un tamaño pequeño, pero también las hay grandes. El color depende de la especie. Por ejemplo las exóticas, con sus colores son 
              brillantes; otras lo cambian como camuflaje de depredadores o dependiendo el lugar en el que se encuentren. La mayoría de arañas tienen un promedio de vida de un año. 
              Sin embargo, hay especies que pueden vivir alrededor de 8 o 10 años. Las tarántulas por ejemplo, pueden alcanzar los 30 años.`, 
            imagen: "img/arana.png",
            galeria: ["img/araña2.jpg", "img/araña3.jpg", "img/araña4.jpg", "img/araña5.jpg", "img/araña6.jpg"] } } 
          },

          3: { nombre: "Insectos", animales: { 1: { nombre: "Mariposa", 
            info: `Las mariposas, que son de algún modo los insectos más vistosos, llaman nuestra atención. Como tienen las alas cubiertas de escamas, 
              forman parte del orden de los lepidópteros, y este es uno de los primeros datos que debemos tener en cuenta para su clasificación.
              Colombia es el segundo país en biodiversidad en el mundo. Cuenta con el mayor número de mariposas diurnas del mundo (3.500 especies). 
              Estas se diferencian de las nocturnas por su forma y colores. Las mariposas diurnas vuelan mucho, y mientras lo hacen muestran sus vistosos colores. 
              En cambio, los colores de las nocturnas son más apagados y se camuflan muy fácil. Las mariposas diurnas descansan con las alas juntas, plegadas sobre el cuerpo, 
              que a su vez es delgado. Las mariposas nocturnas descansan con las alas planas encima del cuerpo. Son gruesas y a menudo su cuerpo está recubierto de pelo.`, 
            imagen: "img/mariposa.jpg",
            galeria: ["img/mariposa2.jpg", "img/mariposa3.jpg", "img/mariposa4.jpg", "img/mariposa5.jpg", "img/mariposa6.jpg"] } } 
          },
          4: { nombre: "Crustáceos", animales: { 1: { nombre: "Cangrejo", info: "Un cangrejo", imagen: "img/cangrejo.jpg"  } } },
          5: { nombre: "Otros", animales: { 1: { nombre: "Esponja", info: "..." } } }
        }
      },
      2: {
        nombre: "Anfibios",
        imagen: "img/anfibios.jpg",
        cajones: {
          1: { nombre: "Ranas", animales: { 1: { nombre: "Rana verde", 
            info: ` Las ranas verdes viven en cualquier lugar donde se encuentren estanques poco profundos de agua dulce, cunetas junto a carreteras, lagos, pantanos, arroyos 
              y riachuelos. Las ranas verdes pueden encontrarse en charcas vernales y otras masas de agua temporales, pero normalmente no se reproducen en ellas. Esta especie es 
              muy oportunista y no tarda en colonizar nuevas masas de agua, como piscinas y estanques artificiales. A menudo se les ve descansando en la orilla y saltan al agua 
              cuando se les acerca. Al habitar un ecotono, en este caso el límite del hábitat terrestre y acuático, las ranas verdes (y otras ranas acuáticas ránidas), mediante un 
              simple salto, dejan atrás a sus numerosos y más rápidos enemigos terrestres que no pueden cruzar de forma similar ese límite.`,
            imagen: "img/rana_verde.png",
            galeria: ["img/rana2.jpg", "img/rana3.jpg", "img/rana4.jpg", "img/rana5.jpg", "img/rana6.jpg"] } } 
          },
          2: { nombre: "Sapos", animales: { 1: { nombre: "Sapo común", 
            info: `Los sapos son unos anfibios muy comunes que se caracterizan por tener verrugas, una piel muy seca con unas glándulas que reciben el nombre de “parotoides” 
              Dichas glándulas producen un pequeño líquido que es venenoso y que sirve a estos animales como sistema de defensa de sus depredadores, que pueden ser serpientes, 
              mapaches o aves rapaces. Aunque los sapos sean animales de un tamaño bastante reducido, este veneno es muy potente y puede causar la muerte de muchos animales de 
              pequeño y mediano tamaño y a los humanos puede producirles algunas alergias. Pero los sapos no se defienden de sus enemigos solo con ese veneno llamado “bufotoxina”, 
              sino que también pueden inflar su cuerpo para parecer menos apetitosos o mezclarse y camuflarse en el entorno gracias a sus colores, casi siempre marrón o verde. 
              Sin embargo, también existen sapos de colores más brillantes, y ese brillo que tienen en su piel advierte a los enemigos de su peligrosidad: ¡son venenosos!`, 
            imagen: "img/sapo2.png",
            galeria: ["img/sapo2.jpg", "img/sapo3.jpg", "img/sapo4.jpg", "img/sapo5.jpg", "img/sapo6.jpg"] } } 
          },
          3: { nombre: "Salamandras", animales: { 1: { nombre: "Salamandra", 
            info: `Es un animal que se mueve lentamente, con un andar bastante torpe. Es capaz de regenerar rápidamente partes de su cuerpo heridas. En la naturaleza, la salamandra 
              puede vivir unos veinte años. ¡En cautividad, puede vivir hasta 50 años! La salamandra es un animal nocturno o crepuscular, que vive cerca de manantiales, arroyos, lagos, etc. 
              También hay que saber que la salamandra es un animal que hiberna, entre octubre y febrero aproximadamente. La hibernación tiene lugar principalmente bajo tierra, en pozos, 
              galerías subterráneas de mamíferos, antiguos túneles mineros; incluso es posible encontrar una salamandra en tu sótano. Como la salamandra no sabe nadar, debe adaptarse a 
              los cambios de nivel del agua para evitar ahogarse. Las salamandras adultas se alimentan principalmente de pequeños invertebrados, como cochinillas, escarabajos o algunas 
              especies de babosas.`,
            imagen: "img/salamandra.png",
            galeria: ["img/salamandra2.jpg", "img/salamandra3.jpg", "img/salamandra4.jpg", "img/salamandra5.jpg", "img/salamandra6.jpg"] } } 
          },
          4: { nombre: "Tritones", animales: { 1: { nombre: "Tritón", 
            info: `Los tritones reúnen una serie de características que hacen de este pequeño anfibio un animal de lo más interesante. Así, aunque parezcan bonitos e inofensivos, 
              pueden ser peligrosos. Las toxinas que segregan a través de la piel, como mecanismo de defensa, podrían matar a una persona. También pueden volverles a crecer miembros y 
              órganos perdidos. Esa capacidad los convierte en sujetos importantes en los estudios médicos sobre regeneración. Además, han volado en misiones espaciales. Veamos algunas 
              curiosidades de los tritones.`,
            imagen: "img/triton.png",
            galeria: ["img/triton2.jpg", "img/triton3.jpg", "img/triton4.jpg", "img/triton5.jpg", "img/triton6.jpg"] } } 
          },
          5: { nombre: "Otros", animales: { 1: { nombre: "Ajolote", 
            info: `El ajolote es un anfibio endémico de México, conocido por su aspecto único y su asombrosa capacidad de regenerar partes de su cuerpo, como extremidades, 
              cola, e incluso órganos internos. Su nombre proviene del náhuatl axolotl, que significa “monstruo del agua”. A diferencia de la mayoría de los anfibios, el ajolote 
              conserva durante toda su vida características juveniles, como las branquias externas plumosas que sobresalen de su cabeza. Este fenómeno, llamado neotenia, 
              le permite vivir permanentemente en el agua sin pasar por una metamorfosis completa.`,
            imagen: "img/azolote.png",
            galeria: ["img/ajolote2.jpg", "img/ajolote3.jpg", "img/ajolote4.jpg", "img/ajolote5.jpg", "img/ajolote6.jpg"] } } 
          }
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
        cajones: { 
          1:{nombre:"Peces Óseos", animales: { 1: { nombre: "Pez Loro", 
            info: `Los peces comunes son el grupo más grande de todos los vertebrados, juntando más de 27 mil especies, a las que pertenecen los peces que forman parte de la 
              alimentación humana, así como también los de ornato. Pero dentro de esta denominación hay otros peces sumamente importantes, que son los peces de aletas lobuladas, 
              en los que podemos ver la evolución en acción del paso del agua a la tierra. Ambos pertenecen a los peces osteíctios.`,
            imagen: "img/pez_loro.png" } } 
          },

          2:{nombre:"Peces Cartilaginosos", animales: { 1: { nombre: "TIburón Blanco",
            info: `El tiburón blanco es un tiburón grande, normalmente mide entre 500 y 580 cm, siendo las hembras mayores que los machos. Tiene forma fusiforme, con ojos negros, 
            hocico cónico y achatado. Sus dientes son grandes, triangulares y serrados. Su coloración es gris marronosa por la parte dorsal, más clara en los lados y blanca por la 
            parte ventral. La primera aleta dorsal es grande y triangular, la segunda y la anal son más pequeñas. La aleta caudal tiene forma semilunar. Delante de las aletas pectorales
            tiene las hendiduras branquiales que son largas.`,           
            imagen: "img/tiburon_blanco.jpg" } } 
          },

          3:{nombre:"Peces Agnatos", animales: {1: {nombre: "Lamprea", 
            info: `La lamprea o Petromyzon marinus es también llamada lamprea de mar, mientras que la lamprea de río es la Lampetra fluviatilis (otra especie más pequeña y mucho menos 
              frecuente). Pero ¿Qué es la lamprea? Es uno de los animales mas extraños del mundo acuático. Es un pez primitivo parecido a la anguila en su exterior, con un cuerpo gelatinos
              o sin escamas ni aletas y de forma cilíndrica. Son alargados y poco conocidos en general, aunque en ciertos lugares son considerados como auténticos manjares. Su origen se 
              remonta a más de 500 millones de años atrás, mucho antes que los dinosaurios. Pueden llegar a medir más de un metro y no poseen mandíbula sino una boca con forma de círculo 
              parecida a una ventosa (ciclóstomos: kyklos – círculo en griego y stoma – boca). Tienen además un esqueleto cartilaginoso y hendiduras branquiales.`,
            imagen: "img/lampera.jpg" } } 
          },

          4:{nombre:"Sarcopterigios", animales: {1: {nombre: "Celacanto", 
            info: `El celacanto es un pez bastante grande que vive en el fondo de algunas zonas marinas y que es bastante distinto a la mayoría de los peces que conocemos. 
            Pertenecen a una estirpe que apareció hace unos 360 millones de años. Los celacantos pueden medir hasta  los 2 metros de longitud y pesar 90 kilos. Están cubiertos 
            por escamas duras y se cree que pueden vivir hasta por lo menos sesenta años.`, 
            imagen: "img/celacanto.jpg" } } 
          },

          5:{nombre:"Actinopterigios", animales: {1: {nombre: "Salmon",
            info: `Los salmones son peces migratorios que pueden vivir en distintos entornos acuáticos a lo largo de su vida. Podemos encontrarlos de diferentes especies, como el 
              salmón chinook, el salmón coho o el salmón rosa, aunque todos tienen un ciclo de vida caracterizado por las migraciones, al igual que los atunes, por lo que probarán tanto 
              el agua salada como la dulce a lo largo de su existencia. Los salmones pertenecen a la llamada familia “Salmonidae”, y en concreto al género “Oncorhynchus”, y tienen un 
              ciclo reproductivo muy curioso que les lleva a poner sus huevos en ríos y arroyos de agua dulce, donde permanecen las crías hasta el término de su infancia, migrando de 
              nuevo hasta los océanos para poder alimentarse y seguir creciendo hasta su momento reproductivo, donde se inicia de nuevo el ciclo. Durante dicha reproducción, las hembras 
              dejan de alimentarse y tiran de reservas de energía acumuladas para llegar a destino y, una vez allí, excavan hoyos llamados “nidos” en zonas específicas del lecho de los 
              ríos y en ellos depositan los huevos fertilizados.`,
            imagen: "img/salmon.jpg" } } 
          }, 
        }
      },
      4: {
        nombre: "Aves",
        imagen: "img/aves.jpg",
        cajones: { 
          1:{nombre:"Rapaces", animales: { 1: {nombre: "Búho Real", 
            info: `El Bubo Bubo es el nombre científico que recibe el Búho Real, un ave rapaz nocturna muy conocida por su canto que puede ser identificado a kilómetros de distancia. 
              Es una especie de ave estrigiforme de la familia Strigidae, que sobresale por su majestuosidad. Lo más característico es su pecho blanco que deja al descubierto cada vez 
              que canta, especialmente cuando hay luna llena. Este tipo de búho es el ave rapaz nocturna más grande de Europa. Cuenta Penteriani que el búho real canta mucho con la luna 
              llena, como si ululara a la mancha blanca del cielo.`, 
            imagen: "img/búho_real.jpg" } } 
          },

          2:{nombre:"Corredoras", animales: { 1: {nombre: "Avestruz", 
            info: `Es el ave más grande del mundo, con los machos alcanzando hasta 2,40 metros de altura y un peso de 160 kg. Aunque sus antepasados tenían la capacidad de volar, 
              esta especie la perdió hace miles de años, adaptándose a la vida terrestre con una gran velocidad para correr. Gracias a sus poderosas patas, pueden alcanzar velocidades 
              de hasta 70 km/h en distancias cortas Viven en grupos mixtos de machos y hembras, excepto en la época de apareamiento, cuando se separan por sexos y comienzan los rituales 
              de cortejo. Son animales polígamos, y dentro de cada grupo, una hembra es la compañera principal del macho. Si éste intenta aparearse con otra, la hembra dominante puede 
              aceptar la elección o interponerse si no la considera adecuada.`, 
            imagen: "img/avestruz.jpg" } } 
          },

          3:{nombre:"Zancudas", animales: { 1: {nombre: "", info: ``, imagen: "" } } },

          4:{nombre:"Gallináceas", animales: { 1: {nombre: "", info: ``, imagen: "" } } },

          5:{nombre:"Acuáticas", animales: { 1: {nombre: "", info: ``, imagen: "" } } } 
        }
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
