export type BlogPost = {
  id: number;
  title: string;
  description: string;
  author: string;
  datePosted: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Migrating from SQLite3 to PostgreSQL Database - Heroku',
    description:
      'Are you planning to deploy your SQLite3 based backend to Heroku? If you answered...',
    author: 'Catherine Vuthi',
    datePosted: 'July 4, 2022',
    url: 'https://dev.to/catevee/migrating-from-sqlite3-to-postgresql-database-heroku-h4l',
  },
  {
    id: 2,
    title: 'Setting up your first ReactJS & Firebase Auth project',
    description:
      'Nowadays, security is very important on websites and apps. Sometimes, developers make...',
    author: 'Catherine Vuthi',
    datePosted: 'May 28, 2022',
    url: 'https://dev.to/catevee/setting-up-your-first-reactjs-firebase-auth-project-4i0j',
  },
  {
    id: 3,
    title: 'Embed Responsive Maps To Your Website - Mapbox GL API',
    description:
      'Did you know that using maps on your website not only helps users find your location...',
    author: 'Catherine Vuthi',
    datePosted: 'Apr 24, 2022',
    url: 'https://dev.to/catevee/embed-responsive-maps-to-your-website-mapbox-gl-api-4cnb',
  },
];