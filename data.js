// Conteúdo do guia. Cada dia tem uma lista de locais (cartões).
// tipo: monumento | museu | bairro | comida | vista | transporte | dica
// mitos: lendas gregas ligadas ao local ({ titulo, texto, factos })
// extras: cartões opcionais mostrados em baixo do dia ("Extras na zona")
// maps: texto a pesquisar no Google Maps (se faltar, usa o nome)

const DIAS = [
  {
    id: "sab",
    data: "2026-10-03",
    curto: "Sáb 3",
    titulo: "Sábado, 3 de outubro",
    resumo: "Chegada às 16:55. Instalar, jantar perto do hotel e descansar.",
    locais: [
      {
        nome: "Chegada ao aeroporto",
        tipo: "transporte",
        hora: "16:55",
        linha: "Aeroporto Eleftherios Venizelos → centro",
        maps: "Athens International Airport Eleftherios Venizelos",
        factos: [
          "Metro linha 3 (azul) vai direto ao centro (Syntagma / Monastiraki) em cerca de 40 min.",
          "Autocarro X95 vai até Syntagma e funciona 24 horas por dia.",
          "Táxi tem tarifa fixa para o centro (diurna e noturna). Confirmar o valor com o motorista antes de entrar.",
          "Bilhete do aeroporto é diferente do bilhete normal de metro.",
          "O aeroporto abriu em 2001, a tempo dos Jogos Olímpicos de 2004, e substituiu o antigo aeroporto de Ellinikon, à beira-mar.",
          "Tem o nome de Eleftherios Venizelos, primeiro-ministro que modernizou a Grécia no início do séc. XX."
        ],
        mitos: [
          {
            titulo: "Dédalo e Ícaro",
            texto: "Dédalo, o génio ateniense que construiu o labirinto do Minotauro, ficou preso em Creta com o filho Ícaro. Fez asas de penas e cera para fugirem. Ícaro subiu demasiado, a cera derreteu e caiu ao mar.",
            factos: [
              "O mar onde caiu chama-se Mar Icário, perto da ilha de Icária.",
              "Dédalo era de Atenas, da família real de Erecteu."
            ]
          }
        ],
        dica: "O bilhete de 3 dias para turistas inclui uma viagem de ida e volta ao aeroporto. Pode compensar."
      },
      {
        nome: "Palavras úteis",
        tipo: "dica",
        linha: "Meia dúzia de palavras que abrem portas",
        semMapa: true,
        factos: [
          "Kaliméra (bom dia) · Kalispéra (boa tarde/noite)",
          "Yiá sas (olá / adeus) · Efharistó (obrigado)",
          "Parakaló (por favor / de nada) · Ne (sim!) · Óhi (não)",
          "To logariasmó, parakaló (a conta, por favor)",
          "«Yiá sas» quer dizer, à letra, «saúde para vós». Entre amigos diz-se só «yiá»."
        ],
        mitos: [
          {
            titulo: "Palavras que vêm dos mitos",
            texto: "Usamo-las todos os dias sem saber",
            factos: [
              "Pânico: de Pã, deus dos pastores, que assustava os viajantes com gritos.",
              "Eco: ninfa castigada a só repetir as últimas palavras dos outros.",
              "Narcisismo: Narciso apaixonou-se pelo próprio reflexo na água.",
              "Museu e música: das Musas, deusas das artes.",
              "Calcanhar de Aquiles, trabalho hercúleo, odisseia, cavalo de Troia, titânico."
            ]
          }
        ],
        dica: "Cuidado: «Ne» quer dizer SIM. É normal oferecerem água e uma sobremesa no fim da refeição."
      }
    ],
    extras: [
      {
        nome: "Areópago ao fim do dia",
        tipo: "vista",
        linha: "Rochedo junto à Acrópole, de acesso livre",
        maps: "Areopagus Hill Athens",
        historia: "A «colina de Ares» foi o tribunal mais antigo de Atenas. Diz o mito que foi aqui que os deuses julgaram Ares por ter matado um filho de Poseidon. Na época clássica, o conselho do Areópago, formado por antigos magistrados, reunia-se aqui para julgar os crimes de sangue.",
        factos: [
          "O apóstolo São Paulo pregou aqui aos atenienses por volta do ano 51. O discurso está gravado numa placa de bronze ao pé da escada.",
          "Vê-se a Acrópole de muito perto e a cidade toda à volta."
        ],
        mitos: [
          {
            titulo: "O julgamento de Orestes",
            texto: "Orestes matou a mãe, Clitemnestra, para vingar o pai, o rei Agamémnon. Perseguido pelas Fúrias, refugiou-se em Atenas. Atena juntou aqui doze cidadãos para o julgar: os votos empataram e ela desempatou a favor dele.",
            factos: [
              "É daqui que vem a expressão «voto de Minerva» (Minerva é o nome romano de Atena).",
              "As Fúrias foram acalmadas e passaram a ser veneradas numa gruta ao pé desta colina.",
              "A máscara de ouro «de Agamémnon» está no Museu Arqueológico (domingo)."
            ]
          }
        ],
        dica: "Se chegarem a tempo, o pôr do sol é por volta das 19h. A pedra é muito lisa e escorrega: cuidado com os sapatos."
      },
      {
        nome: "Primeiro jantar: salada grega",
        tipo: "comida",
        linha: "Horiatiki, a salada «da aldeia»",
        semMapa: true,
        historia: "A salada grega verdadeira não tem alface: é tomate, pepino, cebola roxa, pimento, azeitonas Kalamata e uma fatia inteira de feta por cima, com orégãos e azeite.",
        factos: [
          "O feta tem denominação de origem: só é feta se for feito na Grécia, com leite de ovelha (e até 30% de cabra).",
          "Molhem o pão no azeite que fica no fundo. Os gregos fazem isso!",
          "«Horiatiki» vem de «horió», aldeia."
        ]
      }
    ]
  },
  {
    id: "dom",
    data: "2026-10-04",
    curto: "Dom 4",
    titulo: "Domingo, 4 de outubro",
    resumo: "Atenas de Adriano, o estádio de mármore e o maior museu da Grécia.",
    locais: [
      {
        nome: "Templo de Zeus Olímpico",
        tipo: "monumento",
        linha: "O maior templo da Grécia antiga",
        maps: "Temple of Olympian Zeus Athens",
        historia: "Começado por volta de 520 a.C. pelos tiranos de Atenas, ficou parado durante séculos. Só o imperador romano Adriano o terminou, em 131 d.C., quase 650 anos depois. Os romanos admiravam tanto o projeto que o general Sula levou algumas colunas para Roma, para o Templo de Júpiter no Capitólio.",
        factos: [
          "Tinha 104 colunas coríntias com cerca de 17 m de altura. Hoje restam 15 de pé.",
          "Uma 16.ª coluna caiu numa tempestade em 1852 e continua deitada no chão, em pedaços.",
          "Lá dentro havia uma estátua gigante de Zeus em ouro e marfim.",
          "Os atenienses encheram o recinto de estátuas de Adriano, em agradecimento.",
          "Dizia-se que o santuário estava sobre a fenda por onde escoaram as águas do dilúvio de Deucalião, o «Noé» grego."
        ],
        mitos: [
          {
            titulo: "Cronos e a pedra",
            texto: "O titã Cronos sabia que um filho o ia destronar, por isso engolia cada bebé que nascia. A mulher, Reia, escondeu Zeus em Creta e deu a Cronos uma pedra embrulhada em panos. Ele engoliu-a sem reparar.",
            factos: [
              "Já adulto, Zeus obrigou o pai a vomitar os irmãos: Hera, Poseidon, Hades, Deméter e Héstia.",
              "Seguiram-se 10 anos de guerra entre deuses e titãs, a Titanomaquia.",
              "O Templo de Zeus Olímpico, em Atenas, foi dedicado a ele como vencedor."
            ]
          }
        ],
        dica: "Daqui vê-se a Acrópole ao fundo. Bom sítio para a primeira foto da viagem."
      },
      {
        nome: "Arco de Adriano",
        tipo: "monumento",
        linha: "A porta entre a Atenas antiga e a romana",
        maps: "Arch of Hadrian Athens",
        historia: "Construído em 131 d.C. pelos atenienses em honra de Adriano, marcava a fronteira entre a cidade antiga e o novo bairro romano. Ficava sobre a estrada antiga que ia do centro da cidade até ao recinto do Templo de Zeus.",
        factos: [
          "Do lado da Acrópole diz: «Esta é Atenas, a antiga cidade de Teseu».",
          "Do outro lado: «Esta é a cidade de Adriano e não de Teseu».",
          "Tem cerca de 18 m de altura e é de mármore pentélico, o mesmo do Parthenon.",
          "Nunca teve portas: era um arco simbólico, não uma entrada fortificada."
        ],
        mitos: [
          {
            titulo: "Teseu, o rei de Atenas",
            texto: "Teseu cresceu longe do pai, o rei Egeu. Já crescido, levantou uma pedra enorme e encontrou a espada e as sandálias que Egeu lá tinha escondido. A caminho de Atenas derrotou vários bandidos, como Procrustes, que esticava ou cortava os viajantes à medida da sua cama.",
            factos: [
              "Como rei, juntou as aldeias da Ática numa só cidade. Por isso os atenienses viam-no como fundador, e o arco chama a Atenas «a cidade de Teseu».",
              "A história continua no Cabo Súnio (quarta-feira)."
            ]
          }
        ],
        dica: "Fica mesmo ao lado do Templo de Zeus e é de acesso livre."
      },
      {
        nome: "Estádio Panatenaico",
        tipo: "monumento",
        linha: "O único estádio do mundo todo em mármore",
        maps: "Panathenaic Stadium Athens",
        historia: "Construído em 330 a.C. para os Jogos Panatenaicos e refeito em mármore pelo rico Herodes Ático no séc. II. Foi restaurado para acolher os primeiros Jogos Olímpicos modernos, em 1896. Com o fim do mundo antigo ficou soterrado e o mármore foi levado para fazer cal. Foi escavado e reconstruído no séc. XIX com o dinheiro do benfeitor Georgios Averof, que tem estátua à entrada.",
        factos: [
          "Também é conhecido por «Kallimármaro» (mármore bonito).",
          "Leva cerca de 50 000 pessoas sentadas.",
          "É aqui que a chama olímpica é entregue ao país anfitrião de cada Olimpíada.",
          "Foi a meta da maratona nos Jogos de 2004.",
          "A pista tem a forma de um gancho de cabelo, comprida e estreita, como nos estádios antigos.",
          "Em 1896 o grego Spyridon Louis, um aguadeiro, ganhou aqui a primeira maratona olímpica perante dezenas de milhares de pessoas."
        ],
        mitos: [
          {
            titulo: "Prometeu e o fogo",
            texto: "Prometeu roubou o fogo aos deuses e deu-o aos humanos. Como castigo, Zeus acorrentou-o a um rochedo, onde uma águia lhe comia o fígado todos os dias. O fígado voltava a crescer todas as noites.",
            factos: [
              "Foi libertado séculos depois por Héracles (Hércules).",
              "A chama olímpica, acesa em Olímpia com os raios do sol, lembra este mito. É entregue no Estádio Panatenaico.",
              "Em Atenas havia corridas de tochas em honra de Prometeu, que partiam do altar dele na Academia de Platão."
            ]
          }
        ],
        dica: "O bilhete inclui audioguia. Subam à última fila para a vista e vejam o pequeno museu de tochas olímpicas no túnel."
      },
      {
        nome: "Almoço em Koukaki",
        tipo: "comida",
        linha: "Bairro local e descontraído, junto à Acrópole",
        maps: "Koukaki Athens",
        historia: "Bairro residencial ao sul da Acrópole que nos últimos anos se encheu de cafés e tavernas, sem perder o ar de bairro.",
        factos: [
          "A rua pedonal Drakou é o centro da vida do bairro, com esplanadas.",
          "Fica a 10 min a pé do Templo de Zeus.",
          "Muitos prédios são «polykatoikies» dos anos 1930 a 1960, com varandas corridas e toldos.",
          "Na antiga fábrica de cerveja Fix, na avenida Syngrou, está o Museu Nacional de Arte Contemporânea."
        ],
        dica: "Boa escolha se quiserem algo descontraído e mais barato."
      },
      {
        nome: "…ou almoço em Kolonaki",
        tipo: "comida",
        linha: "O bairro chique, a caminho do museu",
        maps: "Kolonaki Square Athens",
        historia: "Bairro elegante aos pés do Monte Licabeto, com embaixadas, lojas de marca e cafés da moda. Tem o nome de uma pequena coluna antiga («kolonaki») na praça.",
        factos: [
          "Fica entre o Estádio e o Museu Arqueológico, por isso encaixa melhor no percurso.",
          "A Praça Kolonaki é o ponto de encontro do bairro.",
          "É aqui, na rua Aristippou, que começa o funicular do Monte Licabeto."
        ],
        dica: "Mais caro que Koukaki, mas poupa caminho para a tarde."
      },
      {
        nome: "Museu Arqueológico Nacional",
        tipo: "museu",
        linha: "O maior museu da Grécia",
        maps: "National Archaeological Museum Athens",
        historia: "Fundado em 1829 e instalado neste edifício neoclássico desde o fim do séc. XIX. Guarda peças de toda a Grécia antiga, da pré-história até à época romana. O edifício foi desenhado por Ludwig Lange e Ernst Ziller. Na Segunda Guerra Mundial as peças foram enterradas em caixas para não serem roubadas nem destruídas.",
        factos: [
          "Máscara de Agamémnon: máscara funerária de ouro de Micenas (séc. XVI a.C.), encontrada por Schliemann em 1876.",
          "Mecanismo de Anticítera: engrenagem de bronze do séc. II a.C., chamada «o primeiro computador» porque previa eclipses.",
          "Bronze do Cabo Artemísio: Zeus (ou Poseidon) de braços abertos, por volta de 460 a.C., resgatado do mar.",
          "Jóquei do Artemísio: um rapaz num cavalo a galope, também tirado do fundo do mar.",
          "Frescos de Akrotiri, em Santorini, com pescadores, boxeadores e macacos azuis, salvos por uma erupção como Pompeia.",
          "O Kouros de Súnio, estátua de um rapaz com mais de 3 m, veio do templo que vão ver na quarta-feira."
        ],
        mitos: [
          {
            titulo: "A caixa de Pandora",
            texto: "Para castigar os humanos pelo fogo, Zeus criou Pandora, a primeira mulher, e deu-lhe um jarro fechado. Ela abriu-o por curiosidade e soltou todos os males do mundo. Só a esperança ficou lá dentro.",
            factos: [
              "No grego original é um «pithos», um jarro grande. A «caixa» vem de um erro de tradução do séc. XVI.",
              "No Museu Arqueológico há pithoi enormes, do tamanho de uma pessoa."
            ]
          },
          {
            titulo: "Medusa e Perseu",
            texto: "Medusa tinha serpentes em vez de cabelo e quem a olhasse virava pedra. Perseu cortou-lhe a cabeça olhando só para o reflexo no escudo polido que Atena lhe emprestou.",
            factos: [
              "Perseu ofereceu a cabeça a Atena, que a pôs no escudo (a égide).",
              "Por isso a cabeça de Medusa aparece em tantas peças nos museus, para afastar o mal."
            ]
          }
        ],
        dica: "Precisam de 2 a 3 horas. Se o tempo for curto, vão direto a estas quatro peças. Confirmar horário de domingo."
      },
      {
        nome: "Jantar em Psyri: mezedes",
        tipo: "comida",
        linha: "Pratinhos para partilhar, com ouzo ou tsipouro",
        maps: "Psyri Athens",
        historia: "Psyri era o bairro dos artesãos e curtidores de peles. Hoje é um dos sítios mais animados à noite, com arte urbana e tavernas com música. No séc. XIX tinha fama de bairro de rufias, os «koutsavakides», de bigode farto e casaco vestido num só braço.",
        factos: [
          "Mezedes são pequenos pratos para partilhar, como petiscos.",
          "Clássicos: tzatziki, saganaki (queijo frito), keftedes (almôndegas), dolmades, lulas fritas e fava.",
          "Acompanham com ouzo ou tsipouro, com água e gelo (fica branco).",
          "As paredes estão cheias de arte urbana: vale a pena andar de olhos no ar."
        ],
        dica: "Peçam vários pratos para o centro da mesa e vão pedindo mais. A Praça Iroon é o centro do bairro."
      }
    ],
    extras: [
      {
        nome: "Trilogia Neoclássica",
        tipo: "monumento",
        linha: "Academia, Universidade e Biblioteca, lado a lado",
        maps: "Academy of Athens",
        historia: "Três edifícios do séc. XIX na rua Panepistimiou, a caminho do Museu Arqueológico. Foram desenhados por dois irmãos dinamarqueses, Christian e Theophil Hansen, para mostrar que a Grécia moderna era herdeira da antiga.",
        factos: [
          "À frente da Academia há duas colunas altas com Atena e Apolo no topo.",
          "Sentados na escadaria estão Platão e Sócrates em mármore.",
          "A Academia tem o nome da escola de Platão, fundada em Atenas por volta de 387 a.C.",
          "A Biblioteca Nacional tem uma escadaria dupla curva à entrada e guarda manuscritos bizantinos.",
          "A Academia de Platão tinha o nome do herói Akademos que, segundo a lenda, revelou onde Teseu tinha escondido a jovem Helena (a de Troia)."
        ],
        dica: "Ficam no caminho entre Kolonaki/Syntagma e o museu. Vale a pena ver por fora."
      },
      {
        nome: "Museu de Arte Cicládica",
        tipo: "museu",
        linha: "As figuras brancas que inspiraram Picasso",
        maps: "Museum of Cycladic Art Athens",
        historia: "Em Kolonaki. Mostra figuras de mármore das ilhas Cíclades com mais de 4 500 anos: rostos lisos, braços cruzados, formas muito simples.",
        factos: [
          "Pareciam tão modernas que influenciaram artistas do séc. XX como Picasso, Modigliani e Brâncuși.",
          "Ninguém sabe ao certo para que serviam. Muitas foram encontradas em túmulos.",
          "É pequeno: uma hora chega.",
          "Nasceu da coleção da família Goulandris e abriu em 1986."
        ],
        dica: "Boa alternativa se o Museu Arqueológico for demasiado grande ou estiver cheio."
      }
    ]
  },
  {
    id: "seg",
    data: "2026-10-05",
    curto: "Seg 5",
    titulo: "Segunda, 5 de outubro",
    resumo: "O coração da Atenas antiga, os Evzones e o pôr do sol no Licabeto.",
    locais: [
      {
        nome: "Ágora Antiga",
        tipo: "monumento",
        linha: "Onde nasceu a democracia",
        maps: "Ancient Agora of Athens",
        historia: "Era a praça central da Atenas clássica: mercado, tribunal, assembleia e ponto de encontro. Sócrates passava aqui os dias a fazer perguntas aos atenienses. Foi destruída várias vezes, pelos persas, pelos romanos e pelos hérulos (267 d.C.), e acabou coberta por casas. As escavações começaram em 1931 e obrigaram a demolir centenas de casas do bairro.",
        factos: [
          "A Stoa de Átalo, uma galeria de 115 m, foi reconstruída nos anos 1950 e hoje é o museu da Ágora.",
          "A Via Panatenaica atravessa a Ágora e sobe até à Acrópole.",
          "No museu há boletins de voto antigos (ostraka) usados para expulsar políticos da cidade.",
          "Foi num tribunal da Ágora que Sócrates foi condenado à morte em 399 a.C., acusado de corromper os jovens. Bebeu cicuta.",
          "No museu há um relógio de água (klepsydra) usado para cronometrar os discursos nos tribunais.",
          "Na Stoa Pintada ensinava o filósofo Zenão. Os alunos ficaram conhecidos por «estoicos», de «stoa»."
        ],
        dica: "O Templo de Hefesto fica dentro da Ágora, com o mesmo bilhete."
      },
      {
        nome: "Templo de Hefesto",
        tipo: "monumento",
        linha: "O templo grego mais bem conservado",
        maps: "Temple of Hephaestus Athens",
        historia: "Construído por volta de 450 a.C., na mesma época do Parthenon, em honra de Hefesto, deus do fogo e dos ferreiros. Sobreviveu inteiro porque foi usado como igreja até 1834. Era também dedicado a Atena Ergane, protetora dos artesãos. Na igreja foram enterrados no séc. XIX vários protestantes ingleses, incluindo voluntários que lutaram pela independência grega.",
        factos: [
          "Também lhe chamam «Theseion» porque os relevos mostram feitos de Teseu. Daí o nome do bairro Thissio.",
          "Mantém o telhado e todas as colunas, coisa rara.",
          "À volta havia oficinas de bronze e cerâmica.",
          "Os arqueólogos encontraram buracos para vasos à volta do templo: tinha um jardim."
        ],
        mitos: [
          {
            titulo: "Hefesto, o deus coxo",
            texto: "Foi atirado do Olimpo (por Hera ou por Zeus, depende da versão) e ficou coxo. Mesmo assim casou com Afrodite, a mais bela das deusas, que o traía com Ares.",
            factos: [
              "Apanhou os dois amantes com uma rede invisível de bronze e chamou os deuses todos para se rirem deles.",
              "Fez os raios de Zeus, o capacete de Hermes e a armadura de Aquiles.",
              "Os atenienses diziam que Erictónio, um dos primeiros reis de Atenas, era filho de Hefesto, nascido da própria terra da Ática."
            ]
          }
        ],
        dica: "Subam à pequena colina. A vista para a Acrópole a partir daqui é das melhores."
      },
      {
        nome: "Ágora Romana",
        tipo: "monumento",
        linha: "O mercado da Atenas romana",
        maps: "Roman Agora Athens",
        historia: "Construída no séc. I a.C. com dinheiro de Júlio César e de Augusto. Quando a Ágora Antiga ficou pequena, o comércio mudou-se para aqui. Era um grande pátio retangular rodeado de colunas, com lojas à volta.",
        factos: [
          "A entrada principal é a Porta de Atena Arquegetis, ainda de pé.",
          "Lá dentro está a Mesquita Fethiye, do período otomano.",
          "A Torre dos Ventos está no mesmo recinto.",
          "Junto à porta há uma lei de Adriano gravada na pedra, com regras para a venda de azeite."
        ]
      },
      {
        nome: "Torre dos Ventos",
        tipo: "monumento",
        linha: "A primeira estação meteorológica do mundo",
        maps: "Tower of the Winds Athens",
        historia: "Torre de mármore do séc. I a.C., desenhada pelo astrónomo Andrónico de Cirro. Servia de relógio e de cata-vento para a cidade. Na época otomana foi usada por dervixes como sala de oração e dança.",
        factos: [
          "Tem 8 lados, cada um com o relevo de um dos 8 ventos.",
          "Tinha relógios de sol por fora e um relógio de água (clepsidra) por dentro.",
          "No topo havia um Tritão de bronze que rodava com o vento."
        ],
        mitos: [
          {
            titulo: "Bóreas e Orítia",
            texto: "Bóreas, o vento frio do norte, apaixonou-se por Orítia, filha de Erecteu, rei de Atenas. Como o rei não deixava, Bóreas raptou-a junto ao rio Ilisso e levou-a para a Trácia.",
            factos: [
              "Por ser «genro» de Atenas, os atenienses pediram-lhe ajuda contra os persas. Quando uma tempestade afundou navios persas em 480 a.C., fizeram-lhe um santuário junto ao Ilisso.",
              "Na torre, Bóreas é o velho barbudo e bem agasalhado, a soprar uma concha."
            ]
          }
        ],
        dica: "Procurem nas paredes as linhas dos relógios de sol, ainda visíveis."
      },
      {
        nome: "Almoço: gyros em Monastiraki",
        tipo: "comida",
        linha: "O clássico rápido e barato",
        maps: "Mitropoleos street souvlaki Monastiraki",
        historia: "Gyros é carne assada num espeto vertical a rodar, cortada às fatias e enrolada em pão pita com tzatziki, tomate, cebola e batata frita.",
        factos: [
          "«Gyros» vem do grego «girar».",
          "Tradicionalmente é de porco, mas também há de frango.",
          "A rua Mitropoleos, junto à praça, está cheia de casas de souvlaki e gyros.",
          "Veio com os refugiados gregos da Ásia Menor, depois de 1922, e tornou-se popular nos anos 1970."
        ],
        dica: "Peçam «gyros pita» para levar na mão ou «merida» para um prato completo."
      },
      {
        nome: "Praça Syntagma",
        tipo: "monumento",
        linha: "A praça da Constituição",
        maps: "Syntagma Square Athens",
        historia: "«Syntagma» significa Constituição. O nome vem de 1843, quando o povo e o exército se juntaram aqui e obrigaram o rei Otão a dar ao país a primeira constituição. Otão era um príncipe bávaro, escolhido em 1832 pelas grandes potências para primeiro rei da Grécia independente, com apenas 17 anos.",
        factos: [
          "O Parlamento grego está no antigo Palácio Real, terminado em 1843.",
          "Em frente fica o Túmulo do Soldado Desconhecido, guardado pelos Evzones.",
          "É o centro da cidade e ponto de partida de muitas manifestações.",
          "Na estação de metro há uma exposição de achados encontrados durante as obras, incluindo um túmulo."
        ]
      },
      {
        nome: "Troca da Guarda dos Evzones",
        tipo: "dica",
        hora: "a cada hora certa",
        linha: "A guarda presidencial de saia e pompons",
        maps: "Tomb of the Unknown Soldier Athens",
        historia: "Os Evzones são a guarda de elite que vigia o Túmulo do Soldado Desconhecido dia e noite. Trocam de turno a cada hora, num ritual lento e muito preciso. O uniforme vem dos klephts, guerrilheiros das montanhas que lutaram contra os otomanos.",
        factos: [
          "A saia (fustanela) tem 400 pregas, uma por cada ano de ocupação otomana.",
          "Os sapatos (tsarouchia) têm pregos na sola e pesam cerca de 3 kg o par.",
          "Os movimentos lentos ajudam o sangue a circular depois de uma hora imóveis.",
          "Ao domingo às 11h há uma cerimónia maior, com banda.",
          "«Evzone» quer dizer «bem cingido»."
        ],
        dica: "Cheguem 10 min antes da hora certa para ficar à frente."
      },
      {
        nome: "Jardins Nacionais",
        tipo: "vista",
        linha: "Sombra e calma no centro da cidade",
        maps: "National Garden Athens",
        historia: "Mandados criar pela rainha Amália por volta de 1840 como jardim do palácio real. Abriram ao público em 1923. Durante muito tempo chamaram-lhe Jardim Real.",
        factos: [
          "Têm cerca de 15 hectares, com centenas de espécies de plantas de todo o mundo.",
          "Há lagos com patos e tartarugas e algumas ruínas romanas.",
          "Ao lado fica o Zappeion, um palácio neoclássico de 1888.",
          "Há um pequeno jardim zoológico e um parque infantil."
        ],
        dica: "Entrada livre. Fecha ao pôr do sol."
      },
      {
        nome: "Monte Licabeto",
        tipo: "vista",
        hora: "pôr do sol ~19h",
        linha: "O ponto mais alto do centro de Atenas",
        maps: "Mount Lycabettus",
        historia: "No topo, a 277 m, está a capela branca de São Jorge. Durante séculos foi um monte de pinheiros e pastores fora da cidade. O nome pode vir de «lykos», lobo, porque se dizia que havia lobos.",
        factos: [
          "A vista de 360° vai da Acrópole até ao porto do Pireu e ao mar.",
          "Há um funicular que sobe por dentro da montanha a partir de Kolonaki.",
          "A pé, a subida demora cerca de 30 min.",
          "Junto ao topo há um café-restaurante com esplanada e, do lado nascente, um teatro ao ar livre para concertos de verão."
        ],
        mitos: [
          {
            titulo: "O rochedo que Atena deixou cair",
            texto: "Atena levava das montanhas um rochedo enorme para reforçar a Acrópole. No caminho, uma gralha veio dizer-lhe que as filhas do rei Cécrope tinham aberto uma cesta que ela lhes proibira de abrir. Furiosa, Atena largou o rochedo aqui. Assim nasceu o Licabeto.",
            factos: [
              "Na cesta estava o bebé Erictónio, filho de Hefesto e futuro rei de Atenas.",
              "Pela má notícia, Atena proibiu as gralhas de voltarem à Acrópole."
            ]
          }
        ],
        dica: "Cheguem 30 min antes do pôr do sol para apanhar lugar. Confirmar se o funicular está a funcionar."
      }
    ],
    extras: [
      {
        nome: "Biblioteca de Adriano",
        tipo: "monumento",
        linha: "Ruínas romanas mesmo em Monastiraki",
        maps: "Hadrian's Library Athens",
        historia: "Construída por Adriano em 132 d.C. Era um grande pátio com jardim e lago, rodeado de colunas, com salas para guardar rolos de papiro e para leitura.",
        factos: [
          "A fachada com colunas coríntias vê-se da própria Praça Monastiraki.",
          "Lá dentro há restos de três igrejas construídas umas sobre as outras ao longo dos séculos.",
          "O viajante Pausânias (séc. II) fala de 100 colunas e de tetos dourados."
        ],
        dica: "Fica entre a Ágora Romana e a Praça Monastiraki: é só espreitar ao passar."
      },
      {
        nome: "Pequena Metrópole",
        tipo: "monumento",
        linha: "A igreja feita de pedaços de templos",
        maps: "Panagia Gorgoepikoos Athens",
        historia: "Igreja bizantina minúscula (séc. XII) ao lado da grande Catedral de Atenas. Foi construída com pedras reaproveitadas de monumentos antigos. É dedicada à Virgem «Gorgoepikoos», «a que ouve depressa».",
        factos: [
          "Nas paredes há relevos antigos e cristãos misturados, incluindo um calendário grego com os meses e as festas.",
          "A Catedral ao lado (Mitrópoli) é onde se fazem os grandes funerais e casamentos do país."
        ],
        dica: "Fica na Praça Mitropoleos, a meio caminho entre Monastiraki e Syntagma."
      },
      {
        nome: "Zappeion",
        tipo: "monumento",
        linha: "O palácio das primeiras Olimpíadas modernas",
        maps: "Zappeion Athens",
        historia: "Construído para ressuscitar os Jogos Olímpicos, com dinheiro dos primos Zappas, e inaugurado em 1888. Nos Jogos de 1896 foi a sala de esgrima.",
        factos: [
          "Em 1979 assinou-se aqui a adesão da Grécia à Comunidade Europeia.",
          "O pátio circular com colunas está aberto e é de entrada livre.",
          "É considerado o primeiro edifício do mundo construído de propósito para os Jogos Olímpicos."
        ],
        dica: "Fica na ponta sul dos Jardins Nacionais, a caminho do Templo de Zeus."
      }
    ]
  },
  {
    id: "ter",
    data: "2026-10-06",
    curto: "Ter 6",
    titulo: "Terça, 6 de outubro",
    resumo: "Acrópole logo às 8h, almoço em Plaka, Museu da Acrópole e noite em Monastiraki.",
    locais: [
      {
        nome: "Acrópole",
        tipo: "monumento",
        hora: "8:00",
        linha: "A «cidade alta» e símbolo da Grécia",
        maps: "Acropolis of Athens",
        historia: "Rochedo de cerca de 150 m habitado desde a pré-história. Depois de os persas a destruírem em 480 a.C., Péricles mandou reconstruí-la com os templos que vemos hoje. Antes de ser só um recinto sagrado foi fortaleza e palácio micénico: ainda se vêem pedaços dessas muralhas com mais de 3 000 anos.",
        factos: [
          "Entra-se pelos Propileus, a porta monumental construída entre 437 e 432 a.C.",
          "É Património Mundial da UNESCO desde 1987.",
          "Os blocos com que tropeçam no chão estão numerados para o restauro.",
          "As obras de Péricles foram pagas com o tesouro da Liga de Delos, dinheiro das cidades aliadas para a defesa contra os persas. Os aliados não gostaram nada.",
          "Em 1941, logo depois de os nazis ocuparem Atenas, dois jovens, Manolis Glezos e Apostolos Santas, subiram de noite e arrancaram a bandeira com a suástica."
        ],
        dica: "Ir às 8h evita as filas e o calor. O bilhete é com hora marcada: comprem online antes. Levem água e sapatos que agarrem (o mármore escorrega)."
      },
      {
        nome: "Parthenon",
        tipo: "monumento",
        linha: "O templo mais famoso do mundo",
        maps: "Parthenon Athens",
        historia: "Construído entre 447 e 438 a.C. em honra de Atena Pártenos (a virgem), protetora da cidade. Os arquitetos foram Ictino e Calícrates, e as esculturas foram dirigidas por Fídias. Era também o cofre da cidade: lá dentro guardava-se o tesouro de Atenas.",
        factos: [
          "Não tem linhas retas: as colunas incham ligeiramente e o chão curva para parecer perfeito à distância.",
          "Foi igreja, mesquita e depósito de pólvora. Em 1687 uma bala veneziana fê-lo explodir.",
          "Grande parte das esculturas está no British Museum, em Londres (os «mármores de Elgin»).",
          "Lá dentro havia uma estátua de Atena com cerca de 12 m, em ouro e marfim.",
          "Usaram-se cerca de 100 000 toneladas de mármore do monte Pentélico, a 16 km."
        ],
        mitos: [
          {
            titulo: "Atena nasce da cabeça de Zeus",
            texto: "Zeus engoliu a primeira mulher, Métis, com medo de uma profecia. Começou a ter dores de cabeça terríveis. Hefesto abriu-lhe a cabeça com um machado e de lá saiu Atena, adulta, armada e a gritar.",
            factos: [
              "Esta cena estava no frontão leste do Parthenon, o da entrada.",
              "O símbolo de Atena é a coruja, sinal de sabedoria.",
              "Procurem nas moedas de 1 € gregas: têm a coruja das moedas da Atenas antiga."
            ]
          }
        ]
      },
      {
        nome: "Erecteion e as Cariátides",
        tipo: "monumento",
        linha: "O templo das seis mulheres-coluna",
        maps: "Erechtheion Athens",
        historia: "Construído entre 421 e 406 a.C., em plena guerra contra Esparta, no sítio mais sagrado da Acrópole. Juntava vários cultos antigos num só edifício, por isso tem uma planta estranha, em vários níveis.",
        factos: [
          "O Pórtico das Cariátides tem seis figuras femininas que servem de colunas.",
          "As que estão no templo são cópias. Cinco originais estão no Museu da Acrópole e a sexta no British Museum.",
          "Ao lado há uma oliveira, plantada em memória da de Atena.",
          "No pórtico norte há marcas na rocha que se dizia serem do tridente de Poseidon."
        ],
        mitos: [
          {
            titulo: "Atena contra Poseidon",
            texto: "Os dois deuses quiseram ser patronos da cidade. Poseidon bateu com o tridente na rocha e fez brotar uma fonte, mas de água salgada. Atena fez nascer uma oliveira. Os cidadãos escolheram a oliveira, e a cidade ficou com o nome dela.",
            factos: [
              "Diz uma versão que os homens votaram em Poseidon e as mulheres em Atena, que ganhou por um voto. Furioso, Poseidon inundou a Ática.",
              "O frontão oeste do Parthenon mostrava esta disputa."
            ]
          }
        ]
      },
      {
        nome: "Templo de Atena Nike",
        tipo: "monumento",
        linha: "O pequeno templo da vitória",
        maps: "Temple of Athena Nike",
        historia: "Pequeno templo jónico de cerca de 420 a.C., à direita dos Propileus, dedicado a Atena como deusa da vitória. Foi construído em plena guerra contra Esparta, como um pedido de vitória.",
        factos: [
          "A estátua de Atena não tinha asas, para que a vitória nunca pudesse fugir de Atenas.",
          "Os otomanos desmontaram-no em 1686 para usar as pedras num bastião. Foi remontado peça a peça em 1835.",
          "O parapeito tinha relevos de Vitórias aladas. A mais famosa, a «Nike a apertar a sandália», está no Museu da Acrópole.",
          "Segundo outra versão do mito, foi deste bastião, e não do Cabo Súnio, que o rei Egeu se atirou ao ver as velas negras de Teseu."
        ]
      },
      {
        nome: "Teatro de Dionísio",
        tipo: "monumento",
        linha: "O berço do teatro",
        maps: "Theatre of Dionysus Athens",
        historia: "Na encosta sul da Acrópole, era aqui que se estreavam as tragédias de Ésquilo, Sófocles e Eurípides e as comédias de Aristófanes, nas festas em honra de Dionísio. No início o público sentava-se na encosta. As bancadas de pedra são do séc. IV a.C., do tempo do político Licurgo.",
        factos: [
          "Chegou a ter lugar para cerca de 17 000 espectadores.",
          "Na fila da frente há cadeiras de mármore com os nomes dos sacerdotes gravados.",
          "Mais à frente, na mesma encosta, está o Odeon de Herodes Ático (161 d.C.), ainda usado para concertos.",
          "Os atores eram todos homens e usavam máscaras, também para fazer de mulher."
        ],
        mitos: [
          {
            titulo: "Dionísio, o que nasceu duas vezes",
            texto: "Sémele, uma mortal amada por Zeus, pediu para o ver em toda a sua glória e morreu fulminada pelos raios. Zeus salvou o bebé e coseu-o na própria coxa até estar pronto para nascer.",
            factos: [
              "Dionísio é o deus do vinho, das festas e do teatro.",
              "Nas Grandes Dionísias, na primavera, os autores competiam com as suas peças durante vários dias."
            ]
          }
        ],
        dica: "Está incluído no bilhete da Acrópole. A saída pela encosta sul leva direto ao Museu da Acrópole."
      },
      {
        nome: "Almoço em Plaka",
        tipo: "bairro",
        linha: "O bairro mais antigo de Atenas",
        maps: "Plaka Athens",
        historia: "Ruelas na encosta da Acrópole com casas neoclássicas, escadinhas e buganvílias. É habitado sem interrupção há milénios e chamam-lhe o «bairro dos deuses». Na época otomana era aqui que vivia quase toda a população. Com a nova capital, no séc. XIX, encheu-se de casas neoclássicas.",
        factos: [
          "A rua Adrianou é uma das mais antigas da cidade ainda em uso.",
          "É a zona mais turística: as tavernas das ruas principais são mais caras.",
          "Subindo, chega-se a Anafiotika (ver quinta-feira).",
          "O Monumento Corégico de Lisícrates (334 a.C.) celebra a vitória num concurso de teatro. Lord Byron hospedou-se num convento ao lado, em 1810."
        ],
        dica: "Afastem-se uma ou duas ruas das principais para comer melhor e mais barato."
      },
      {
        nome: "Moussaka",
        tipo: "comida",
        linha: "Para provar em Plaka",
        semMapa: true,
        historia: "Camadas de beringela, carne picada com tomate e canela, cobertas com molho bechamel e levadas ao forno.",
        factos: [
          "A versão com bechamel que conhecemos foi criada nos anos 1920 pelo chef Nikolaos Tselementes.",
          "Fica melhor ao almoço: as tavernas fazem-na de manhã.",
          "Há uma versão sem carne, para os jejuns ortodoxos."
        ]
      },
      {
        nome: "Souvlaki",
        tipo: "comida",
        linha: "A espetada grega",
        semMapa: true,
        historia: "Pedaços de carne (normalmente porco) grelhados num espeto. «Souvla» quer dizer espeto.",
        factos: [
          "Pode vir no espeto, no prato ou enrolado em pão pita.",
          "Diferença para o gyros: o souvlaki é em cubos grelhados, o gyros é cortado do espeto vertical.",
          "Os gregos antigos já grelhavam carne em espetos («obeloi»): Homero descreve-o na Ilíada."
        ]
      },
      {
        nome: "Museu da Acrópole",
        tipo: "museu",
        linha: "Os originais da Acrópole, com vista para ela",
        maps: "Acropolis Museum",
        historia: "Inaugurado em 2009, projeto de Bernard Tschumi. Foi construído sobre um bairro antigo que se vê através do chão de vidro. As ruínas apareceram durante as obras e o projeto foi adaptado para as deixar à vista.",
        factos: [
          "No último piso, a Galeria do Parthenon está alinhada com o próprio templo, que se vê pelas janelas.",
          "O friso do Parthenon está montado completo: as peças que estão em Londres aparecem em gesso branco.",
          "Aqui estão as cinco Cariátides originais, limpas com laser.",
          "Os pilares foram colocados em pontos escolhidos para não estragar as ruínas, e o edifício foi feito para aguentar sismos fortes."
        ],
        mitos: [
          {
            titulo: "Os 12 Olímpicos",
            texto: "Quem é quem no Monte Olimpo",
            factos: [
              "Zeus: rei dos deuses, céu e trovão · Hera: mulher de Zeus, casamento",
              "Poseidon: mar e terramotos · Deméter: colheitas",
              "Atena: sabedoria e guerra, protetora de Atenas · Apolo: sol, música e profecia",
              "Ártemis: caça, irmã gémea de Apolo · Ares: guerra violenta",
              "Afrodite: amor e beleza · Hefesto: fogo e ferreiros",
              "Hermes: mensageiro, comércio e viajantes · Dionísio: vinho e teatro",
              "No friso leste do Parthenon, no último piso, estão sentados a assistir à procissão das Panateneias. Tentem descobrir quem é quem."
            ]
          }
        ],
        dica: "Comprar o bilhete no dia (na bilheteira ou online). O restaurante do 2.º piso tem esplanada com vista para a Acrópole."
      },
      {
        nome: "Noite na Praça Monastiraki",
        tipo: "bairro",
        linha: "Mercado, mesquita e terraços com vista",
        maps: "Monastiraki Square Athens",
        historia: "O nome («mosteiro pequeno») vem da igreja bizantina no meio da praça. À volta fica o mercado das pulgas e as ruas de lojas.",
        factos: [
          "A Mesquita Tzistarakis (1759) é da época otomana e hoje é museu.",
          "Diz-se que o governador otomano queimou uma coluna do Templo de Zeus para fazer cal para a mesquita.",
          "Vários rooftops (terraços) à volta da praça têm vista da Acrópole iluminada.",
          "Na estação de metro vê-se o leito do antigo rio Erídano, que hoje corre escondido por baixo da cidade."
        ],
        dica: "Subam a um rooftop para ver a Acrópole iluminada à noite."
      },
      {
        nome: "Baklava",
        tipo: "comida",
        linha: "A sobremesa da noite",
        semMapa: true,
        historia: "Camadas finíssimas de massa filo com nozes ou pistácio, regadas com calda de mel. Herança partilhada com a Turquia e o Médio Oriente.",
        factos: [
          "Em grego diz-se «baklavás».",
          "Experimentem também os loukoumades: bolinhas de massa frita com mel e canela.",
          "Diz-se que uma boa baklava tem 33 camadas de massa, uma por cada ano da vida de Cristo."
        ]
      }
    ],
    extras: [
      {
        nome: "Colina de Filopapo",
        tipo: "vista",
        linha: "A Acrópole vista de frente, sem multidões",
        maps: "Philopappos Hill Athens",
        historia: "Também chamada Colina das Musas. No topo está o monumento funerário de Filopapo (c. 116 d.C.), um príncipe exilado que se tornou cidadão e benfeitor de Atenas.",
        factos: [
          "É de acesso livre e tem caminhos de pedra feitos nos anos 1950 pelo arquiteto Dimitris Pikionis.",
          "A meio da subida há uma gruta a que chamam a «Prisão de Sócrates», embora seja quase certo que ele não esteve lá.",
          "É dos melhores sítios para fotografar o Parthenon inteiro.",
          "O monumento tem um relevo de Filopapo num carro, a desfilar como cônsul romano."
        ],
        dica: "Fica do outro lado da rua Dionysiou Areopagitou, em frente à Acrópole. Ótima ao pôr do sol."
      },
      {
        nome: "Loukoumades",
        tipo: "comida",
        linha: "Os «donuts» gregos, para depois do jantar",
        semMapa: true,
        historia: "Bolinhas de massa frita, estaladiças por fora e fofas por dentro, regadas com mel e canela. É dos doces mais antigos do mundo.",
        factos: [
          "O poeta Calímaco (séc. III a.C.) já falava de bolinhos fritos com mel dados aos vencedores dos Jogos.",
          "Hoje há com chocolate, pistácio ou gelado, mas a versão clássica é só mel, canela e nozes."
        ],
        dica: "Há várias casas especializadas em Monastiraki e Psyri."
      }
    ]
  },
  {
    id: "qua",
    data: "2026-10-07",
    curto: "Qua 7",
    titulo: "Quarta, 7 de outubro",
    resumo: "Excursão ao Cabo Súnio e ao Templo de Poseidon, de frente para o Egeu.",
    aviso: "COMPRAR: bilhete/excursão para o Templo de Poseidon.",
    locais: [
      {
        nome: "Templo de Poseidon (Cabo Súnio)",
        tipo: "monumento",
        linha: "O templo à beira do precipício",
        maps: "Temple of Poseidon Sounion",
        historia: "Construído por volta de 440 a.C., na mesma época do Parthenon, no extremo sul da Ática. Os marinheiros viam-no do mar como sinal de que estavam a chegar a casa. Antes houve aqui outro templo, destruído pelos persas em 480 a.C. A colina tinha muralhas e servia de fortaleza para proteger os barcos que levavam cereais para Atenas.",
        factos: [
          "Restam 16 das 34 colunas originais.",
          "O poeta Lord Byron gravou o nome numa das colunas no séc. XIX (procurem-no).",
          "O pôr do sol aqui é dos mais famosos da Grécia.",
          "Na base foram encontradas estátuas gigantes de rapazes (kouroi), hoje no Museu Arqueológico."
        ],
        mitos: [
          {
            titulo: "Teseu e o Minotauro",
            texto: "Atenas tinha de mandar 14 jovens a Creta para serem comidos pelo Minotauro, metade homem, metade touro, preso num labirinto. Teseu ofereceu-se, matou o monstro e saiu graças ao fio que lhe deu a princesa Ariadne.",
            factos: [
              "Prometeu ao pai, o rei Egeu, trocar as velas negras por brancas se voltasse vivo. Esqueceu-se.",
              "Egeu viu as velas negras do Cabo Súnio e atirou-se ao mar, que passou a chamar-se Egeu.",
              "O Templo de Hefesto mostra os feitos de Teseu, por isso lhe chamam Theseion.",
              "Na Odisseia, Homero chama a este lugar «Súnio, o cabo sagrado de Atenas»."
            ]
          }
        ],
        dica: "Fica a cerca de 70 km. Fiquem até ao pôr do sol (por volta das 19h). Levem casaco: venta muito."
      },
      {
        nome: "Como ir",
        tipo: "transporte",
        linha: "Excursão organizada ou autocarro KTEL",
        maps: "KTEL Attikis Mavromateon bus station Athens",
        factos: [
          "Excursão: o mais simples. Muitas saem à tarde para apanhar o pôr do sol.",
          "Autocarro KTEL: sai da Praça Pedion tou Areos (rua Mavromateon), cerca de 1h30 a 2h pela costa. Paga-se a bordo.",
          "A estrada costeira é muito bonita: sentem-se do lado direito na ida."
        ],
        dica: "Confirmar horário do último autocarro de regresso antes de partir."
      },
      {
        nome: "Sugestão: Lago de Vouliagmeni",
        tipo: "vista",
        linha: "Banho em água termal a caminho do Súnio",
        maps: "Lake Vouliagmeni",
        historia: "Lago de água salobra numa gruta que abateu, alimentado por fontes subterrâneas. A água fica entre 22 e 29 °C todo o ano.",
        factos: [
          "Tem pequenos peixes que fazem «peeling» aos pés.",
          "Entrada paga, com espreguiçadeiras.",
          "Por baixo há grutas submersas com vários quilómetros de galerias, exploradas por mergulhadores."
        ],
        dica: "Opcional, se sobrar a manhã livre."
      }
    ],
    extras: [
      {
        nome: "Minas de Láurio",
        tipo: "museu",
        linha: "A prata que salvou Atenas",
        maps: "Lavrio Athens",
        historia: "Em 483 a.C. Atenas encontrou um grande filão de prata aqui. Temístocles convenceu a cidade a gastar o dinheiro em 200 navios de guerra. Três anos depois, essa frota venceu os persas em Salamina.",
        factos: [
          "As minas eram trabalhadas por milhares de escravos em galerias estreitas.",
          "A prata pagou também as famosas moedas com a coruja de Atena.",
          "A vila de Lavrio fica a 10 km do Cabo Súnio, no caminho.",
          "As moedas da coruja eram tão confiáveis que se aceitavam em todo o Mediterrâneo."
        ],
        dica: "Se forem de carro, dá para parar. Se forem de excursão, contem a história no autocarro!"
      },
      {
        nome: "Praias da Riviera de Atenas",
        tipo: "vista",
        linha: "Um mergulho no Egeu antes do pôr do sol",
        maps: "Legrena beach Sounion",
        factos: [
          "Em outubro a água ainda está por volta dos 22 °C.",
          "Logo abaixo do templo há pequenas praias, como Legrena e a baía do Súnio.",
          "No caminho de volta, Varkiza e Vouliagmeni têm praias com bares."
        ],
        dica: "Levem fato de banho e toalha na mochila."
      }
    ]
  },
  {
    id: "qui",
    data: "2026-10-08",
    curto: "Qui 8",
    titulo: "Quinta, 8 de outubro",
    resumo: "Atenas do dia a dia: mercado, ruelas brancas, compras e noite em Gazi.",
    locais: [
      {
        nome: "Mercado Central (Varvakios Agora)",
        tipo: "comida",
        linha: "O mercado onde Atenas faz compras",
        maps: "Varvakios Agora Athens Central Market",
        historia: "Aberto em 1886 na rua Athinas, com o nome de Ioannis Varvakis, um benfeitor que deixou dinheiro à cidade. Continua a ser o mercado do dia a dia dos atenienses. O edifício tem uma estrutura de ferro e vidro típica do séc. XIX.",
        factos: [
          "Dentro: talhos e peixarias, num barulho constante de pregões.",
          "Do outro lado da rua: frutas, legumes, especiarias, azeitonas e queijos.",
          "Tem tavernas simples onde comem os vendedores. Fecha ao domingo."
        ],
        mitos: [
          {
            titulo: "Perséfone e as estações",
            texto: "Hades raptou Perséfone, filha de Deméter, para o submundo. Deméter ficou de luto e nada mais cresceu na terra. Zeus obrigou Hades a devolvê-la, mas ela tinha comido sementes de romã, e quem come no submundo tem de voltar.",
            factos: [
              "Passa parte do ano com Hades (inverno) e o resto com a mãe (primavera e verão).",
              "Em Elêusis, a 20 km de Atenas, celebravam-se os Mistérios de Elêusis em sua honra. Revelar os segredos dava pena de morte.",
              "A romã ainda é símbolo de sorte na Grécia: parte-se uma no Ano Novo.",
              "Em outubro é época de romãs: procurem-nas nas bancas de fruta."
            ]
          }
        ],
        dica: "Vão de manhã. Bom sítio para comprar azeite, mel, orégãos e pistácio de Égina."
      },
      {
        nome: "Anafiotika",
        tipo: "bairro",
        linha: "Uma ilha grega no meio de Atenas",
        maps: "Anafiotika Athens",
        historia: "No séc. XIX, trabalhadores da ilha de Anafi vieram construir o palácio do rei Otão e fizeram casas na encosta da Acrópole, iguais às da sua ilha: brancas, pequenas e com portas azuis.",
        factos: [
          "Construíam de noite, porque um costume otomano dizia que uma casa erguida entre o pôr e o nascer do sol não podia ser demolida.",
          "Restam cerca de 45 casas e vivem lá pessoas.",
          "Fica acima de Plaka, a caminho da Acrópole.",
          "Muitas ruelas não têm saída e acabam em escadas ou na própria rocha da Acrópole."
        ],
        dica: "Falem baixo: é uma zona residencial. Ótima para fotos."
      },
      {
        nome: "Bairro de Thissio",
        tipo: "bairro",
        linha: "Cafés com vista para a Acrópole",
        maps: "Thissio Athens",
        historia: "O nome vem do «Theseion», o Templo de Hefesto que fica mesmo ao lado. É um bairro tranquilo, com casas neoclássicas e esplanadas.",
        factos: [
          "O passeio pedonal Apostolou Pavlou contorna a Acrópole com vista o caminho todo.",
          "O Cine Thission é um cinema ao ar livre com a Acrópole de fundo.",
          "Perto ficam as colinas de Filopapo e da Pnyx, ótimas ao pôr do sol.",
          "O Cine Thission abriu em 1935."
        ],
        dica: "Parem num café da Apostolou Pavlou para descansar as pernas."
      },
      {
        nome: "Rua Ermou",
        tipo: "bairro",
        linha: "A grande rua das compras",
        maps: "Ermou Street Athens",
        historia: "Rua pedonal que liga Syntagma a Monastiraki e continua até Gazi. Tem o nome de Hermes, deus do comércio. Foi traçada no séc. XIX, quando Atenas foi escolhida para capital e ganhou um plano de ruas novo.",
        factos: [
          "No meio da rua fica a pequena igreja bizantina de Kapnikarea, do séc. XI.",
          "A igreja quase foi demolida no séc. XIX e salvou-se pela intervenção do rei Luís I da Baviera.",
          "Tem as grandes marcas internacionais e lojas gregas."
        ],
        mitos: [
          {
            titulo: "Hermes, o ladrão bebé",
            texto: "No dia em que nasceu, Hermes saiu do berço e roubou 50 vacas ao irmão Apolo, fazendo-as andar de costas para enganar quem seguisse as pegadas. Quando foi apanhado, ofereceu a Apolo a lira que acabara de inventar com uma carapaça de tartaruga.",
            factos: [
              "Por isso é o deus dos comerciantes, dos viajantes e dos ladrões. Nome certo para uma rua de compras!",
              "Em Atenas havia «hermas», pilares com a cabeça de Hermes, à porta das casas. Em 415 a.C. apareceram quase todas partidas numa só noite, um escândalo enorme."
            ]
          }
        ]
      },
      {
        nome: "Zona de Gazi",
        tipo: "bairro",
        linha: "Antiga fábrica de gás, hoje vida noturna",
        maps: "Technopolis Gazi Athens",
        historia: "A fábrica de gás da cidade funcionou aqui de 1857 a 1984. Foi transformada no centro cultural Technopolis e o bairro à volta encheu-se de bares e restaurantes.",
        factos: [
          "As chaminés da antiga fábrica ficam iluminadas a vermelho à noite.",
          "A estação de metro Kerameikos fica no centro do bairro.",
          "Ao lado fica o Kerameikos, o cemitério da Atenas antiga.",
          "Na Technopolis há concertos, festivais e um pequeno museu da antiga fábrica."
        ],
        dica: "Melhor ao fim da tarde e à noite. Última noite: aproveitem!"
      }
    ],
    extras: [
      {
        nome: "Kerameikos",
        tipo: "monumento",
        linha: "O cemitério da Atenas antiga",
        maps: "Kerameikos Archaeological Site",
        historia: "Bairro dos oleiros («keramos» = barro, daí a palavra cerâmica) e principal cemitério da cidade. Era aqui que começava a procissão das Panateneias até à Acrópole.",
        factos: [
          "Ainda se vêem as muralhas e a Porta Dípilon, a entrada principal da cidade antiga.",
          "Foi perto daqui que Péricles fez o famoso discurso fúnebre em honra dos mortos da guerra (431 a.C.).",
          "Há túmulos com relevos de despedidas de família, muito comoventes.",
          "Ainda corre aqui o rio Erídano, o mesmo que se vê na estação de Monastiraki."
        ],
        dica: "Fica entre Thissio e Gazi, mesmo no caminho. É calmo e tem tartarugas."
      },
      {
        nome: "Colina da Pnyx",
        tipo: "vista",
        linha: "O parlamento ao ar livre da democracia",
        maps: "Pnyx Athens",
        historia: "Era aqui que se reunia a Assembleia dos cidadãos de Atenas a partir do séc. V a.C. Qualquer cidadão podia subir à tribuna de pedra e falar.",
        factos: [
          "A tribuna (bema), talhada na rocha, ainda lá está.",
          "Discursaram aqui Péricles, Temístocles e Demóstenes.",
          "As reuniões juntavam cerca de 6 000 cidadãos.",
          "Os atrasados eram empurrados para a assembleia com uma corda pintada de vermelho. Quem ficasse manchado pagava multa."
        ],
        dica: "Fica ao lado de Thissio. Subam à tribuna e olhem para a Acrópole: era a vista de quem discursava."
      },
      {
        nome: "Rua Evripidou",
        tipo: "comida",
        linha: "A rua das especiarias, ao lado do mercado",
        maps: "Evripidou street Athens",
        factos: [
          "Lojas antigas com sacos de orégãos, açafrão, chás de montanha e ervas secas.",
          "Bom sítio para comprar chá da montanha (tsai tou vounou) e mastiha de Quios.",
          "Tem o nome do dramaturgo Eurípides."
        ],
        dica: "Fica a uma rua do Mercado Central. Juntem as duas visitas."
      }
    ]
  },
  {
    id: "sex",
    data: "2026-10-09",
    curto: "Sex 9",
    titulo: "Sexta, 9 de outubro",
    resumo: "Partida às 4:40. Malas feitas na véspera!",
    locais: [
      {
        nome: "Ida para o aeroporto",
        tipo: "transporte",
        hora: "4:40",
        linha: "De madrugada não há metro",
        maps: "Athens International Airport Eleftherios Venizelos",
        factos: [
          "O metro para o aeroporto só começa por volta das 5h30, por isso não serve.",
          "Táxi: reservem na véspera (pelo hotel ou app). Entre a meia-noite e as 5h aplica-se a tarifa fixa noturna, mais cara.",
          "Alternativa: autocarro X95 a partir de Syntagma, funciona 24 horas (cerca de 1h de viagem).",
          "Se 4:40 é a hora do voo, saiam do hotel por volta das 2h30."
        ],
        dica: "Façam o check-in online e deixem as malas prontas na quinta à noite."
      }
    ],
    extras: [
      {
        nome: "Lembranças para levar",
        tipo: "dica",
        linha: "O que vale a pena trazer de Atenas",
        semMapa: true,
        factos: [
          "Azeite e azeitonas Kalamata, mel de tomilho, orégãos secos.",
          "Mastiha de Quios (resina usada em doces e licor) e pistácio de Égina.",
          "Ouzo ou tsipouro.",
          "Mati: o olho azul contra o mau-olhado, à venda em todo o lado."
        ],
        dica: "Líquidos (azeite, mel, ouzo) têm de ir na mala de porão."
      }
    ]
  }
];
