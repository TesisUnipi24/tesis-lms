const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TESIS (Teman Siswa/i) API Documentation',
      version: '1.0.0',
      description: 'Dokumentasi API untuk TESIS (Teman Siswa/i)',
      contact: {
        name: 'TESIS UNIPI 2024',
        email: 'tesisunipi24@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:6666',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            username: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string', enum: ['student', 'instructor'] },
          },
        },
        Course: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            instructor: { type: 'string' },
            enrolledStudents: {
              type: 'array',
              items: { type: 'string' },
            },
          },
        },
      },
    },
  },
  apis: ['../routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
