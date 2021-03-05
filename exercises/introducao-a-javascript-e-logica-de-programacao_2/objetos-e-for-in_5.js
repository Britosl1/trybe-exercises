let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = 'sim';

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'sim'
  }

  for (let i in info, info2){
        if (info.recorrente === info2.recorrente){
            info.recorrente, info2.recorrente = 'Ambos recorrentes';
        }  

      console.log(info[i], 'e', info2[i]);
  }