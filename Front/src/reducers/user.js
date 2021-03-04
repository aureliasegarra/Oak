const initialState = {
  email: 'npellan@gmail.com',
  password: '',
  avatar: '1',
  isLogged: true,
  loading: false,
  pseudo: 'Nicolas',
  token: null,
  lists: [
    {
      name: 'A lire',
      content: [
        {
          booktitle: 'Le Petit Prince',
        },
      ],
    },
    {
      name: 'Lu',
      content: [
        {
          booktitle: 'Les Trois Brigands',
        },
        {
          booktitle: 'Biboundé',
        },
      ],
    },
    {
      name: 'Cadeau Malo',
      content: [
        {
          booktitle: 'John le lapin',
        },
        {
          booktitle: 'Tchoupi le mignon',
        },
      ],
    },
  ],
};

export default (state = initialState, action = {}) => state;
