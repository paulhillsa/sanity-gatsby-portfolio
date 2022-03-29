export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62434b45ff6d3c07171ca1d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bwmv94s4',
                  apiId: '4cc8fd80-152a-45d0-9d59-1060d9a70ed8'
                },
                {
                  buildHookId: '62434b453fb4af00750bc0b3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-78avuq7a',
                  apiId: '9db76a20-5c70-4fed-91d5-2df8f1bb10ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulhillsa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-78avuq7a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
