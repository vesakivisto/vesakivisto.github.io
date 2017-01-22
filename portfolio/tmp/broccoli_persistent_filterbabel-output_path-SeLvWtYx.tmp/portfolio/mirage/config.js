define('portfolio/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {
    this.namespace = '/api';

    this.get('/personal-infos', function () {
      return {
        data: [{
          type: 'personal-infos',
          id: 'name',
          attributes: {
            title: 'Name',
            description: 'Vesa Kivistö'
          }
        }, {
          type: 'personal-infos',
          id: 'birthdate',
          attributes: {
            title: 'Born',
            description: 'March 19 1995, Taipalsaari'
          }
        }, {
          type: 'personal-infos',
          id: 'residency',
          attributes: {
            title: 'Place of residency',
            description: 'Jyväskylä'
          }
        }, {
          type: 'personal-infos',
          id: 'email',
          attributes: {
            title: 'Email',
            description: 'kivisto.vesku[at]gmail.com'
          }
        }]
      };
    });

    this.get('/work-experiences', function () {
      return {
        data: [{
          type: 'work-experiences',
          id: 'challenge',
          attributes: {
            title: 'N4S@JAMK Challenge Factory',
            work: [{
              duration: '05/2016 - 07/2016',
              description: 'Challenge Factory was a part of DIMECC Need of Speed program, which focuses on building a foundation for the success of Finnish software companies. ' + 'During my time at Challenge Factory I worked as a junior software developer as a part of a team that developed a proof-of-concept of sewer measurement ' + 'system to monitor water level and flow etc. The work involved technologies and techniques such as Scrum, Java, Kaa, Git, Python, Cassandra and Raspberry Pi.'
            }]
          }
        }, {
          type: 'work-experiences',
          id: 'nitroid',
          attributes: {
            title: 'Nitroid',
            work: [{
              duration: '02/2014 - 04/2014',
              description: 'At Nitroid I worked as a web developer trainee. I did front-end development for various clients using technologies such as HTML5, CSS3, PHP, Drupal and Joomla.'
            }]
          }
        }, {
          type: 'work-experiences',
          id: 'taipalsaari',
          attributes: {
            title: 'Taipalsaari municipality',
            work: [{
              duration: '03/2013 - 07/2013',
              description: 'I continued my previous web development work at Taipalsaari municipality during summer. This work involved technologies such as HTML5, CSS3 and Drupal. ' + 'On the side I did workstation installations and updates.'
            }, {
              duration: '10/2012 - 12/2012',
              description: 'At Taipalsaari municipality I worked as a web developer trainee developing their new website. This work involved technologies such as HTML5, CSS3 and Drupal.'
            }]
          }
        }]
      };
    });

    this.get('/educations', function () {
      return {
        data: [{
          type: 'educations',
          id: 'jamk',
          attributes: {
            title: 'Bachelor\'s Degree in Software Engineering',
            school: 'JAMK University of Applied Sciences',
            duration: '08/2014 -',
            description: 'Studies focus on software development and consist of basics of multiple programming languages, scientific subjects, project works and basics of 3D modeling. ' + 'I aim to graduate during fall 2017.'
          }
        }, {
          type: 'educations',
          id: 'sampo',
          attributes: {
            title: 'Vocational Qualification in Information and Communications Technology',
            school: 'Saimaa Vocational College Sampo',
            duration: '08/2011 - 06/2014',
            description: 'Studies focused on software development and consisted of web development, graphic design, databases and customer service.'
          }
        }, {
          type: 'educations',
          id: 'lauritsala',
          attributes: {
            title: 'Finnish Matriculation Examination',
            school: 'Lauritsala High School for Adults',
            duration: '08/2011 - 06/2014',
            description: ''
          }
        }]
      };
    });

    this.get('/languages', function () {
      return {
        data: [{
          type: 'languages',
          id: 'finnish',
          attributes: {
            title: 'Finnish',
            level: 'Native'
          }
        }, {
          type: 'languages',
          id: 'english',
          attributes: {
            title: 'English',
            level: 'Excellent'
          }
        }, {
          type: 'languages',
          id: 'swedish',
          attributes: {
            title: 'Swedish',
            level: 'Basic'
          }
        }]
      };
    });

    this.get('/skills', function () {
      return {
        data: [{
          type: 'skills',
          id: 'skills',
          attributes: {
            items: [{
              title: 'Java'
            }, {
              title: 'C++'
            }, {
              title: 'CSS3'
            }, {
              title: 'C#'
            }, {
              title: 'JavaScript'
            }, {
              title: 'HTML5'
            }, {
              title: 'Git'
            }, {
              title: 'PHP'
            }, {
              title: 'MySQL'
            }, {
              title: 'Ember'
            }, {
              title: 'Kaa'
            }, {
              title: 'Python'
            }, {
              title: 'Joomla'
            }, {
              title: 'WordPress'
            }, {
              title: 'Drupal'
            }, {
              title: 'MS Office'
            }, {
              title: 'Adobe Photoshop'
            }, {
              title: 'Cassandra'
            }, {
              title: 'Kaa'
            }, {
              title: 'JQuery'
            }, {
              title: 'Node.js'
            }]
          }
        }]
      };
    });
  };
});