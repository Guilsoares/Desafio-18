module.exports = (grunt)=>{
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    "build/style/main.css" : "src/style/main.less"
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    "dist/style/main.min.css" : 'src/style/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/script/main.min.js' : 'src/js/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify'])


}