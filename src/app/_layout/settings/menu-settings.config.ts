// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  isStarterkitExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Calificaciones',

        icon: 'la-file-text',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Consulta calificaciones',
              page: '/form-wizard'
            },
            {
              title: 'Edicion',
              page: '/form-repeater'
            }
          ]
        }
      },
      {
        title: 'Inscripción',

        icon: 'la-terminal',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Realizar Inscripcion',
              page: '/form-elements/form-inputs'
            }
          ]
        }
      }
    ]
  },
  vertical_menu: {
    items: [
      {
        title: 'Calificaciones',

        icon: 'la-file-text',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Consulta calificacioens',
              page: '/form-wizard'
            },
            {
              title: 'Slicitud de Correccioón',
              page: '/form-repeater'
            }
          ]
        }
      },
      {
        title: 'Inofrmacion Personal',

        icon: 'la-terminal',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Consulta',
              page: '/form-elements/form-inputs'
            },
            {
              title: 'Solicitud de modificación',
              page: '/form-elements/input-groups'
            },
            {
              title: 'Historico Academico',
              page: '/form-elements/input-grid'
            }
          ]
        }
      },
      {
        title: 'Calendario Escolar',

        icon: 'la-file-text',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Proximos Eventos',
              page: '/form-layouts/basic-forms'
            },
            {
              title: 'Solicitar sala de juntas',
              page: '/form-layouts/horizontal-forms'
            }
          ]
        }
      }
    ]
  }
};





