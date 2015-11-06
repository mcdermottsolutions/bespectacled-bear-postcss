module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // set package.json
    pkg: grunt.file.readJSON('package.json'),

    //env
    env: {
      dev: {
          NODE_ENV : 'DEVELOPMENT'
      },
      prod: {
          NODE_ENV : 'PRODUCTION'
      }
    },

    // preprocess
    preprocess: {
      dev: {
          src : './src/index.html',
          dest : './dev/index.html'
      },
      prod: {
          src : './src/index.html',
          dest : './dist/index.html'
      }
    },

    // clean
    clean: {
      dev: {
        src: ['dev']
      },
      prod: {
        src: ['dist']
      }
    },

    // cssmin (combines all css files into a single css file)
    cssmin: {
      combine: {
        files: {
          'dist/css/style.min.css': ['dev/css/*.css', '!dev/css/font-awesome.min.css']
        }
      }
    },

    // babel
    "babel": {
      dist: {
        "options": {
          "sourceMap": true,
          "experimental": true
        },
        files: [{
          "expand": true,
          "cwd": "src/js/",
          "src": ["**/*.es6"],
          "dest": "dev/js",
          "ext": ".js"
        }]
      }
    },

    // uglify (combines & minifies all js)
    uglify: {
      dist: {
        files: {
          'dist/js/main.min.js': 'dev/js/*.js'
        }
      }
    },

    // copy
    copy: {
      dev: {
        expand: true,
        cwd: 'src/',
        src: ['img/*', 'css/*', '!**/style.css'],
        dest: 'dev/',
        filter: 'isFile',
      },
      dist: {
        expand: true,
        cwd: 'dev/',
        src: ['img/*'],
        dest: 'dist/',
        filter: 'isFile',
      }
    },

    // watch
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: 'src/**',
        tasks: ['default']
      }
    },

    // connect
    connect: {
      dev: {
        options: {
          port: 9000,
          base: './dev',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      },
      dist: {
        options: {
          port: 9000,
          base: './dist',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    },

    // postcss
    postcss: {
      options: {
        map: true,
        parser: require('postcss-scss'),
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('precss')(),
          require('lost')
        ]
      },
      dist: {
          src: 'src/css/style.css',
          dest: 'dev/css/style.css'
      }
    }

  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-postcss');

  // batch tasks
  grunt.registerTask('default', ['env:dev', 'clean:dev', 'babel', 'postcss', 'copy:dev', 'preprocess:dev']);
  grunt.registerTask('dist', ['env:prod', 'clean:prod', 'uglify', 'cssmin', 'copy:dist', 'preprocess:prod']);
  grunt.registerTask('delete', ['clean:dev', 'clean:prod']);
  grunt.registerTask('server', ['connect:dev','watch']);
  grunt.registerTask('serverdist', ['dist', 'connect:dist','watch']);

};
