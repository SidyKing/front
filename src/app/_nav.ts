import { INavData } from '@coreui/angular';
const role= sessionStorage.getItem("role");
function menu(r:string):INavData[]{
  if(r=='ETUDIANT'){
  return [
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
    },
      {
        name: 'Responsable formation',
        url: '/resp-form',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Classes Memoire',
            url: '/resp-form',
            icon: 'icon-star',
            
          },
        ]
      },
      {
        name: 'Download Memoire',
        url: '/download-memoire',
        icon: 'icon-star',
      },
      {
        name: 'Download Rapport',
        url: '/download-memoire/download-rapport',
        icon: 'icon-star',
      },
      {
        name: 'Download Autoriastion',
        url: '/download-memoire/download-autorisation',
        icon: 'icon-star',
      },
  ];
  }else if(r=='ROLE_PROF'){
  return [
    {
      name: 'Acceuil',
      url: '/dashboard',
      icon: 'icon-speedometer',
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
    },
      {
        name: 'Download Memoire',
        url: '/download-memoire',
        icon: 'icon-star',
      },
  ];
  }
}

export const navItems: INavData[] = menu(role);
