import React, { createContext } from 'react';

const MembersContext = createContext();

const pessoa1 = {
  nome: 'Igor Bezerra',
  rm: 'RM550989',
};

const pessoa2 = {
  nome: 'Gabriel Baltazar',
  rm: 'RM550870',
};

export { MembersContext, pessoa1, pessoa2 };
