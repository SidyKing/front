import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Acceuil',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Utilisateurs'
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Liste Etudiants',
        url: '/admin',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Etudiant',
    url: '/etudiant',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Mon projet',
        url: '/etudiant',
        icon: 'icon-cursor'
      },
      {
        name: 'Upload Memoires',
        url: '/etudiant/upload-memoire',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Professeur',
    url: '/professeur',
    icon: 'icon-star',
    children: [
      {
        name: 'Upload Rapports',
        url: '/professeur/upload-rapport',
        icon: 'icon-star',
        
      },
      {
        name: 'Upload Autorisation',
        url: '/professeur/upload-autorisation',
        icon: 'icon-star'
      }
    ]
  }
];
