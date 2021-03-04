const initialState = {
  id: 1,
  email: 'npellan@gmail.com',
  password: '',
  avatar: '1',
  isLogged: true,
  loading: false,
  pseudo: 'Nicolas',
  badge: 'Grand lecteur',
  token: null,
  lists: [
    {
      id: 1,
      name: 'A lire',
      content: [
        {
          booktitle: 'Le Petit Prince',
        },
      ],
    },
    {
      id: 2,
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
      id: 3,
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
    {
      id: 4,
      name: 'A lire',
      content: [
        {
          booktitle: 'Le Petit Prince',
        },
      ],
    },
    {
      id: 5,
      name: 'A lire',
      content: [
        {
          booktitle: 'Le Petit Prince',
        },
      ],
    },
    {
      id: 6,
      name: 'A lire',
      content: [
        {
          booktitle: 'Le Petit Prince',
        },
      ],
    },
  ],
};

export default (state = initialState, action = {}) => state;
