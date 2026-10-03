// Conteúdo do guia. Cada dia tem uma lista de locais (cartões).
// tipo: monumento | museu | bairro | comida | vista | transporte | dica
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
          "Bilhete do aeroporto é diferente do bilhete normal de metro."
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
          "To logariasmó, parakaló (a conta, por favor)"
        ],
        dica: "Cuidado: «Ne» quer dizer SIM. É normal oferecerem água e uma sobremesa no fim da refeição."
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
        historia: "Começado por volta de 520 a.C. pelos tiranos de Atenas, ficou parado durante séculos. Só o imperador romano Adriano o terminou, em 131 d.C., quase 650 anos depois.",
        factos: [
          "Tinha 104 colunas coríntias com cerca de 17 m de altura. Hoje restam 15 de pé.",
          "Uma 16.ª coluna caiu numa tempestade em 1852 e continua deitada no chão, em pedaços.",
          "Lá dentro havia uma estátua gigante de Zeus em ouro e marfim."
        ],
        dica: "Daqui vê-se a Acrópole ao fundo. Bom sítio para a primeira foto da viagem."
      },
      {
        nome: "Arco de Adriano",
        tipo: "monumento",
        linha: "A porta entre a Atenas antiga e a romana",
        maps: "Arch of Hadrian Athens",
        historia: "Construído em 131 d.C. pelos atenienses em honra de Adriano, marcava a fronteira entre a cidade antiga e o novo bairro romano.",
        factos: [
          "Do lado da Acrópole diz: «Esta é Atenas, a antiga cidade de Teseu».",
          "Do outro lado: «Esta é a cidade de Adriano e não de Teseu».",
          "Tem cerca de 18 m de altura e é de mármore pentélico, o mesmo do Parthenon."
        ],
        dica: "Fica mesmo ao lado do Templo de Zeus e é de acesso livre."
      },
      {
        nome: "Estádio Panatenaico",
        tipo: "monumento",
        linha: "O único estádio do mundo todo em mármore",
        maps: "Panathenaic Stadium Athens",
        historia: "Construído em 330 a.C. para os Jogos Panatenaicos e refeito em mármore pelo rico Herodes Ático no séc. II. Foi restaurado para acolher os primeiros Jogos Olímpicos modernos, em 1896.",
        factos: [
          "Também é conhecido por «Kallimármaro» (mármore bonito).",
          "Leva cerca de 50 000 pessoas sentadas.",
          "É aqui que a chama olímpica é entregue ao país anfitrião de cada Olimpíada.",
          "Foi a meta da maratona nos Jogos de 2004."
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
          "Fica a 10 min a pé do Templo de Zeus."
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
          "A Praça Kolonaki é o ponto de encontro do bairro."
        ],
        dica: "Mais caro que Koukaki, mas poupa caminho para a tarde."
      },
      {
        nome: "Museu Arqueológico Nacional",
        tipo: "museu",
        linha: "O maior museu da Grécia",
        maps: "National Archaeological Museum Athens",
        historia: "Fundado em 1829 e instalado neste edifício neoclássico desde o fim do séc. XIX. Guarda peças de toda a Grécia antiga, da pré-história até à época romana.",
        factos: [
          "Máscara de Agamémnon: máscara funerária de ouro de Micenas (séc. XVI a.C.), encontrada por Schliemann em 1876.",
          "Mecanismo de Anticítera: engrenagem de bronze do séc. II a.C., chamada «o primeiro computador» porque previa eclipses.",
          "Bronze do Cabo Artemísio: Zeus (ou Poseidon) de braços abertos, por volta de 460 a.C., resgatado do mar.",
          "Jóquei do Artemísio: um rapaz num cavalo a galope, também tirado do fundo do mar."
        ],
        dica: "Precisam de 2 a 3 horas. Se o tempo for curto, vão direto a estas quatro peças. Confirmar horário de domingo."
      },
      {
        nome: "Jantar em Psyri: mezedes",
        tipo: "comida",
        linha: "Pratinhos para partilhar, com ouzo ou tsipouro",
        maps: "Psyri Athens",
        historia: "Psyri era o bairro dos artesãos e curtidores de peles. Hoje é um dos sítios mais animados à noite, com arte urbana e tavernas com música.",
        factos: [
          "Mezedes são pequenos pratos para partilhar, como petiscos.",
          "Clássicos: tzatziki, saganaki (queijo frito), keftedes (almôndegas), dolmades, lulas fritas e fava.",
          "Acompanham com ouzo ou tsipouro, com água e gelo (fica branco)."
        ],
        dica: "Peçam vários pratos para o centro da mesa e vão pedindo mais. A Praça Iroon é o centro do bairro."
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
        historia: "Era a praça central da Atenas clássica: mercado, tribunal, assembleia e ponto de encontro. Sócrates passava aqui os dias a fazer perguntas aos atenienses.",
        factos: [
          "A Stoa de Átalo, uma galeria de 115 m, foi reconstruída nos anos 1950 e hoje é o museu da Ágora.",
          "A Via Panatenaica atravessa a Ágora e sobe até à Acrópole.",
          "No museu há boletins de voto antigos (ostraka) usados para expulsar políticos da cidade."
        ],
        dica: "O Templo de Hefesto fica dentro da Ágora, com o mesmo bilhete."
      },
      {
        nome: "Templo de Hefesto",
        tipo: "monumento",
        linha: "O templo grego mais bem conservado",
        maps: "Temple of Hephaestus Athens",
        historia: "Construído por volta de 450 a.C., na mesma época do Parthenon, em honra de Hefesto, deus do fogo e dos ferreiros. Sobreviveu inteiro porque foi usado como igreja até 1834.",
        factos: [
          "Também lhe chamam «Theseion» porque os relevos mostram feitos de Teseu. Daí o nome do bairro Thissio.",
          "Mantém o telhado e todas as colunas, coisa rara.",
          "À volta havia oficinas de bronze e cerâmica."
        ],
        dica: "Subam à pequena colina. A vista para a Acrópole a partir daqui é das melhores."
      },
      {
        nome: "Ágora Romana",
        tipo: "monumento",
        linha: "O mercado da Atenas romana",
        maps: "Roman Agora Athens",
        historia: "Construída no séc. I a.C. com dinheiro de Júlio César e de Augusto. Quando a Ágora Antiga ficou pequena, o comércio mudou-se para aqui.",
        factos: [
          "A entrada principal é a Porta de Atena Arquegetis, ainda de pé.",
          "Lá dentro está a Mesquita Fethiye, do período otomano.",
          "A Torre dos Ventos está no mesmo recinto."
        ]
      },
      {
        nome: "Torre dos Ventos",
        tipo: "monumento",
        linha: "A primeira estação meteorológica do mundo",
        maps: "Tower of the Winds Athens",
        historia: "Torre de mármore do séc. I a.C., desenhada pelo astrónomo Andrónico de Cirro. Servia de relógio e de cata-vento para a cidade.",
        factos: [
          "Tem 8 lados, cada um com o relevo de um dos 8 ventos.",
          "Tinha relógios de sol por fora e um relógio de água (clepsidra) por dentro.",
          "No topo havia um Tritão de bronze que rodava com o vento."
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
          "A rua Mitropoleos, junto à praça, está cheia de casas de souvlaki e gyros."
        ],
        dica: "Peçam «gyros pita» para levar na mão ou «merida» para um prato completo."
      },
      {
        nome: "Praça Syntagma",
        tipo: "monumento",
        linha: "A praça da Constituição",
        maps: "Syntagma Square Athens",
        historia: "«Syntagma» significa Constituição. O nome vem de 1843, quando o povo e o exército se juntaram aqui e obrigaram o rei Otão a dar ao país a primeira constituição.",
        factos: [
          "O Parlamento grego está no antigo Palácio Real, terminado em 1843.",
          "Em frente fica o Túmulo do Soldado Desconhecido, guardado pelos Evzones.",
          "É o centro da cidade e ponto de partida de muitas manifestações."
        ]
      },
      {
        nome: "Troca da Guarda dos Evzones",
        tipo: "dica",
        hora: "a cada hora certa",
        linha: "A guarda presidencial de saia e pompons",
        maps: "Tomb of the Unknown Soldier Athens",
        historia: "Os Evzones são a guarda de elite que vigia o Túmulo do Soldado Desconhecido dia e noite. Trocam de turno a cada hora, num ritual lento e muito preciso.",
        factos: [
          "A saia (fustanela) tem 400 pregas, uma por cada ano de ocupação otomana.",
          "Os sapatos (tsarouchia) têm pregos na sola e pesam cerca de 3 kg o par.",
          "Os movimentos lentos ajudam o sangue a circular depois de uma hora imóveis.",
          "Ao domingo às 11h há uma cerimónia maior, com banda."
        ],
        dica: "Cheguem 10 min antes da hora certa para ficar à frente."
      },
      {
        nome: "Jardins Nacionais",
        tipo: "vista",
        linha: "Sombra e calma no centro da cidade",
        maps: "National Garden Athens",
        historia: "Mandados criar pela rainha Amália por volta de 1840 como jardim do palácio real. Abriram ao público em 1923.",
        factos: [
          "Têm cerca de 15 hectares, com centenas de espécies de plantas de todo o mundo.",
          "Há lagos com patos e tartarugas e algumas ruínas romanas.",
          "Ao lado fica o Zappeion, um palácio neoclássico de 1888."
        ],
        dica: "Entrada livre. Fecha ao pôr do sol."
      },
      {
        nome: "Monte Licabeto",
        tipo: "vista",
        hora: "pôr do sol ~19h",
        linha: "O ponto mais alto do centro de Atenas",
        maps: "Mount Lycabettus",
        historia: "Diz o mito que Atena levava um rochedo para a Acrópole e o deixou cair aqui quando recebeu más notícias. No topo, a 277 m, está a capela branca de São Jorge.",
        factos: [
          "A vista de 360° vai da Acrópole até ao porto do Pireu e ao mar.",
          "Há um funicular que sobe por dentro da montanha a partir de Kolonaki.",
          "A pé, a subida demora cerca de 30 min."
        ],
        dica: "Cheguem 30 min antes do pôr do sol para apanhar lugar. Confirmar se o funicular está a funcionar."
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
        historia: "Rochedo de cerca de 150 m habitado desde a pré-história. Depois de os persas a destruírem em 480 a.C., Péricles mandou reconstruí-la com os templos que vemos hoje.",
        factos: [
          "Entra-se pelos Propileus, a porta monumental construída entre 437 e 432 a.C.",
          "É Património Mundial da UNESCO desde 1987.",
          "Os blocos com que tropeçam no chão estão numerados para o restauro."
        ],
        dica: "Ir às 8h evita as filas e o calor. O bilhete é com hora marcada: comprem online antes. Levem água e sapatos que agarrem (o mármore escorrega)."
      },
      {
        nome: "Parthenon",
        tipo: "monumento",
        linha: "O templo mais famoso do mundo",
        maps: "Parthenon Athens",
        historia: "Construído entre 447 e 438 a.C. em honra de Atena Pártenos (a virgem), protetora da cidade. Os arquitetos foram Ictino e Calícrates, e as esculturas foram dirigidas por Fídias.",
        factos: [
          "Não tem linhas retas: as colunas incham ligeiramente e o chão curva para parecer perfeito à distância.",
          "Foi igreja, mesquita e depósito de pólvora. Em 1687 uma bala veneziana fê-lo explodir.",
          "Grande parte das esculturas está no British Museum, em Londres (os «mármores de Elgin»).",
          "Lá dentro havia uma estátua de Atena com cerca de 12 m, em ouro e marfim."
        ]
      },
      {
        nome: "Erecteion e as Cariátides",
        tipo: "monumento",
        linha: "O templo das seis mulheres-coluna",
        maps: "Erechtheion Athens",
        historia: "Construído entre 421 e 406 a.C. no sítio onde, segundo o mito, Atena e Poseidon disputaram a cidade. Poseidon fez brotar água salgada, Atena uma oliveira. A cidade escolheu Atena.",
        factos: [
          "O Pórtico das Cariátides tem seis figuras femininas que servem de colunas.",
          "As que estão no templo são cópias. Cinco originais estão no Museu da Acrópole e a sexta no British Museum.",
          "Ao lado há uma oliveira, plantada em memória da de Atena."
        ]
      },
      {
        nome: "Templo de Atena Nike",
        tipo: "monumento",
        linha: "O pequeno templo da vitória",
        maps: "Temple of Athena Nike",
        historia: "Pequeno templo jónico de cerca de 420 a.C., à direita dos Propileus, dedicado a Atena como deusa da vitória.",
        factos: [
          "A estátua de Atena não tinha asas, para que a vitória nunca pudesse fugir de Atenas.",
          "Os otomanos desmontaram-no em 1686 para usar as pedras num bastião. Foi remontado peça a peça em 1835."
        ]
      },
      {
        nome: "Teatro de Dionísio",
        tipo: "monumento",
        linha: "O berço do teatro",
        maps: "Theatre of Dionysus Athens",
        historia: "Na encosta sul da Acrópole, era aqui que se estreavam as tragédias de Ésquilo, Sófocles e Eurípides e as comédias de Aristófanes, nas festas em honra de Dionísio.",
        factos: [
          "Chegou a ter lugar para cerca de 17 000 espectadores.",
          "Na fila da frente há cadeiras de mármore com os nomes dos sacerdotes gravados.",
          "Mais à frente, na mesma encosta, está o Odeon de Herodes Ático (161 d.C.), ainda usado para concertos."
        ],
        dica: "Está incluído no bilhete da Acrópole. A saída pela encosta sul leva direto ao Museu da Acrópole."
      },
      {
        nome: "Almoço em Plaka",
        tipo: "bairro",
        linha: "O bairro mais antigo de Atenas",
        maps: "Plaka Athens",
        historia: "Ruelas na encosta da Acrópole com casas neoclássicas, escadinhas e buganvílias. É habitado sem interrupção há milénios e chamam-lhe o «bairro dos deuses».",
        factos: [
          "A rua Adrianou é uma das mais antigas da cidade ainda em uso.",
          "É a zona mais turística: as tavernas das ruas principais são mais caras.",
          "Subindo, chega-se a Anafiotika (ver quinta-feira)."
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
          "Fica melhor ao almoço: as tavernas fazem-na de manhã."
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
          "Diferença para o gyros: o souvlaki é em cubos grelhados, o gyros é cortado do espeto vertical."
        ]
      },
      {
        nome: "Museu da Acrópole",
        tipo: "museu",
        linha: "Os originais da Acrópole, com vista para ela",
        maps: "Acropolis Museum",
        historia: "Inaugurado em 2009, projeto de Bernard Tschumi. Foi construído sobre um bairro antigo que se vê através do chão de vidro.",
        factos: [
          "No último piso, a Galeria do Parthenon está alinhada com o próprio templo, que se vê pelas janelas.",
          "O friso do Parthenon está montado completo: as peças que estão em Londres aparecem em gesso branco.",
          "Aqui estão as cinco Cariátides originais, limpas com laser."
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
          "Vários rooftops (terraços) à volta da praça têm vista da Acrópole iluminada."
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
          "Experimentem também os loukoumades: bolinhas de massa frita com mel e canela."
        ]
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
        historia: "Construído por volta de 440 a.C., na mesma época do Parthenon, no extremo sul da Ática. Os marinheiros viam-no do mar como sinal de que estavam a chegar a casa.",
        factos: [
          "Restam 16 das 34 colunas originais.",
          "O poeta Lord Byron gravou o nome numa das colunas no séc. XIX (procurem-no).",
          "Diz o mito que o rei Egeu se atirou daqui ao mar ao ver velas negras no barco do filho Teseu. Daí o nome «Mar Egeu».",
          "O pôr do sol aqui é dos mais famosos da Grécia."
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
          "Entrada paga, com espreguiçadeiras."
        ],
        dica: "Opcional, se sobrar a manhã livre."
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
        historia: "Aberto em 1886 na rua Athinas, com o nome de Ioannis Varvakis, um benfeitor que deixou dinheiro à cidade. Continua a ser o mercado do dia a dia dos atenienses.",
        factos: [
          "Dentro: talhos e peixarias, num barulho constante de pregões.",
          "Do outro lado da rua: frutas, legumes, especiarias, azeitonas e queijos.",
          "Tem tavernas simples onde comem os vendedores. Fecha ao domingo."
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
          "Fica acima de Plaka, a caminho da Acrópole."
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
          "Perto ficam as colinas de Filopapo e da Pnyx, ótimas ao pôr do sol."
        ],
        dica: "Parem num café da Apostolou Pavlou para descansar as pernas."
      },
      {
        nome: "Rua Ermou",
        tipo: "bairro",
        linha: "A grande rua das compras",
        maps: "Ermou Street Athens",
        historia: "Rua pedonal que liga Syntagma a Monastiraki e continua até Gazi. Tem o nome de Hermes, deus do comércio.",
        factos: [
          "No meio da rua fica a pequena igreja bizantina de Kapnikarea, do séc. XI.",
          "A igreja quase foi demolida no séc. XIX e salvou-se pela intervenção do rei Luís I da Baviera.",
          "Tem as grandes marcas internacionais e lojas gregas."
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
          "Ao lado fica o Kerameikos, o cemitério da Atenas antiga."
        ],
        dica: "Melhor ao fim da tarde e à noite. Última noite: aproveitem!"
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
    ]
  }
];
